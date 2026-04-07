import { distanceItems } from '../../assets/distances';
import SliderGame from './SliderGame';

const DistanceGame = () => (
  <SliderGame
    gameKey="distance"
    gameName="Distance"
    intro="Two cities appear for 3 seconds. Guess the distance between them."
    showMs={3000}
    items={distanceItems}
    min={100}
    max={20000}
    step={10}
    format={(x) => `${Math.round(x).toLocaleString()} km`}
  />
);

export default DistanceGame;
