const updateTemperatureType = (state: any, action: any): string => {
  if (!state) {
    return 'F';
  }
  switch (action.type) {
    case 'TEMPERATURE_TYPE_IMP':
      return 'F';
    case 'TEMPERATURE_TYPE_METR':
      return 'C';
    default:
      return state.temperatureType;
  }
};

export default updateTemperatureType;
