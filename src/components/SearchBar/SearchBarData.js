// import React, { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";

export function SelectColor(props) {
  // eslint-disable-next-line react/prop-types
  const { aria, colorHandler, colors, otherColors, name, value } = props;
  const { options } = colors;

  // eslint-disable-next-line no-console
  console.log(otherColors);

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

  const { options } = genders;
  // eslint-disable-next-line no-console
  console.log(otherGenders);
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
  const { options } = sizes;
  // eslint-disable-next-line no-console
  console.log(otherSizes);
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
  const { options } = styles;
  // eslint-disable-next-line no-console
  console.log(otherStyles);
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
    _id: " ",
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
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherColors: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  colorHandler: PropTypes.func,
};

SelectGender.defaultProps = {
  genders: {
    _id: " ",
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
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherGenders: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};
SelectSize.defaultProps = {
  aria: "",
  value: "",
  name: "",
  sizes: {
    _id: " ",
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
    _id: PropTypes.string,
    name: PropTypes.string,
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
    _id: " ",
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
    _id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherStyles: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  styleHandler: PropTypes.func,
};
