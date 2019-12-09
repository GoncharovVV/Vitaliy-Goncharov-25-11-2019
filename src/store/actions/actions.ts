import { TEMPERATURE_TYPE_IMP, TEMPERATURE_TYPE_METR } from "../../utils/actionConstants";
import { ITempAction } from "./types";

export const setTemperatureIMP = (temp:string):ITempAction => ({
  type: TEMPERATURE_TYPE_IMP,
  payload: temp
});
export const setTemperatureMETR = (temp:string):ITempAction => ({
  type: TEMPERATURE_TYPE_METR,
  payload: temp
});