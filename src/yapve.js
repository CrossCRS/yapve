import React, { useState, useEffect } from 'react'
import { Container, Header, Segment, Label } from 'semantic-ui-react'
import styles from './yapve.module.css';
import config from './data/config.js';
import strings from './data/strings.js';

import politics from './data/politics.js';
import questions from './data/questions.js';

import WelcomePanel from './components/WelcomePanel';
import QuestionPanel from './components/QuestionPanel';
import ResultsPanel from './components/ResultsPanel';

function YAPVE() {
  const [curQuestionIndex, setQuestionIndex] = useState(-1);
  const [curPanel, setPanel] = useState(0); // 0 - WelcomePanel, 1 - QuestionPanel, 2 - ResultsPanel

  //const [lastMultiplier, setLastMultiplier] = useState(0);
  const [curScores, setScores] = useState({});

  const questions_count = questions.length;

  useEffect(() => {
    let scores = {};

    // Calculate max values for each axis and initialize user score
    politics.axes.forEach((axis) => {
      scores[axis.name] = {};
      scores[axis.name].max_value = 0;
      scores[axis.name].value = 0;

      questions.forEach((question) => {
        question.effects.filter(effect => effect.axis === axis.name).forEach((effect) => {
          scores[axis.name].max_value += Math.abs(effect.value);
        })
      })
    })

    setScores(scores);
  }, []);
  console.log(politics.axes);
  console.log(curScores);

  const prevQuestion = () => {
    if (curQuestionIndex > 0) {
      // TODO: Revert score

      setQuestionIndex(curQuestionIndex - 1);
    }
  }
  const nextQuestion = (multiplier) => {
    //setLastMultiplier(multiplier);

    // Update scores
    const updatedScores = curScores;
    questions[curQuestionIndex].effects.forEach((effect) => {
      updatedScores[effect.axis].value -= effect.value * multiplier;
    })
    setScores(updatedScores);
    console.log(curScores);

    if (curQuestionIndex < questions_count - 1) {
      setQuestionIndex(curQuestionIndex + 1);
    } else {
      showResults();
    }
  }
  const showResults = () => {
    setPanel(2);
  }

  const onStart = () => {
    setQuestionIndex(0);
    setPanel(1);
  }

  return (
    <div>
      <Header as='h1' className={styles.header} content={config.name} textAlign='center' />

      <Container text>
        <Segment>
        { curPanel === 1 ? <Label as='p' color='blue' ribbon>{strings.question} {curQuestionIndex+1} / {questions_count}</Label> : '' }
        {
          curPanel === 0 ?
            <WelcomePanel questionsCount={questions_count} onStart={onStart} />
          : curPanel === 1 ?
            <QuestionPanel question={questions[curQuestionIndex]} questionIndex={curQuestionIndex} questionsCount={questions_count} onBack={prevQuestion} onSendAnswer={nextQuestion} />
          : curPanel === 2 ?
            <ResultsPanel scores={curScores} />
          :
            <WelcomePanel questionsCount={questions_count} onStart={onStart} />
        }
        </Segment>
        <Header as='h5' className={styles.poweredby} textAlign='center' disabled>Powered by <a href='https://github.com/CrossCRS/yapve'>YAPVE</a></Header>
      </Container>
    </div>
  );
}

export default YAPVE;
