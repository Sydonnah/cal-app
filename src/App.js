import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Display from "./components/Display";

function App() {
  const [numberCollection, setNumberCollection] = useState([]);
  const [operatorCollection, setOperatorCollection] = useState([]);
  const [isOperatorPressed, setIsOperatorPressed] = useState(false);
  const [result, setEquation] = useState(0);
  const [data, setData] = useState("");

  return (
    <div className="con">
      <div className="App">
        <Navbar />
        <Display
          numberCollection={numberCollection}
          operatorCollection={operatorCollection}
          isOperatorPressed={isOperatorPressed}
          result={result}
          data={data}
          setData={(val) => setData(val)}
          setNumberPercentage={() => {
            let len = numberCollection.length - 1;
            let temp = parseFloat(numberCollection[len]) / 100;
            numberCollection.splice(len, 1, temp);
          }}
          setClearData={() => {
            while (numberCollection.length > 0) {
              numberCollection.pop();
            }
            while (operatorCollection.length > 0) {
              operatorCollection.pop();
            }
            setData(numberCollection);
          }}
          setNumberCollection={(val) => {
            let temp = [];
            if (isOperatorPressed === false) {
              temp = [...numberCollection];
              if (numberCollection.length > 0) {
                val = numberCollection[numberCollection.length - 1] + val;
                temp[temp.length - 1] = val;
              } else {
                temp = [val];
              }
            } else {
              temp = [...numberCollection, val];
            }
            setNumberCollection(temp);
            setIsOperatorPressed(false);
          }}
          setOperatorCollection={(val) => {
            setOperatorCollection([...operatorCollection, val]);
            setIsOperatorPressed(true);
          }}
          setEquateResult={() => {
            let x = 0;
            let res = 0;
            let temp = 0;
            for (let i = 0; i <= operatorCollection.length - 1; i++) {
              if (operatorCollection[i] === "+") {
                if (x > 0) {
                  temp = res + parseFloat(numberCollection[x + 1]);
                  res = temp;
                  setEquation(res);
                  x++;
                } else {
                  res =
                    parseFloat(numberCollection[x]) +
                    parseFloat(numberCollection[x + 1]);
                  setEquation(res);
                  x++;
                }
              } else if (operatorCollection[i] === "-") {
                if (x > 0) {
                  temp = res - parseFloat(numberCollection[x + 1]);
                  res = temp;
                  setEquation(res);
                  x++;
                } else {
                  res =
                    parseFloat(numberCollection[x]) -
                    parseFloat(numberCollection[x + 1]);
                  setEquation(res);
                  x++;
                }
              } else if (operatorCollection[i] === "*") {
                if (x > 0) {
                  temp = res * parseFloat(numberCollection[x + 1]);
                  res = temp;
                  setEquation(res);
                  x++;
                } else {
                  res =
                    parseFloat(numberCollection[x]) *
                    parseFloat(numberCollection[x + 1]);
                  setEquation(res);
                  x++;
                }
              } else if (operatorCollection[x] === "/") {
                if (x > 0) {
                  temp = res / parseFloat(numberCollection[x + 1]);
                  res = temp;
                  setEquation(res);
                  x++;
                } else {
                  res =
                    parseFloat(numberCollection[x]) /
                    parseFloat(numberCollection[x + 1]);
                  setEquation(res);
                }
              }
            }
            setNumberCollection([res]);
            setOperatorCollection([]);
          }}
        />
      </div>
    </div>
  );
}

export default App;
