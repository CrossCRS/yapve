import React from 'react';
import PropTypes from 'prop-types';
import config from '../data/config';

import Button from './core/Button';

function WelcomePanel({ questionsCount, onStart }) {
  const description = config.description.replace('%QUESTIONS_COUNT%', questionsCount);

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Button className="min-w-full mt-8" onClick={onStart}>Start</Button>
    </div>
  );
}

WelcomePanel.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default WelcomePanel;
