import IWeatherInitialState from "./weather/IReducer";

export default interface IRootReducer {
  weatherReducer: IWeatherInitialState;
}
