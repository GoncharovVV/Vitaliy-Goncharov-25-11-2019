export const setTemperatureIMP = (temp:string):any => ({
  type: 'TEMPERATURE_TYPE_IMP',
  payload: temp
});
export const setTemperatureMETR = (temp:string):any => ({
  type: 'TEMPERATURE_TYPE_METR',
  payload: temp
});