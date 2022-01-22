import React from "react";
import PropTypes from "prop-types";

function SelectColor(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, colorHandler, colors, name, value } = props;

  return (
    <select
      name={name}
      value={value}
      onChange={colorHandler}
      aria-labelledby={aria}
    >
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
