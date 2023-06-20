interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
  theme: string;
  selectedAnswer?: null|number;
}

const questions: Question[] = [
  {
    theme: 'Geschichte',
    question: 'In welchem Jahr hat Alan Turing den theoretischen Grundstein für Maschinen zur Verarbeitung von Algorithmen gelegt?',
    answers: [
      '1936',
      '1956',
      '1966',
      '2011'
    ],
    correctAnswer: 0,
    selectedAnswer: null
  },
  {
    theme: 'Konzepte',
    question: 'Wie ähnelt maschinelles Lernen dem menschlichen Lernen?',
    answers: [
      'Keine Ähnlichkeit',
      'Durch Anweisungen',
      'Durch Erfahrungen',
      'Durch Buchwissen'
    ],
    correctAnswer: 2,
    selectedAnswer: null
  },
  {
    theme: 'Technologie',
    question: 'Was ist ein Beispiel für eine generative KI?',
    answers: [
      'Textklassifikations-KI',
      'Bilderkennungs-KI',
      'ChatGPT',
      'Spam-Erkennungs-KI'
    ],
    correctAnswer: 2,
    selectedAnswer: null
  },
  {
    theme: 'Technologie',
    question: 'Wie viele Verbindungen gibt es im neuronalen Netzwerk von GPT-3?',
    answers: [
      '570 Millionen',
      '170 Milliarden',
      '100 Millionen',
      '300 Milliarden'
    ],
    correctAnswer: 1,
    selectedAnswer: null
  },
  {
    theme: 'Anwendungen',
    question: 'Was ist eine Anwendung von KI im medizinischen Bereich?',
    answers: [
      'Operationen durchführen',
      'Frühe Diagnose durch Datenanalyse',
      'Unterstützung in Rechtsfällen',
      'Steuerung von autonomen Fahrzeugen'
    ],
    correctAnswer: 1,
    selectedAnswer: null
  },
  {
    theme: 'Konzepte',
    question: 'Wie lernt ein neuronales Netzwerk?',
    answers: [
      'Befolgt vorgegebene Regeln',
      'Nutzt Rückkopplung und Gewichtsanpassung',
      'Liest Lehrbücher',
      'Verwendet Intuition'
    ],
    correctAnswer: 1,
    selectedAnswer: null
  },
  {
    theme: 'Anwendungen',
    question: 'Wie interagiert das KI-Tool Google Duplex mit Benutzern?',
    answers: [
      'Per E-Mail',
      'Über eine Chat-Schnittstelle',
      'Am Telefon',
      'Persönlich'
    ],
    correctAnswer: 2,
    selectedAnswer: null
  },
  {
    theme: 'Konzepte',
    question: 'Was ist ein Schlüsselelement der generativen KI?',
    answers: [
      'Sie befolgt strenge Programmieranweisungen',
      'Sie erzeugt oder prognostiziert Ausgaben basierend auf analysierten Daten',
      'Sie kann nur Text generieren',
      'Sie kann nur Bilder verarbeiten'
    ],
    correctAnswer: 1,
    selectedAnswer: null
  },
  {
    theme: 'Anwendungen',
    question: 'Welches Unternehmen nutzt KI in seinem Autopilotensystem für selbstfahrende Autos?',
    answers: [
      'McDonald\'s',
      'Tesla',
      'Microsoft',
      'Nike'
    ],
    correctAnswer: 1,
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
  }
]
export default () => questions
