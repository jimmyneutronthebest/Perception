import type { BaseItem } from '../types';

export interface WordItem extends BaseItem {
  id: string;
  word: string;
  rank: number;
  partOfSpeech: string;
  definition: string;
  frequencyContext: string;
  fact: string;
}

export const wordItems: WordItem[] = [
  { id: 'the', word: 'the', rank: 1, partOfSpeech: 'article', definition: 'Marks a specific noun.', frequencyContext: 'Appears roughly once every 14 words.', difficulty: 1, fact: '“the” dominates English frequency lists.' },
  { id: 'set', word: 'set', rank: 150, partOfSpeech: 'noun/verb', definition: 'Place or arrange in position.', frequencyContext: 'Appears roughly once every 500 words.', difficulty: 1, fact: 'Set has many dictionary senses.' },
  { id: 'whisper', word: 'whisper', rank: 3500, partOfSpeech: 'verb', definition: 'Speak very softly.', frequencyContext: 'Appears roughly once every 7,000 words.', difficulty: 2, fact: 'Common in narrative writing.' },
  { id: 'nuance', word: 'nuance', rank: 18000, partOfSpeech: 'noun', definition: 'A subtle distinction.', frequencyContext: 'Appears roughly once every 40,000 words.', difficulty: 2, fact: 'A favorite in analysis-heavy writing.' },
  { id: 'susurrus', word: 'susurrus', rank: 300000, partOfSpeech: 'noun', definition: 'A whispering or rustling sound.', frequencyContext: 'Appears roughly once every 1M+ words.', difficulty: 3, fact: 'Mostly seen in poetic prose.' },
  { id: 'vellichor', word: 'vellichor', rank: 700000, partOfSpeech: 'noun', definition: 'Wistfulness linked to old bookshops.', frequencyContext: 'Extremely rare in corpora.', difficulty: 3, fact: 'A modern niche coinage.' },
];
