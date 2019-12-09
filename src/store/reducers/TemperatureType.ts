import { TEMPERATURE_TYPE_IMP, TEMPERATURE_TYPE_METR } from "../../utils/actionConstants";
import { temperatureTypeF, temperatureTypeС } from "../../utils/constants";
import { IState } from "../../utils/types";

interface IAction {
  type: string,
};

const updateTemperatureType = (state: IState, { type }: IAction): string => {
  if (!state) {
    return temperatureTypeF;
  }
  switch (type) {
    case TEMPERATURE_TYPE_IMP:
      return temperatureTypeF;
    case TEMPERATURE_TYPE_METR:
      return temperatureTypeС;
    default:
      return state.temperatureType;
  }
};

export default updateTemperatureType;
