import React, { useReducer } from "react";
import { handleCalculator, handleOnchange } from "../Reducer/actionCreator";
import { reducer } from "../Reducer/reducer";
import { store } from "../Reducer/store";
import style from "../styles/fire.module.css";
export const FireCal = () => {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>Fire Calculator</h1>
      <div className={style.main__div}>
        <h3>How much money you required durning retirement?</h3>
        <div className={style.secondMain__div}>
          <div>
            <input
              type="number"
              value={state.expenseToday}
              onChange={(e) =>
                dispatch(handleOnchange("expenseToday", e.target.value))
              }
              placeholder="Monthly expense today"
            />
            <input
              type="number"
              value={state.currentAge}
              placeholder="Current Age"
              onChange={(e) =>
                dispatch(handleOnchange("currentAge", e.target.value))
              }
            />
            <input
              type="number"
              value={state.retireAge}
              onChange={(e) =>
                dispatch(handleOnchange("retireAge", e.target.value))
              }
              placeholder="Retire Age"
            />
            <input
              type="number"
              value={state.inflation}
              onChange={(e) =>
                dispatch(handleOnchange("inflation", e.target.value))
              }
              placeholder="Inflation in %"
            />
            <button onClick={()=>dispatch( handleCalculator(state) )}>Calculate Fire</button>
          </div>
          <div>
            <h2>Yearly Expenses (as of Today) - {state.resYearExpenToday}</h2>
            <h2>Yearly Expenses (as of Retirement) - {state. resYearExpenRet}</h2>
            <h2>Your Fire Number - {state.resfireNumber}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
