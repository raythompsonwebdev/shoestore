import React, { useState } from "react";
import PropTypes from "prop-types";
import searchbarData from "./searchbarData.json";
import SelectGender from "./SelectGender";
import SelectSize from "./SelectSize";
import SelectStyle from "./SelectStyle";
import SelectColor from "./SelectColor";

const [genders, styles, sizes, colors] = searchbarData;
function SearchBar(props) {
  const { labelname, handleChange, changesOrders } = props;

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

  return (
    <aside id="search_category">
      <form id="search_category_form" onSubmit={submit}>
        <fieldset>
          <legend id="select_search">{labelname}</legend>
          <SelectGender
            name="genderVal"
            genders={genders}
            value={genderVal}
            genderHandler={genderHandler}
            aria-labelledby="select_search"
          />
          <SelectStyle
            name="styleVal"
            styles={styles}
            value={styleVal}
            styleHandler={styleHandler}
            aria-labelledby="select_search"
          />
          <SelectSize
            name="sizeVal"
            sizes={sizes}
            value={sizeVal}
            sizeHandler={sizeHandler}
            aria-labelledby="select_search"
          />
          <SelectColor
            name="colorVal"
            colors={colors}
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

SearchBar.propTypes = {
  labelname: PropTypes.string.isRequired,
  changesOrders: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
