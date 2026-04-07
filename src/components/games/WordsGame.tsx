import { wordItems } from '../../assets/words';
import SliderGame from './SliderGame';

const WordsGame = () => (
  <SliderGame
    gameKey="words"
    gameName="Words"
    intro="A word appears for 3 seconds. Guess how common it is."
    showMs={3000}
    items={wordItems}
    min={1}
    max={1000000}
    step={1}
    format={(x) => `~rank ${Math.round(x).toLocaleString()}`}
  />
);

export default WordsGame;
