// import React, { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";

export function SelectColor(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, colorHandler, colors, otherColors, name, value } = props;
  const { options } = otherColors;

  // eslint-disable-next-line no-console
  console.log(colors);

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
  const { aria, genderHandler, genders, otherGenders, name, value } = props;

  const { options } = otherGenders;
  // eslint-disable-next-line no-console
  console.log(genders);
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
  const { aria, name, sizeHandler, sizes, otherSizes, value } = props;
  const { options } = otherSizes;
  // eslint-disable-next-line no-console
  console.log(sizes);
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
  const { arialabelledby, name, styleHandler, styles, otherStyles, value } =
    props;
  const { options } = otherStyles;
  // eslint-disable-next-line no-console
  console.log(styles);
  return (
    <select
      name={name}
      value={value}
      onChange={styleHandler}
      aria-labelledby={arialabelledby}
    >
      {options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectColor.defaultProps = {
  aria: "",
  value: "",
  name: "",
  colors: {
    id: " ",
    name: " ",
    options: [],
  },
  otherColors: {
    id: " ",
    name: " ",
    options: [],
  },
  colorHandler: " ",
};
SelectColor.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  aria: PropTypes.string,
  colors: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherColors: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  colorHandler: PropTypes.func,
};

SelectGender.defaultProps = {
  genders: {
    id: " ",
    name: " ",
    options: [],
  },
  otherGenders: {
    id: " ",
    name: " ",
    options: [],
  },
};
SelectGender.propTypes = {
  genders: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherGenders: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};
SelectSize.defaultProps = {
  aria: "",
  value: "",
  name: "",
  sizes: {
    id: " ",
    name: " ",
    options: [],
  },
  otherSizes: {
    id: " ",
    name: " ",
    options: [],
  },
  sizeHandler: " ",
};
SelectSize.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  aria: PropTypes.string,
  sizes: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherSizes: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  sizeHandler: PropTypes.func,
};

SelectStyle.defaultProps = {
  value: "",
  name: "",
  styles: {
    id: " ",
    name: " ",
    options: [],
  },
  otherStyles: {
    id: " ",
    name: " ",
    options: [],
  },
  styleHandler: " ",
};
SelectStyle.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  styles: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherStyles: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  styleHandler: PropTypes.func,
};
