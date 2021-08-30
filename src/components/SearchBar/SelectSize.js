import React from 'react';

const SelectSize = (props) => {
  const {
    sizes, changeHandler, value, name,
  } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {sizes[0].options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
};

export default SelectSize;
