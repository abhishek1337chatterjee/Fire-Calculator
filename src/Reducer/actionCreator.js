import { CALCULATE_ON_CLICK, INPUT_ON_CHANGE } from "./action";

export const handleOnchange = (type, value) => {
  return {
    type: INPUT_ON_CHANGE,
    payload: { type, value },
  };
};

export const handleCalculator = (state) => {

    const {expenseToday , currentAge, retireAge, inflation} = state;

  let resYearExpenToday = (Number(expenseToday)*12).toFixed(0);
  const ageDiff = Number(retireAge) - Number(currentAge);
  let resYearExpenRet = (resYearExpenToday*(1+Number(inflation)/100)**ageDiff).toFixed(0);
  let resfireNumber = (resYearExpenRet*25).toFixed(0);
  resYearExpenRet = resYearExpenRet.toString();
  resfireNumber = resfireNumber.toString();
  resYearExpenRet = resYearExpenRet.toString();

  return {
    type: CALCULATE_ON_CLICK,
    payload: { resYearExpenRet, resfireNumber, resYearExpenToday },
  };
};
