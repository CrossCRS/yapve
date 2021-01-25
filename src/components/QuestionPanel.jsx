import React from 'react';
import PropTypes from 'prop-types';
import strings from '../data/strings';

import Button from './core/Button';

function QuestionPanel({ question, questionIndex, questionsCount, onSendAnswer, onBack }) {
  return (
    <div className="flex flex-col">
      <span className="text-center text-gray-500 text-sm">{strings.question} {questionIndex + 1} / {questionsCount}</span>

      <p className="text-center font-medium text-xl my-8" dangerouslySetInnerHTML={{ __html: question.question }} />

      <div className="flex flex-col mb-10">
        <Button color="green-500" hoverColor="green-600" ringColor="green-200" className="my-1" onClick={() => onSendAnswer(1.0)}>{strings.strongly_agree}</Button>
        <Button color="green-400" hoverColor="green-600" ringColor="green-200" className="my-1" onClick={() => onSendAnswer(0.5)}>{strings.agree}</Button>
        <Button color="gray-200" hoverColor="gray-300" ringColor="gray-200" className="my-1 text-gray-900" onClick={() => onSendAnswer(0.0)}>{strings.unsure}</Button>
        <Button color="red-400" hoverColor="red-600" ringColor="red-200" className="my-1" onClick={() => onSendAnswer(-0.5)}>{strings.disagree}</Button>
        <Button color="red-500" hoverColor="red-600" ringColor="red-200" className="my-1" onClick={() => onSendAnswer(-1.0)}>{strings.strongly_disagree}</Button>
      </div>

      {
        questionIndex !== 0
          ? <Button color="gray-200" hoverColor="gray-300" ringColor="gray-200" className="text-gray-900" onClick={onBack}>{strings.back}</Button>
          : <Button color="gray-100" hoverColor="gray-100" ringColor="gray-200" className="text-gray-400" disabled>{strings.back}</Button>
      }
    </div>
  );
}

QuestionPanel.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
  }).isRequired,

  questionIndex: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,

  onSendAnswer: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default QuestionPanel;
