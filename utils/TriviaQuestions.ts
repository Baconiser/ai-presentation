interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
  theme: string;
  selectedAnswer?: null|number;
}

const questions: Question[] = [
  // KI im Popkultur
  {
    theme: 'Popkultur',
    question: 'In welchem Science-Fiction-Film spielt eine KI namens HAL 9000 eine zentrale Rolle?',
    answers: [
      'Blade Runner',
      'Matrix',
      '2001: Odyssee im Weltraum',
      'Ex Machina'
    ],
    correctAnswer: 2,
    selectedAnswer: null
  },

  {
    theme: 'Popkultur',
    question: 'Welcher Roman von Isaac Asimov prägte das Konzept der positronischen Roboter und der Drei Gesetze der Robotik?',
    answers: [
      'Der futurologische Kongress',
      'I, Robot',
      'Brave New World',
      'Fahrenheit 451'
    ],
    correctAnswer: 1,
    selectedAnswer: null
  },

  // Anwendungen
  {
    theme: 'Anwendungen',
    question: 'In welchem medizinischen Bereich wird KI erfolgreich eingesetzt, um verschiedene Erkrankungen auf Bildern (Röntgen, CT, MRT) zu erkennen?',
    answers: [
      'Radiologie',
      'Kardiologie',
      'Neurologie',
      'Pathologie'
    ],
    correctAnswer: 0,
    selectedAnswer: null
  },

  {
    theme: 'Anwendungen',
    question: 'Welcher KI-Algorithmus wird oft genutzt, um ähnliche Elemente in Datensätzen zu gruppieren?',
    answers: [
      'K-Means',
      'Linear Regression',
      'Naive Bayes',
      'Random Forest'
    ],
    correctAnswer: 0,
    selectedAnswer: null
  },

  // KI und Wirtschaft
  {
    theme: 'Wirtschaft',
    question: 'Welche KI-Innovation hat das Potenzial, den Kundenservice zu verbessern, indem sie den Mitarbeitern hilft, schneller und präziser auf Kundenanfragen zu reagieren?',
    answers: [
      'Autonomes Fahren',
      'Robotergestützte Prozessautomatisierung',
      'Natürliche Sprachverarbeitung',
      'Empfehlungssysteme'
    ],
    correctAnswer: 2,
    selectedAnswer: null
  },

  {
    theme: 'Wirtschaft',
    question: 'Welcher Sektor wird am stärksten von Künstlicher Intelligenz profitieren, indem er seine Effizienz und Genauigkeit bei der Verarbeitung großer Mengen von Finanzdaten erhöht?',
    answers: [
      'Einzelhandel',
      'Finanzdienstleistungen',
      'Telekommunikation',
      'Landwirtschaft'
    ],
    correctAnswer: 1,
    selectedAnswer: null
  }
]
export default () => questions
