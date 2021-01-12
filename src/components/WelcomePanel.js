import React from 'react';
import { Button } from 'semantic-ui-react'
import config from '../data/config.js';

function WelcomePanel(props) {
  const description = config.description.replace('%QUESTIONS_COUNT%', props.questionsCount);

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Button fluid primary onClick={props.onStart}>Start</Button>
    </div>
  )
}

export default WelcomePanel;