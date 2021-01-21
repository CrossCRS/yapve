import React, { useState, useEffect } from 'react';
import { Container, Header, Segment, Label } from 'semantic-ui-react';
import styles from './yapve.module.css';
import config from './data/config.js';
import strings from './data/strings.js';

import logo from './logo.svg';

import politics from './data/politics.js';
import questions from './data/questions.js';

import WelcomePanel from './components/WelcomePanel';
import QuestionPanel from './components/QuestionPanel';
import ResultsPanel from './components/ResultsPanel';
import PoweredByLabel from './components/PoweredByLabel';

function YAPVE() {
  const PANELS = {
    WELCOME_PANEL: 0,
    QUESTION_PANEL: 1,
    RESULTS_PANEL: 2
  }

  const [curQuestionIndex, setQuestionIndex] = useState(-1);
  const [curPanel, setPanel] = useState(PANELS.WELCOME_PANEL);
  const [curScores, setScores] = useState({});
  const [scoreHistory, setScoreHistory] = useState([]);

  const QUESTIONS_COUNT = questions.length;

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

  const addToScoreHistory = (scoreUpdate) => {
    setScoreHistory([...scoreHistory, scoreUpdate]);
  }
  const popScoreHistory = () => {
    const _scoreHistory = [...scoreHistory];
    const score = _scoreHistory.pop();
    setScoreHistory(_scoreHistory);
    return score;
  }

  const prevQuestion = () => {
    if (curQuestionIndex > 0) {
      const scoreUpdate = popScoreHistory();

      const updatedScores = curScores;
      scoreUpdate.forEach((effect) => {
        updatedScores[effect.axis].value += effect.value;
      })

      setScores(updatedScores);
      setQuestionIndex(curQuestionIndex - 1);
    }
  }
  const nextQuestion = (multiplier) => {
    // Update scores
    const updatedScores = curScores;
    const scoreUpdate = [];
    questions[curQuestionIndex].effects.forEach((effect) => {
      updatedScores[effect.axis].value -= effect.value * multiplier;
      scoreUpdate.push({axis: effect.axis, value: effect.value * multiplier});
    })
    setScores(updatedScores);
    addToScoreHistory(scoreUpdate);

    if (curQuestionIndex < QUESTIONS_COUNT - 1) {
      setQuestionIndex(curQuestionIndex + 1);
    } else {
      showResults();
    }
  }
  const showResults = () => {
    setPanel(PANELS.RESULTS_PANEL);
  }

  const onStart = () => {
    setQuestionIndex(0);
    setPanel(PANELS.QUESTION_PANEL);
  }

  return (
    <div>
      <Container>
        <img src={logo} alt={config.name} className={styles.logo} />
      </Container>

      <Container text>
        <Segment>
        { curPanel === PANELS.QUESTION_PANEL && <Label as='p' color='blue' ribbon>{strings.question} {curQuestionIndex+1} / {QUESTIONS_COUNT}</Label> }

        {
          curPanel === PANELS.WELCOME_PANEL ?
            <WelcomePanel questionsCount={QUESTIONS_COUNT} onStart={onStart} />
          : curPanel === PANELS.QUESTION_PANEL ?
            <QuestionPanel
              question={questions[curQuestionIndex]}
              questionIndex={curQuestionIndex}
              questionsCount={QUESTIONS_COUNT}
              onBack={prevQuestion}
              onSendAnswer={nextQuestion}
            />
          : curPanel === PANELS.RESULTS_PANEL ?
            <ResultsPanel scores={curScores} />
          :
            <WelcomePanel questionsCount={QUESTIONS_COUNT} onStart={onStart} />
        }
        </Segment>

        <PoweredByLabel />
      </Container>
    </div>
  );
}

export default YAPVE;
