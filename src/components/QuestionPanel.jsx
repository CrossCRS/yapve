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
        <Button color="green" className="my-1" onClick={() => onSendAnswer(1.0)}>{strings.strongly_agree}</Button>
        <Button color="lightgreen" className="my-1" onClick={() => onSendAnswer(0.5)}>{strings.agree}</Button>
        <Button basic className="my-1" onClick={() => onSendAnswer(0.0)}>{strings.unsure}</Button>
        <Button color="lightred" className="my-1" onClick={() => onSendAnswer(-0.5)}>{strings.disagree}</Button>
        <Button color="red" className="my-1" onClick={() => onSendAnswer(-1.0)}>{strings.strongly_disagree}</Button>
      </div>

      {
        questionIndex !== 0
          ? <Button basic onClick={onBack}>{strings.back}</Button>
          : <Button disabled>{strings.back}</Button>
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
