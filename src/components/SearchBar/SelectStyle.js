import React from "react";
import PropTypes from "prop-types";

function SelectStyle(props) {
  // eslint-disable-next-line react/prop-types
  const { styles, changeHandler, value, name } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {styles.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectStyle.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default SelectStyle;
