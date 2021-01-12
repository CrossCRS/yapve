import React from 'react';
import { Button, Container } from 'semantic-ui-react'
import strings from '../data/strings.js';
import styles from './QuestionPanel.module.css';

function QuestionPanel(props) {
  return (
    <Container textAlign='center' className={styles.container} >
      <p dangerouslySetInnerHTML={{ __html: props.question.question }} />
      
      <Button color='green' size='large' fluid onClick={() => props.onSendAnswer(1.0)}>{strings.strongly_agree}</Button>
      <Button color='olive' size='large' fluid onClick={() => props.onSendAnswer(0.5)}>{strings.agree}</Button>
      <Button size='large' fluid onClick={() => props.onSendAnswer(0.0)}>{strings.unsure}</Button>
      <Button color='orange' size='large' fluid onClick={() => props.onSendAnswer(-0.5)}>{strings.disagree}</Button>
      <Button color='red' size='large' fluid onClick={() => props.onSendAnswer(-1.0)}>{strings.strongly_disagree}</Button>

      { //props.questionIndex !== 0 ?
        //<Button className={styles.button_back} fluid basic onClick={props.onBack}>{strings.back}</Button>
        //:
        //<Button className={styles.button_back} fluid basic disabled>{strings.back}</Button>
      }
    </Container>
  )
}

export default QuestionPanel;