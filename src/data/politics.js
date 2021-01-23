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
    },
    {
      name: 'Societal',
      left: 'Tradition',
      right: 'Progress',
      left_color: '#8bc34a',
      right_color: '#bf3cd5',
      left_icon: 'ball.svg',
      right_icon: 'ball.svg',
    },
  ],
};

export default politics;
