interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: 'Wann wurde das Erste Neuronale Netzwerk entwickelt?',
    answers: [
      '1943',
      '1957',
      '1969',
      '1972'
    ],
    correctAnswer: 1
  }, {
    question: 'Welche Hardware-Komponente beschleunigt das Training von neuronalen Netzwerken aufgrund ihrer massiven Parallelität und hohen Rechen-/Speicherbandbreite?',
    answers: [
      'GPU',
      'CPU',
      'RAM',
      'SSD'
    ],
    correctAnswer: 0
  }
]

export default questions;
