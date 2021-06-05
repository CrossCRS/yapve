import React from 'react';
import PropTypes from 'prop-types';

import AxisBarIcon from './AxisBarIcon';

function AxisBar({ value, maxValue, axisData }) {
  const normalize = (val, min, max) => (val - min) / (max - min);

  const valuePercent = (normalize(value, -maxValue, maxValue) * 100).toFixed(1);

  const leftWidth = valuePercent < 10 ? 10 : valuePercent;
  const rightWidth = (100 - valuePercent) < 10 ? 10 : 100 - valuePercent;

  let label;

  // If the axis has labels, pick the first one that matches our result
  if (axisData.labels) {
    const labelObj = axisData.labels.find((t) => (valuePercent >= (t.min * 100) && valuePercent < (t.max * 100)));

    if (labelObj) {
      label = labelObj.label;
    }
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">{axisData.left}</h2>
        <h2 className="text-xl font-medium">{axisData.right}</h2>
      </div>
      <div className="flex items-center">
        { axisData.left_icon && <AxisBarIcon icon={axisData.left_icon} color={axisData.left_color} alt={axisData.left} /> }
        <div className="relative h-10 rounded-sm rounded-l-none mr-1 flex items-center justify-start" style={{ width: `${leftWidth}%`, backgroundColor: axisData.left_color }}>
          <div className="mx-1 font-medium">{`${valuePercent}%`}</div>
        </div>
        <div className="relative h-10 rounded-sm rounded-r-none ml-1 flex items-center justify-end" style={{ width: `${rightWidth}%`, backgroundColor: axisData.right_color }}>
          <div className="mx-1 font-medium">{`${(100 - valuePercent).toFixed(1)}%`}</div>
        </div>
        { axisData.right_icon && <AxisBarIcon icon={axisData.right_icon} color={axisData.right_color} alt={axisData.right} /> }
      </div>
      { axisData.labels && <div className="font-medium text-center">{label}</div>}
    </div>
  );
}

AxisBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,

  axisData: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    left_icon: PropTypes.string.isRequired,
    right_icon: PropTypes.string.isRequired,
    left_color: PropTypes.string.isRequired,
    right_color: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default AxisBar;
