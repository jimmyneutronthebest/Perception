import { calorieItems } from '../../assets/calories';
import SliderGame from './SliderGame';

const CaloriesGame = () => (
  <SliderGame
    gameKey="calories"
    gameName="Calories"
    intro="A meal appears for 4 seconds. Guess its calories."
    showMs={4000}
    items={calorieItems}
    min={50}
    max={2500}
    step={25}
    format={(x) => `${Math.round(x)} kcal`}
  />
);

export default CaloriesGame;
