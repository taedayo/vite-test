import './App.css';
import Disp from './Disp';
import { useState } from 'react';


function App() {

  const [suji1, setSuji1] = useState<number | null>(0);
  const [suji2, setSuji2] = useState<number | null>(null);
  const [enzan, setEnzan] = useState<string>("");

  const clikcNum = (e: React.MouseEvent<HTMLInputElement>) => {
    if (enzan === "") {
      const newsuji: number = (suji1 === null ? 0 : suji1) * 10 + parseInt(e.currentTarget.value);
      setSuji1(newsuji);
    } else {
      const newsuji: number = (suji2 === null ? 0 : suji2) * 10 + parseInt(e.currentTarget.value);
      setSuji2(newsuji);
    }
  }
  const clikcEnzan = (e: React.MouseEvent<HTMLInputElement>) => {

    const pushenzan: string = e.currentTarget.value;

    if (pushenzan == "=" && suji2 == null) return;

    if (suji1 != null && suji2 != null) {
      const calcEnzan: string = (pushenzan == "=" ? enzan : pushenzan);
      let newsuji1 = 0;
      if (calcEnzan == "+") {
        newsuji1 = suji1 + suji2;
      } else if (calcEnzan == "-") {
        newsuji1 = suji1 - suji2;
      } else if (calcEnzan == "×") {
        newsuji1 = suji1 * suji2;
      } else if (calcEnzan == "÷") {
        newsuji1 = suji1 / suji2;
      }
      setSuji1(newsuji1);
      setSuji2(null);
      setEnzan("");
    } else {
      setEnzan(pushenzan);
    }
  }

  return (
    <div>
      <Disp suji1={suji1} suji2={suji2} enzan={enzan} />
      <div>
        <input type='submit' className="btn" onClick={clikcNum} value="1" />
        <input type='submit' className="btn" onClick={clikcNum} value="2" />
        <input type='submit' className="btn" onClick={clikcNum} value="3" />
        <input type='submit' className="btn" onClick={() => { setSuji1(0);setSuji2(null);setEnzan(""); }} value="C" />
      </div>
      <div>
        <input type='submit' className="btn" onClick={clikcNum} value="4" />
        <input type='submit' className="btn" onClick={clikcNum} value="5" />
        <input type='submit' className="btn" onClick={clikcNum} value="6" />
        <input type='submit' className="btn" onClick={clikcEnzan} value="=" />
      </div>
      <div>
        <input type='submit' className="btn" onClick={clikcNum} value="7" />
        <input type='submit' className="btn" onClick={clikcNum} value="8" />
        <input type='submit' className="btn" onClick={clikcNum} value="9" />
        <input type='submit' className="btn" onClick={clikcEnzan} value="×" />
      </div>
      <div>
      <input type='submit' className="btn" onClick={clikcNum} value="0" />
      <input type='submit' className="btn" onClick={clikcEnzan} value="+" />
      <input type='submit' className="btn" onClick={clikcEnzan} value="-" />
      <input type='submit' className="btn" onClick={clikcEnzan} value="÷" />
      </div>
    </div>
  )
}

export default App
