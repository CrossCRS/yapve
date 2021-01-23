import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'semantic-ui-react';
import strings from '../data/strings';
import styles from './QuestionPanel.module.css';

function QuestionPanel({ question, questionIndex, onSendAnswer, onBack }) {
  return (
    <Container textAlign="center" className={styles.container}>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />

      <Button color="green" size="large" fluid onClick={() => onSendAnswer(1.0)}>{strings.strongly_agree}</Button>
      <Button color="olive" size="large" fluid onClick={() => onSendAnswer(0.5)}>{strings.agree}</Button>
      <Button size="large" fluid onClick={() => onSendAnswer(0.0)}>{strings.unsure}</Button>
      <Button color="orange" size="large" fluid onClick={() => onSendAnswer(-0.5)}>{strings.disagree}</Button>
      <Button color="red" size="large" fluid onClick={() => onSendAnswer(-1.0)}>{strings.strongly_disagree}</Button>

      {
        questionIndex !== 0
          ? <Button className={styles.button_back} fluid basic onClick={onBack}>{strings.back}</Button>
          : <Button className={styles.button_back} fluid basic disabled>{strings.back}</Button>
      }
    </Container>
  );
}

QuestionPanel.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
  }).isRequired,

  questionIndex: PropTypes.number.isRequired,

  onSendAnswer: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default QuestionPanel;
