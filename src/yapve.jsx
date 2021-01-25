import React, { useState, useEffect } from 'react';
import config from './data/config';

import logo from './logo.svg';

import politics from './data/politics';
import questions from './data/questions';

import WelcomePanel from './components/WelcomePanel';
import QuestionPanel from './components/QuestionPanel';
import ResultsPanel from './components/ResultsPanel';
import PoweredByLabel from './components/PoweredByLabel';

function YAPVE() {
  const PANELS = {
    WELCOME_PANEL: 0,
    QUESTION_PANEL: 1,
    RESULTS_PANEL: 2,
  };

  const [curQuestionIndex, setQuestionIndex] = useState(-1);
  const [curPanel, setPanel] = useState(PANELS.WELCOME_PANEL);
  const [curScores, setScores] = useState({});
  const [scoreHistory, setScoreHistory] = useState([]);

  const QUESTIONS_COUNT = questions.length;

  useEffect(() => {
    const scores = {};

    // Calculate max values for each axis and initialize user score
    politics.axes.forEach((axis) => {
      scores[axis.name] = {};
      scores[axis.name].max_value = 0;
      scores[axis.name].value = 0;

      questions.forEach((question) => {
        question.effects.filter((effect) => effect.axis === axis.name).forEach((effect) => {
          scores[axis.name].max_value += Math.abs(effect.value);
        });
      });
    });

    setScores(scores);
  }, []);

  const addToScoreHistory = (scoreUpdate) => {
    setScoreHistory([...scoreHistory, scoreUpdate]);
  };
  const popScoreHistory = () => {
    const scoreHistoryCopy = [...scoreHistory];
    const score = scoreHistoryCopy.pop();
    setScoreHistory(scoreHistoryCopy);
    return score;
  };

  const prevQuestion = () => {
    if (curQuestionIndex > 0) {
      const scoreUpdate = popScoreHistory();

      const updatedScores = curScores;
      scoreUpdate.forEach((effect) => {
        updatedScores[effect.axis].value += effect.value;
      });

      setScores(updatedScores);
      setQuestionIndex(curQuestionIndex - 1);
    }
  };
  const nextQuestion = (multiplier) => {
    // Update scores
    const updatedScores = curScores;
    const scoreUpdate = [];
    questions[curQuestionIndex].effects.forEach((effect) => {
      updatedScores[effect.axis].value -= effect.value * multiplier;
      scoreUpdate.push({ axis: effect.axis, value: effect.value * multiplier });
    });
    setScores(updatedScores);
    addToScoreHistory(scoreUpdate);

    if (curQuestionIndex < QUESTIONS_COUNT - 1) {
      setQuestionIndex(curQuestionIndex + 1);
    } else {
      setPanel(PANELS.RESULTS_PANEL);
    }
  };

  const onStart = () => {
    setQuestionIndex(0);
    setPanel(PANELS.QUESTION_PANEL);
  };

  const renderPanel = () => {
    if (curPanel === PANELS.QUESTION_PANEL) {
      return (
        <QuestionPanel
          question={questions[curQuestionIndex]}
          questionIndex={curQuestionIndex}
          questionsCount={QUESTIONS_COUNT}
          onBack={prevQuestion}
          onSendAnswer={nextQuestion}
        />
      );
    }

    if (curPanel === PANELS.RESULTS_PANEL) {
      return <ResultsPanel scores={curScores} />;
    }

    return <WelcomePanel questionsCount={QUESTIONS_COUNT} onStart={onStart} />;
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      <img src={logo} alt={config.name} className="mx-auto" />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white py-6 px-6 my-6 shadow-lg rounded-md">
          { renderPanel() }
        </div>

        <PoweredByLabel className="text-center" />
      </div>
    </div>
  );
}

export default YAPVE;
