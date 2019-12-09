import { TEMPERATURE_TYPE_IMP, TEMPERATURE_TYPE_METR } from "../../utils/actionConstants";
import { ISetTemperature } from "./types";
import { temperatureTypeF, temperatureTypeС } from "../../utils/constants";

export const setTemperatureIMP:ISetTemperature = () => ({
  type: TEMPERATURE_TYPE_IMP,
  payload: temperatureTypeF
});
export const setTemperatureMETR:ISetTemperature = () => ({
  type: TEMPERATURE_TYPE_METR,
  payload: temperatureTypeС
});