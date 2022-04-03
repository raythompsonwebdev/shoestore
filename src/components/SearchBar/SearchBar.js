import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SelectGender,
  SelectColor,
  // SelectStyle,
  SelectSize,
} from "./SearchBarData";

import searchbarData2 from "../../data/searchbarData.json";

function SearchBar(props) {
  const {
    changesOrders,
    handleChange,
    labelname,
    // orderByVal,
    // orderDir,
    searchData,
  } = props;

  const [genderVal, setGenderVal] = useState(" ");
  const [sizeVal, setSizeVal] = useState(" ");
  const [styleVal, setStyleVal] = useState(" ");
  const [colorVal, setColorVal] = useState(" ");

  // const [genders, styles, sizes, colors] = searchbarData2;

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
  // eslint-disable-next-line func-style
  const submit = (event) => {
    event.preventDefault();

    handleChange(genderVal);
    changesOrders(genderVal, "asc");
    // eslint-disable-next-line no-console
    console.log(
      `You have entered \n Gender:${genderVal},\n Style: ${styleVal},\n  Size: ${sizeVal} \n  Colour :${colorVal}. \n This form is under maintenance and will be ready to use shortly`
    );
  };

  const [gender1, style1, size1, color1] = searchData;

  const [gender, style, size, color] = searchbarData2;

  // eslint-disable-next-line no-console
  console.log(searchData, gender1, style1, size1, color1);

  return (
    <aside id="search_category">
      <form id="search_category_form" onSubmit={submit}>
        <fieldset>
          <legend id="select_search">{labelname}</legend>
          <SelectGender
            name="genderVal"
            genders={gender}
            otherGenders={gender1}
            value={genderVal}
            genderHandler={genderHandler}
            aria-labelledby="select_search"
          />
          {/* <SelectStyle
            name="styleVal"
            styles={style}
            otherStyles={style1}
            value={styleVal}
            styleHandler={styleHandler}
            aria-labelledby="select_search"
          /> */}
          <select
            name="styleVal"
            value={styleVal}
            onChange={styleHandler}
            aria-labelledby="select_search"
          >
            {style.options.map((option) => (
              <option value={option.value} key={option.id}>
                {option.displayValue}
              </option>
            ))}
          </select>
          <SelectSize
            name="sizeVal"
            sizes={size}
            otherSizes={size1}
            value={sizeVal}
            sizeHandler={sizeHandler}
            aria-labelledby="select_search"
          />
          <SelectColor
            name="colorVal"
            colors={color}
            otherColors={color1}
            value={colorVal}
            colorHandler={colorHandler}
            aria-labelledby="select_search"
          />

          <button name="find" className="search_category_btn" type="submit">
            Go
          </button>
        </fieldset>
      </form>
    </aside>
  );
}

SearchBar.defaultProps = {
  labelname: " ",
  // orderByVal: " ",
  // orderDir: " ",
  searchData: [],
  handleChange: " ",
  changesOrders: " ",
};

SearchBar.propTypes = {
  labelname: PropTypes.string,
  // orderByVal: PropTypes.string,
  // orderDir: PropTypes.string,
  searchData: PropTypes.arrayOf(PropTypes.object),
  changesOrders: PropTypes.func,
  handleChange: PropTypes.func,
};

export default SearchBar;
