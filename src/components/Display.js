import { useEffect } from "react";
import Button from "./Button";

const Display = ({
  numberCollection,
  setNumberCollection,
  operatorCollection,
  setOperatorCollection,
  setClearData,
  setData,
  data,
  setEquateResult,
  setNumberPercentage,
}) => {
  const sty = {
    width: "100%",
    height: "150px",
    justifyContent: "space=between",
    textAlign: "right",
    fontSize: "60px",
    color: "white",
    backgroundColor: "black",
  };
  const ksty = {
    display: "flex",
    justifyContent: "space-around",
    padding: "5px",
  };

  function isButtonPressed(label) {
    if (label === "C") {
      setClearData();
    } else if (label === "()") {
      //findindex and find function
    } else if (label === "+/-") {
      setNumberCollection("-");
    } else if (label === "=") {
      setEquateResult();
    } else if (label === "%") {
      setNumberPercentage();
    } else if (
      label === "/" ||
      label === "+" ||
      label === "-" ||
      label === "*"
    ) {
      setOperatorCollection(label);
    } else {
      setNumberCollection(label);
    }
  }

  useEffect(() => {
    setData("");
    display();
  }, [numberCollection, operatorCollection]);

  return (
    <div>
      <input type="text" style={sty} value={data} id="text" disabled />

      <div>
        <div style={ksty}>
          <Button label={"C"} isButtonPressed={isButtonPressed} />
          <Button label={"()"} isButtonPressed={isButtonPressed} />
          <Button label={"%"} isButtonPressed={isButtonPressed} />
          <Button label={"/"} isButtonPressed={isButtonPressed} />
        </div>
        <div style={ksty}>
          <Button label={"7"} isButtonPressed={isButtonPressed} />
          <Button label={"8"} isButtonPressed={isButtonPressed} />
          <Button label={"9"} isButtonPressed={isButtonPressed} />
          <Button label={"*"} isButtonPressed={isButtonPressed} />
        </div>
        <div style={ksty}>
          <Button label={"4"} isButtonPressed={isButtonPressed} />
          <Button label={"5"} isButtonPressed={isButtonPressed} />
          <Button label={"6"} isButtonPressed={isButtonPressed} />
          <Button label={"-"} isButtonPressed={isButtonPressed} />
        </div>
        <div style={ksty}>
          <Button label={"1"} isButtonPressed={isButtonPressed} />
          <Button label={"2"} isButtonPressed={isButtonPressed} />
          <Button label={"3"} isButtonPressed={isButtonPressed} />
          <Button label={"+"} isButtonPressed={isButtonPressed} />
        </div>
        <div style={ksty}>
          <Button label={"+/-"} isButtonPressed={isButtonPressed} />
          <Button label={"0"} isButtonPressed={isButtonPressed} />
          <Button label={"."} isButtonPressed={isButtonPressed} />
          <Button label={"="} isButtonPressed={isButtonPressed} />
        </div>
      </div>
    </div>
  );

  function display() {
    let _switch = false;
    let longest = numberCollection.length + operatorCollection.length;
    let numberCounter = 0;
    let operatorCounter = 0;

    if (longest > 1) {
      for (let i = 0; i <= longest - 1; i++) {
        if (_switch === false) {
          setData(numberCollection[numberCounter]);
          numberCounter++;
          _switch = !_switch;
        } else {
          setData(operatorCollection[operatorCounter]);
          operatorCounter++;
          _switch = !_switch;
        }
      }
    } else {
      setData(numberCollection[0] !== undefined ? numberCollection[0] : 0);
    }
    console.log(data);
  }
};

export default Display;
