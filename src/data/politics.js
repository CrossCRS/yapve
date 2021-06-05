const politics = {
  axes: [
    {
      name: 'Economic', // Displayed and used for question effects
      left: 'Equality',
      right: 'Markets',
      left_color: '#f44330', // Progress bar color
      right_color: '#008970',
      left_icon: 'ball.svg', // Progress bar icon (found in public/img/icons/)
      right_icon: 'ball.svg', // You can skip these properties to not display any icons.
      labels: [ // Optional axis labels to assign to users' results. In case of multiple matches the first one is displayed.
        // Values are interpreted as [min, max) interval, with min and max being percents
        { min: 0.00 /* from min INCLUDING */, max: 0.49 /* up to max NOT INCLUDING */, label: 'Markets' },
        { min: 0.49, max: 0.51, label: 'Centrist' },
        { min: 0.51, max: 1.01, label: 'Social' },
      ],
    },
    {
      name: 'Societal',
      left: 'Tradition',
      right: 'Progress',
      left_color: '#8bc34a',
      right_color: '#bf3cd5',
      left_icon: 'ball.svg',
      right_icon: 'ball.svg',
      labels: [
        { min: 0.00, max: 0.21, label: 'Very Progressive' },
        { min: 0.21, max: 0.45, label: 'Progressive' },
        { min: 0.45, max: 0.56, label: 'Centrist' },
        { min: 0.56, max: 0.81, label: 'Traditional' },
        { min: 0.81, max: 1.01, label: 'Very Traditional' },
      ],
    },
  ],
};

export default politics;
