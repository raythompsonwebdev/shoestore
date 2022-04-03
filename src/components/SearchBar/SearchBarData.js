import React, { useState, useEffect } from "react";
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
  const { aria, genderHandler, genders, name, value } = { ...props };

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
  const { arialabelledby, name, otherStyles, styleHandler, styles, value } =
    props;
  // const { options } = styles;
  // eslint-disable-next-line no-console
  // console.log(otherStyles.options);

  const [style, setstyle] = useState([]);

  useEffect(() => setstyle(otherStyles), [otherStyles]);

  // eslint-disable-next-line no-console
  console.log(style.options);

  return (
    <select
      name={name}
      value={value}
      onChange={styleHandler}
      aria-labelledby={arialabelledby}
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
  value: "",
  name: "",
  styles: {},
  otherStyles: {},
  styleHandler: " ",
};
SelectStyle.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  styles: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherStyles: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        displayValue: PropTypes.string,
        id: PropTypes.number,
        value: PropTypes.string,
      })
    ),
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
  genders: {
    name: " ",
  },
  otherGenders: {
    id: " ",
    name: " ",
  },
};
SelectGender.propTypes = {
  genders: PropTypes.shape({
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  otherGenders: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
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
