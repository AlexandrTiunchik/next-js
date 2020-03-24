import IRootReducer from "../IRootReducer";
import { IWeather } from "../../interfaces/intex";

export const getWeather = (state: IRootReducer): IWeather => state.weatherReducer.weather;
