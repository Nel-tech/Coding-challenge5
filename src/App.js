import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState();
  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0);

  function handleReset() {
    setBill("");
    setPercentage("");
    setPercentage1("");
  }

  const tip = bill + (percentage + percentage1) / 2 / 100;
  return (
    <div>
      <BillCalculator bill={bill} onsetBill={setBill}>
        {" "}
        How much was the Bill?{" "}
      </BillCalculator>
      <SelectPercentage per={percentage} onSelect={setPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage per={percentage1} onSelect={setPercentage1}>
        How did your Friend like our service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

function BillCalculator({ children, bill, onsetBill }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, per, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={per} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay $ {bill + tip} ($ {bill} + ${tip} tip )
      </h3>
    </div>
  );
}

function Reset({ handleReset }) {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
