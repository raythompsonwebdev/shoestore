import {
  Key,
  // ReactElement,
  // JSXElementConstructor,
  // ReactFragment,
  // ReactPortal,
} from "react";

export function SelectColor(props: {
  aria: string;
  colorHandler: any;
  colors: string;
  name: string;
  value: string;
}) {
  const { aria, colorHandler, colors, name, value } = props;
  const { options }: any = colors;

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
          value: string | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue: string | null | undefined;
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
  aria: string;
  genderHandler: any;
  genders: string;
  name: string;
  value: string;
}) {
  const { aria, genderHandler, genders, name, value } = props;
  const { options }: any = genders;

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
          value: string | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue: string | null | undefined;
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
  aria: string;
  name: string;
  sizeHandler: any;
  sizes: string;
  value: string;
}) {
  const { aria, name, sizeHandler, sizes, value } = props;
  const { options }: any = sizes;
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
          value: string | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue: string | null | undefined;
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
  arialabelledby: string;
  name: string;
  styleHandler: any;
  styles: string;
  value: string;
}) {
  const { arialabelledby, name, styleHandler, styles, value } = props;
  const { options }: any = styles;

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
          value: string | readonly string[] | undefined;
          id: Key | null | undefined;
          displayValue: string | null | undefined;
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  );
}
