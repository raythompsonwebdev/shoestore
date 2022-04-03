import React from "react";
import PropTypes from "prop-types";

export function SelectColor(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, colorHandler, colors, name, value } = props;
  const { options } = colors;

  return (
    <select
      name={name}
      value={value}
      onChange={colorHandler}
      aria-labelledby={aria}
    >
      {options.map((option) => (
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

  // eslint-disable-next-line no-console
  // console.log(otherGenders);
  const { options } = genders;

  return (
    <select
      name={name}
      value={value}
      onChange={genderHandler}
      aria-labelledby={aria}
    >
      {options.map((option) => (
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
  const { options } = sizes;
  return (
    <select
      name={name}
      value={value}
      onChange={sizeHandler}
      aria-labelledby={aria}
    >
      {options.map((option) => (
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
  const { options } = styles;

  return (
    <select
      name={name}
      value={value}
      onChange={styleHandler}
      aria-labelledby={aria}
    >
      {options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectStyle.defaultProps = {
  aria: "",
  value: "",
  name: "",
  styles: {},
  styleHandler: " ",
};
SelectStyle.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  aria: PropTypes.string,
  styles: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  styleHandler: PropTypes.func,
};

SelectSize.defaultProps = {
  aria: "",
  value: "",
  name: "",
  sizes: {},
  sizeHandler: " ",
};
SelectSize.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  aria: PropTypes.string,
  sizes: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  sizeHandler: PropTypes.func,
};

SelectGender.defaultProps = {
  aria: "",
  value: "",
  name: "",
  genders: {
    name: "",
  },

  othergenders: {
    id: "",
    name: "",
  },
  genderHandler: " ",
};
SelectGender.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  aria: PropTypes.string,

  genders: PropTypes.shape({
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  othergenders: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  genderHandler: PropTypes.func,
};

SelectColor.defaultProps = {
  aria: "",
  value: "",
  name: "",
  colors: {},
  colorHandler: " ",
};
SelectColor.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  aria: PropTypes.string,
  colors: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  colorHandler: PropTypes.func,
};
