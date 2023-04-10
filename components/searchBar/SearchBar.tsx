//import PropTypes from "prop-types";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import {
  SelectGender,
  SelectColor,
  SelectStyle,
  SelectSize,
} from "./SearchBarData";

export default function SearchBar(props: {
  changesOrders: any;
  handleChange: any;
  labelname: any;
  orderByVal: any;
  orderDir: any;
  searchData: any;
}) {
  const {
    changesOrders,
    handleChange,
    labelname,
    orderByVal,
    orderDir,
    searchData,
  } = props;

  const router = useRouter();

  const [genderVal, setGenderVal] = useState(" ");
  const [sizeVal, setSizeVal] = useState(" ");
  const [styleVal, setStyleVal] = useState(" ");
  const [colorVal, setColorVal] = useState(" ");

  // eslint-disable-next-line func-style
  const genderHandler = (event: { target: any }) => {
    const { target } = event;
    const { value } = target;
    setGenderVal(value);
  };
  // eslint-disable-next-line func-style
  const styleHandler = (event: { target: any }) => {
    const { target } = event;
    const { value } = target;
    setStyleVal(value);
  };
  // eslint-disable-next-line func-style
  const sizeHandler = (event: { target: any }) => {
    const { target } = event;
    const { value } = target;
    setSizeVal(value);
  };
  // eslint-disable-next-line func-style
  const colorHandler = (event: { target: any }) => {
    const { target } = event;
    const { value } = target;
    setColorVal(value);
  };

  const resultArray = [genderVal, styleVal, sizeVal, colorVal];

  // eslint-disable-next-line func-style
  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // router.push("/search");
    // // eslint-disable-next-line no-console
    console.log(
      `\n You have entered \n Gender:${resultArray[0]},\n Style: ${resultArray[1]},\n  Size: ${resultArray[2]} \n  Colour :${resultArray[3]}. \n This form is under maintenance and will be ready to use shortly`
    );
  };

  const [gender, style, size, color] = searchData;
  const aria = "search-category-label";

  return (
    <aside id="search-category">
      <form id="search-category-form" onSubmit={submit}>
        <fieldset>
          <legend id="search-category-label">{labelname}</legend>
          <SelectGender
            name="genderVal"
            genders={gender}
            value={genderVal}
            genderHandler={genderHandler}
            aria={aria}
          />

          <SelectStyle
            name="styleVal"
            styles={style}
            value={styleVal}
            styleHandler={styleHandler}
            arialabelledby={aria}
          />

          <SelectSize
            name="sizeVal"
            sizes={size}
            value={sizeVal}
            sizeHandler={sizeHandler}
            aria={aria}
          />
          <SelectColor
            name="colorVal"
            colors={color}
            value={colorVal}
            colorHandler={colorHandler}
            aria={aria}
          />
          <Link
            href={{
              pathname: "/search",
              query: { resultArray },
            }}
            className="search-category-btn"
            type="submit"
          >
            <button name="find">Go</button>
          </Link>
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
