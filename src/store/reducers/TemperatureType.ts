import { TEMPERATURE_TYPE_IMP, TEMPERATURE_TYPE_METR } from "../../utils/actionConstants";
import { temperatureTypeF, temperatureTypeС } from "../../utils/constants";
import { IState } from "../../utils/types";

const updateTemperatureType = (state: IState, action: any): string => {
  if (!state) {
    return temperatureTypeF;
  }
  switch (action.type) {
    case TEMPERATURE_TYPE_IMP:
      return temperatureTypeF;
    case TEMPERATURE_TYPE_METR:
      return temperatureTypeС;
    default:
      return state.temperatureType;
  }
};

export default updateTemperatureType;
