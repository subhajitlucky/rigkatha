// Story and Comic Panel Type Definitions

export interface Dialogue {
  character: string; // Character name or "Narrator"
  text: string; // The dialogue/caption text
  type: 'speech' | 'thought' | 'caption'; // How to display it
}

export interface ComicPanel {
  panelNumber: number; // 1-indexed panel number
  imageUrl: string; // Path to panel image
  imageAlt: string; // Alt text for accessibility
  dialogues: Dialogue[]; // Text IN the panel (speech bubbles, etc.)
  narration: string; // Text BELOW the panel (scene description)
  sceneDescription: string; // For image generation prompts
}

export interface Shloka {
  sanskrit: string; // Original Sanskrit verse
  transliteration: string; // Roman script
  translation: string; // English translation
  reference: string; // e.g., "Rig Veda 1.1.1"
  mandalaSuktaRik: {
    mandala: number;
    sukta: number;
    rik: number;
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-based)
  explanation: string; // Why this answer is correct
}

export interface Lesson {
  title: string; // e.g., "The Power of Pure Intention"
  content: string; // The teaching/wisdom
  practicalApplication: string; // How to apply in daily life
}

export interface Story {
  id: string; // e.g., "agni-wise-fish"
  deity: string; // e.g., "agni"
  title: string; // Story title
  subtitle: string; // Short description
  theme: string[]; // e.g., ["wisdom", "devotion", "humility"]
  ageGroup: string; // e.g., "8-12 years" or "All ages"
  readingTime: number; // In minutes
  panels: ComicPanel[]; // Comic panels in order
  lesson: Lesson; // The teaching
  shloka: Shloka; // Referenced Vedic verse
  quiz?: QuizQuestion; // Optional quiz
  metadata: {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    created: string; // ISO date
    author: string; // Story creator
  };
}

export interface StoryPreview {
  id: string;
  deity: string;
  title: string;
  subtitle: string;
  theme: string[];
  panelCount: number;
  readingTime: number;
  thumbnailUrl: string;
  shlokaReference: string; // e.g., "RV 1.1.1"
}
