import type { BaseRoundItem } from '../types';

export interface WordItem extends BaseRoundItem {
  partOfSpeech: string;
  definition: string;
}

export const wordItems: WordItem[] = [
  { id: 'the', prompt: 'the', actual: 1, difficulty: 1, revealLine: 'Most frequent word in English.', partOfSpeech: 'article', definition: 'used before nouns to refer to specific things' },
  { id: 'set', prompt: 'set', actual: 150, difficulty: 1, revealLine: 'Famously overloaded word.', partOfSpeech: 'verb/noun', definition: 'to put something in a particular place' },
  { id: 'whisper', prompt: 'whisper', actual: 3500, difficulty: 2, revealLine: 'Common in fiction, less in daily prose.', partOfSpeech: 'verb', definition: 'to speak very softly' },
  { id: 'nuance', prompt: 'nuance', actual: 18000, difficulty: 2, revealLine: 'Popular in analysis writing.', partOfSpeech: 'noun', definition: 'a subtle difference in meaning' },
  { id: 'susurrus', prompt: 'susurrus', actual: 300000, difficulty: 3, revealLine: 'Poetic and very rare.', partOfSpeech: 'noun', definition: 'whispering or rustling sound' },
  { id: 'vellichor', prompt: 'vellichor', actual: 700000, difficulty: 3, revealLine: 'Internet-coined niche word.', partOfSpeech: 'noun', definition: 'strange wistfulness in used bookstores' },
];
