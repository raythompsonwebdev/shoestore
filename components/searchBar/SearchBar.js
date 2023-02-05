//import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  SelectGender,
  SelectColor,
  SelectStyle,
  SelectSize,
} from "./SearchBarData";

export default function SearchBar(props) {
  const {
    changesOrders,
    handleChange,
    labelname,
    orderByVal,
    orderDir,
    searchData,
  } = props;

  const [genderVal, setGenderVal] = useState(" ");
  const [sizeVal, setSizeVal] = useState(" ");
  const [styleVal, setStyleVal] = useState(" ");
  const [colorVal, setColorVal] = useState(" ");

  // eslint-disable-next-line func-style
  const genderHandler = (event) => {
    const { target } = event;
    const { value } = target;
    setGenderVal(value);
  };
  // eslint-disable-next-line func-style
  const styleHandler = (event) => {
    const { target } = event;
    const { value } = target;
    setStyleVal(value);
  };
  // eslint-disable-next-line func-style
  const sizeHandler = (event) => {
    const { target } = event;
    const { value } = target;
    setSizeVal(value);
  };
  // eslint-disable-next-line func-style
  const colorHandler = (event) => {
    const { target } = event;
    const { value } = target;
    setColorVal(value);
  };

  // function onItemChange(evt) {
  //   handleChange(evt.target.value);
  //   changesOrders(evt.target.value, orderDir);
  // }

  // eslint-disable-next-line func-style
  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = [...formData.values()];
    const [genderval, styleval, sizeval, colorval] = [...values];

    handleChange(genderval);
    changesOrders(genderval, orderDir);
    // // eslint-disable-next-line no-console
    console.log(
      event,
      `\n You have entered \n Gender:${genderval},\n Style: ${styleval},\n  Size: ${sizeval} \n  Colour :${colorval}. \n This form is under maintenance and will be ready to use shortly`
    );
  };

  const [gender, style, size, color] = searchData;

  return (
    <aside id="search-category">
      <form id="search-category-form" onSubmit={submit}>
        <fieldset>
          <legend id="search-category-label">{labelname}</legend>
          <SelectGender
            name="genderVal"
            className="search-category-input"
            genders={gender}
            value={genderVal}
            genderHandler={genderHandler}
            aria-labelledby="search-category-label"
          />

          <SelectStyle
            name="styleVal"
            className="search-category-input"
            styles={style}
            value={styleVal}
            styleHandler={styleHandler}
            aria-labelledby="search-category-label"
          />

          <SelectSize
            name="sizeVal"
            className="search-category-input"
            sizes={size}
            value={sizeVal}
            sizeHandler={sizeHandler}
            aria-labelledby="search-category-label"
          />
          <SelectColor
            name="colorVal"
            className="search-category-input"
            colors={color}
            value={colorVal}
            colorHandler={colorHandler}
            aria-labelledby="search-category-label"
          />

          <button name="find" className="search-category-btn" type="submit">
            Go
          </button>
        </fieldset>
      </form>
    </aside>
  );
}

// SearchBar.defaultProps = {
//   labelname: " ",
//   // orderByVal: " ",
//   // orderDir: " ",
//   searchData: [],
//   // handleChange: " ",
//   // changesOrders: " ",
// };

// SearchBar.propTypes = {
//   labelname: PropTypes.string,
//   // orderByVal: PropTypes.string,
//   // orderDir: PropTypes.string,
//   searchData: PropTypes.arrayOf(PropTypes.object),
//   // changesOrders: PropTypes.func,
//   // handleChange: PropTypes.func,
// };
