import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import AxisBar from './AxisBar';
import html2canvas from 'html2canvas';
import ReImg from 'reimg';
import politics from '../data/politics.js';
import strings from '../data/strings.js';
import config from '../data/config.js';
import styles from './ResultsPanel.module.css';

import PoweredByLabel from './PoweredByLabel';

function ResultsPanel(props) {
  const exportToImage = () => {
    const element = document.querySelector("#canvas-target");

    html2canvas(element, {
      width: element.scrollWidth+16, // Add small margin
      height: element.scrollHeight,
      logging: false
    }).then(canvas => {
      ReImg.ReImg.fromCanvas(canvas).downloadPng(); 
    });
  }

  return (
    <Container textAlign='center'>
      <div id='canvas-target'>
        <Header as='h1'>{strings.results}</Header>

        {
          Object.keys(props.scores).map((axis, i) => (
            <AxisBar
              value={props.scores[axis].value}
              maxValue={props.scores[axis].max_value}
              axisData={politics.axes.filter(a => a.name === axis)[0]}
            />
          ))
        }

        <div className={styles.labels}>
          <PoweredByLabel margin='0' />
          <Header as='h5' style={{ margin: 0 }} disabled>{config.name}</Header>
        </div>
      </div>

      <Button.Group widths='2'>
        <Button primary onClick={exportToImage} data-html2canvas-ignore>{strings.export_to_image}</Button>
        <Button onClick={() => window.location.reload()} data-html2canvas-ignore>{strings.restart}</Button>
      </Button.Group>
    </Container>
  )
}

export default ResultsPanel;