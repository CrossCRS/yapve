const questions = [
  {
    question: '+22 to Markets',
    effects: [
      { axis: 'Economic', value: 22 } // Strongly agree will give +value (right value), Strongly disagree will give -value (left value)
    ]
  },
  {
    question: '+30 to Markets',
    effects: [
      { axis: 'Economic', value: 30 }
    ]
  },
  {
    question: '+13 to Tradition',
    effects: [
      { axis: 'Societal', value: -13 }
    ]
  },
  {
    question: '+15 to Progress',
    effects: [
      { axis: 'Societal', value: 15 }
    ]
  }
]

export default questions;