import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const handleCalculation = (e) => {
    const operator = ["+", "-", "*", ".", "/", "%"];
    if (value) {
      if (
        operator.includes(e.target.innerText) &&
        operator.includes(value.slice(-1))
      )
        return;
      else {
        setValue(value + e.target.innerText);
      }
    } else {
      if (!operator.includes(e.target.innerText)) setValue(e.target.innerText);
    }
  };

  const handleCalculate = () => {
    const operator = ["+", "-", "*", ".", "/", "%"];
    if (value && !operator.includes(value.slice(-1))) {
      let val = "";
      try {
        val = eval(value.toString());
      } catch (err) {
        alert("Only Natural Numbers Are Allowed");
        setValue("");
        return;
      }
      if (val === 0) {
        setValue("");
        return;
      }
      setValue(val.toString());
    }
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDel = () => {
    if (value) {
      setValue(value.slice(0, -1));
    }
  };

  return (
    <div className="whole_container">
      <div className="calculator-container">
        <div className="output-screen">{value ? value : 0}</div>
        <div className="btn-container">
          <div className="btn btn-op">
            <p onClick={() => handleClear()}>AC</p>
          </div>
          <div className="btn btn-op">
            <p onClick={() => handleDel()}>DEL</p>
          </div>
          <div className="btn btn-op">
            <p onClick={handleCalculation}>%</p>
          </div>
          <div className="btn btn-op">
            <p onClick={handleCalculation}>/</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>7</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>8</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>9</p>
          </div>
          <div className="btn btn-op">
            <p onClick={handleCalculation}>*</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>6</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>5</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>4</p>
          </div>
          <div className="btn btn-op">
            <p onClick={handleCalculation}>-</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>3</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>2</p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>1</p>
          </div>
          <div className="btn btn-op">
            <p onClick={handleCalculation}>+</p>
          </div>
          <div className="btn btn-large">
            <p onClick={handleCalculation} className="btn-large">
              0
            </p>
          </div>
          <div className="btn">
            <p onClick={handleCalculation}>.</p>
          </div>
          <div className="btn btn-op">
            <p onClick={() => handleCalculate()}>=</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
