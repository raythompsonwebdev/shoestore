import React from "react";
import PropTypes from "prop-types";

function SelectSize(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, name, sizeHandler, sizes, value } = props;

  return (
    <select
      name={name}
      value={value}
      onChange={sizeHandler}
      aria-labelledby={aria}
    >
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
