import { CALCULATE_ON_CLICK, INPUT_ON_CHANGE } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_ON_CHANGE:
      const { type, value } = action.payload;
      return { ...state, [type]: value };

    case CALCULATE_ON_CLICK:
    const { resYearExpenRet, resfireNumber, resYearExpenToday } = action.payload;
    return { ...state, resYearExpenRet, resfireNumber, resYearExpenToday };
    default:
      return state;
  }
};
