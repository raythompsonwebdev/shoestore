import React from 'react';

function SelectGender(props) {
  const {
    genders, changeHandler, value, name,
  } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {genders.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

export default SelectGender;
