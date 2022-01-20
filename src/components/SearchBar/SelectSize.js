import React from "react";
import PropTypes from "prop-types";

function SelectSize(props) {
  // eslint-disable-next-line react/prop-types
  const { sizes, changeHandler, value, name } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {sizes.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectSize.defaultProps = {
  sizes: {},
};
SelectSize.propTypes = {
  sizes: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default SelectSize;
