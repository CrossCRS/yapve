import React from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import ReImg from 'reimg';
import AxisBar from './AxisBar';
import politics from '../data/politics';
import strings from '../data/strings';
import config from '../data/config';

import PoweredByLabel from './PoweredByLabel';
import Button from './core/Button';

function ResultsPanel({ scores }) {
  const exportToImage = () => {
    const element = document.querySelector('#canvas-target');

    html2canvas(element, {
      width: element.scrollWidth, // Add small margin
      height: element.scrollHeight,
      logging: false,
    }).then((canvas) => {
      ReImg.ReImg.fromCanvas(canvas).downloadPng();
    });
  };

  return (
    <div className="flex flex-col">
      <div id="canvas-target">
        <h1 className="text-4xl text-center mb-6">{strings.results}</h1>

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

        <div className="flex justify-between mb-6">
          <PoweredByLabel />
          <h5 className="text-gray-700 font-light text-sm" disabled>{config.name}</h5>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button onClick={exportToImage} data-html2canvas-ignore>{strings.export_to_image}</Button>
        <Button basic onClick={() => window.location.reload()} data-html2canvas-ignore>{strings.restart}</Button>
      </div>
    </div>
  );
}

ResultsPanel.propTypes = {
  scores: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    max_value: PropTypes.number.isRequired,
  })).isRequired,
};

export default ResultsPanel;
