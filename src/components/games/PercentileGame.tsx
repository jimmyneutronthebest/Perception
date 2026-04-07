import { percentileItems } from '../../assets/percentiles';
import SliderGame from './SliderGame';

const PercentileGame = () => (
  <SliderGame
    gameKey="percentile"
    gameName="Percentile"
    intro="A measurement appears for 2 seconds. Guess its percentile."
    showMs={2000}
    items={percentileItems}
    min={1}
    max={99}
    step={1}
    format={(x) => `${Math.round(x)}th percentile`}
  />
);

export default PercentileGame;
