import React from "react";
import PropTypes from "prop-types";

function SelectStyle(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, name, styleHandler, styles, value } = props;

  // eslint-disable-next-line no-console
  // console.log(styles);

  return (
    <select
      name={name}
      value={value}
      onChange={styleHandler}
      aria-labelledby={aria}
    >
      {styles.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectStyle.defaultProps = {
  styles: {},
};
SelectStyle.propTypes = {
  styles: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default SelectStyle;
