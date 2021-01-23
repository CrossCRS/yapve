import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Header } from 'semantic-ui-react';
import html2canvas from 'html2canvas';
import ReImg from 'reimg';
import AxisBar from './AxisBar';
import politics from '../data/politics';
import strings from '../data/strings';
import config from '../data/config';
import styles from './ResultsPanel.module.css';

import PoweredByLabel from './PoweredByLabel';

function ResultsPanel({ scores }) {
  const exportToImage = () => {
    const element = document.querySelector('#canvas-target');

    html2canvas(element, {
      width: element.scrollWidth + 16, // Add small margin
      height: element.scrollHeight,
      logging: false,
    }).then((canvas) => {
      ReImg.ReImg.fromCanvas(canvas).downloadPng();
    });
  };

  return (
    <Container textAlign="center">
      <div id="canvas-target">
        <Header as="h1">{strings.results}</Header>

        {
          Object.keys(scores).map((axis) => (
            <AxisBar
              key={axis}
              value={scores[axis].value}
              maxValue={scores[axis].max_value}
              axisData={politics.axes.filter((a) => a.name === axis)[0]}
            />
          ))
        }

        <div className={styles.labels}>
          <PoweredByLabel margin="0" />
          <Header as="h5" style={{ margin: 0 }} disabled>{config.name}</Header>
        </div>
      </div>

      <Button.Group widths="2">
        <Button primary onClick={exportToImage} data-html2canvas-ignore>{strings.export_to_image}</Button>
        <Button onClick={() => window.location.reload()} data-html2canvas-ignore>{strings.restart}</Button>
      </Button.Group>
    </Container>
  );
}

ResultsPanel.propTypes = {
  scores: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    max_value: PropTypes.number.isRequired,
  })).isRequired,
};

export default ResultsPanel;
