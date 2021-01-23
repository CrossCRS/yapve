import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import config from '../data/config';

function WelcomePanel({ questionsCount, onStart }) {
  const description = config.description.replace('%QUESTIONS_COUNT%', questionsCount);

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Button fluid primary size="big" onClick={onStart}>Start</Button>
    </div>
  );
}

WelcomePanel.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default WelcomePanel;
