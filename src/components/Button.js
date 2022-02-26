const Button = ({ label, isButtonPressed }) => {
  const operandSty = {
    width: "70px",
    height: "70px",
    fontSize: "26px",
    borderRadius: "30px",
    fontWeight: "bold",
    backgroundColor: "dimgrey",
    color: "white",
  };

  const operatorSty = {
    width: "70px",
    height: "70px",
    fontSize: "26px",
    borderRadius: "30px",
    fontWeight: "bold",
    backgroundColor: "orange",
    color: "white",
  };

  const specialSty = {
    width: "70px",
    height: "70px",
    fontSize: "26px",
    borderRadius: "30px",
    fontWeight: "bold",
    backgroundColor: "darkgrey",
    color: "white",
  };

  return (
    <div>
      <input
        type="button"
        onClick={() => isButtonPressed(label)}
        style={
          label === "/"
            ? operatorSty
            : label === "*"
            ? operatorSty
            : label === "-"
            ? operatorSty
            : label === "+"
            ? operatorSty
            : label === "="
            ? operatorSty
            : label === "C"
            ? specialSty
            : label === "()"
            ? specialSty
            : label === "%"
            ? specialSty
            : operandSty
        }
        value={label}
      />
    </div>
  );
};

export default Button;
