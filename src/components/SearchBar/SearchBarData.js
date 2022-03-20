import React from "react";
import PropTypes from "prop-types";

export function SelectColor(props) {
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

export function SelectGender(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, genderHandler, genders, name, value } = props;

  return (
    <select
      name={name}
      value={value}
      onChange={genderHandler}
      aria-labelledby={aria}
    >
      {genders.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

export function SelectSize(props) {
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

export function SelectStyle(props) {
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

SelectSize.defaultProps = {
  sizes: {},
};
SelectSize.propTypes = {
  sizes: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};

SelectGender.defaultProps = {
  genders: {},
};
SelectGender.propTypes = {
  genders: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};

SelectColor.defaultProps = {
  colors: {},
};
SelectColor.propTypes = {
  colors: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};
