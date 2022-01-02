import s from "./Calculator.module.css";
import { useState, useEffect } from "react";

const Calculator = (props) => {
  let [currentVal, setCurrentVal] = useState(0);
  useEffect(() => {
    setCurrentVal(currentVal);
  }, [currentVal]);

  const onNumberPressed = (buttonVal) => {
    currentVal === 0
      ? setCurrentVal(buttonVal)
      : setCurrentVal(currentVal + `${buttonVal}`);
  };
  const onOperatorPressed = (buttonVal) => {
    setCurrentVal(currentVal + `${buttonVal}`);
  };
  const onACPressed = () => {
    setCurrentVal(0);
  };
  const onEqualsPressed = () => {
    let sum = eval(currentVal);
    setCurrentVal(sum);
  };
  return (
    <div className={s.calculatorContainer}>
      PEZDA
      <div>
        <input
          type="text"
          readOnly
          className={s.calculatorInput}
          value={currentVal}
        />
      </div>
      <div>
        {props.buttons.map((button, idx) => {
          if (typeof button.val === "number") {
            return (
              <button
                key={idx}
                className={s.button}
                onClick={() => onNumberPressed(button.val)}
              >
                {button.val}
              </button>
            );
          } else if (
            button.val === "+" ||
            button.val === "-" ||
            button.val === "*" ||
            button.val === "/" ||
            button.val === "."
          ) {
            return (
              <button
                key={idx}
                className={s.button + " " + s.operatorButton}
                onClick={() => onOperatorPressed(button.val)}
              >
                {button.val}
              </button>
            );
          } else if (button.val === "AC") {
            return (
              <button
                key={idx}
                className={s.button + " " + s.clearButton}
                onClick={() => onACPressed()}
              >
                {button.val}
              </button>
            );
          } else if (button.val === "=") {
            return (
              <button
                key={idx}
                className={s.button + " " + s.equalsButton}
                onClick={() => onEqualsPressed()}
              >
                {button.val}
              </button>
            );
          }
          // return (
          //   <button
          //     key={idx}
          //     className={
          //       s.button +
          //       " " +
          //       (button.val === "=" ? s.equalsButton : "") +
          //       " " +
          //       (button.val === "AC" ? s.clearButton : "") +
          //       " " +
          //       (button.val === "+" ? s.operatorButton : "")
          //     }
          //     onClick={() => {
          //       toggleCurrentVal(button.val);
          //     }}
          //   >
          //     {button.val}
          //   </button>
          // );
        })}
      </div>
    </div>
  );
};

export default Calculator;
