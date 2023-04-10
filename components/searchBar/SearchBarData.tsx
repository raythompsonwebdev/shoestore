//import PropTypes from "prop-types";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export function SelectColor(props: {
  aria: any;
  colorHandler: any;
  colors: any;
  name: any;
  value: any;
}) {
  const { aria, colorHandler, colors, name, value } = props;
  const { options } = colors;

  return (
    <select
      name={name}
      value={value}
      onChange={colorHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | number | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  );
}

export function SelectGender(props: {
  aria: any;
  genderHandler: any;
  genders: any;
  name: any;
  value: any;
}) {
  const { aria, genderHandler, genders, name, value } = props;
  const { options } = genders;

  return (
    <select
      name={name}
      value={value}
      onChange={genderHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | number | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  );
}

export function SelectSize(props: {
  aria: any;
  name: any;
  sizeHandler: any;
  sizes: any;
  value: any;
}) {
  const { aria, name, sizeHandler, sizes, value } = props;
  const { options } = sizes;
  return (
    <select
      name={name}
      value={value}
      onChange={sizeHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | number | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  );
}

export function SelectStyle(props: {
  arialabelledby: any;
  name: any;
  styleHandler: any;
  styles: any;
  value: any;
}) {
  const { arialabelledby, name, styleHandler, styles, value } = props;
  const { options } = styles;

  return (
    <select
      name={name}
      value={value}
      onChange={styleHandler}
      aria-labelledby={arialabelledby}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | number | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  );
}

// SelectColor.defaultProps = {
//   aria: "",
//   value: "",
//   name: "",
//   colors: {
//     _id: " ",
//     name: " ",
//     options: [],
//   },
//   otherColors: {
//     id: " ",
//     name: " ",
//     options: [],
//   },
//   colorHandler: " ",
// };
// SelectColor.propTypes = {
//   name: PropTypes.string,
//   value: PropTypes.string,
//   aria: PropTypes.string,
//   colors: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   otherColors: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   colorHandler: PropTypes.func,
// };

// SelectGender.defaultProps = {
//   genders: {
//     _id: " ",
//     name: " ",
//     options: [],
//   },
//   otherGenders: {
//     id: " ",
//     name: " ",
//     options: [],
//   },
// };
// SelectGender.propTypes = {
//   genders: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   otherGenders: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
// };
// SelectSize.defaultProps = {
//   aria: "",
//   value: "",
//   name: "",
//   sizes: {
//     _id: " ",
//     name: " ",
//     options: [],
//   },
//   otherSizes: {
//     id: " ",
//     name: " ",
//     options: [],
//   },
//   sizeHandler: " ",
// };
// SelectSize.propTypes = {
//   name: PropTypes.string,
//   value: PropTypes.string,
//   aria: PropTypes.string,
//   sizes: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   otherSizes: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   sizeHandler: PropTypes.func,
// };

// SelectStyle.defaultProps = {
//   value: "",
//   name: "",
//   styles: {
//     _id: " ",
//     name: " ",
//     options: [],
//   },
//   otherStyles: {
//     id: " ",
//     name: " ",
//     options: [],
//   },
//   styleHandler: " ",
// };
// SelectStyle.propTypes = {
//   name: PropTypes.string,
//   value: PropTypes.string,
//   styles: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   otherStyles: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//   }),
//   styleHandler: PropTypes.func,
// };
