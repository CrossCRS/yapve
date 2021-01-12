import React from 'react';
import { Container, Header } from 'semantic-ui-react'
import AxisBar from './AxisBar';
import politics from '../data/politics.js';
import strings from '../data/strings.js';

function ResultsPanel(props) {
  return (
    <Container textAlign='center' >
      <Header as='h1'>{strings.results}</Header>

      { Object.keys(props.scores).map((axis, i) => (
        <AxisBar value={props.scores[axis].value} maxValue={props.scores[axis].max_value} axisData={politics.axes.filter(a => a.name === axis)[0]} />
      ))}
    </Container>
  )
}

export default ResultsPanel;