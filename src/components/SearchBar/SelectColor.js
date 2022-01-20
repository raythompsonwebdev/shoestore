import React from "react";
import PropTypes from "prop-types";

function SelectColor(props) {
  // eslint-disable-next-line react/prop-types
  const { colors, changeHandler, value, name } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {colors.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectColor.defaultProps = {
  colors: {},
};
SelectColor.propTypes = {
  colors: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default SelectColor;
