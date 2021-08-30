import React from 'react';

function SelectStyle(props) {
  const {
    styles, changeHandler, value, name,
  } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {styles[0].options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

export default SelectStyle;
