import React from "react";

function SelectColor(props) {

  let { colors, changeHandler, value, name } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {colors[0].options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

export default SelectColor;
