import React, { useState } from 'react';
import searchbarData from './searchbarData';
import SelectGender from './SelectGender';
import SelectSize from './SelectSize';
import SelectStyle from './SelectStyle';
import SelectColor from './SelectColor';

const [
  genders,
  sizes,
  colors,
  styles,
 ] = searchbarData;

console.log(genders)

function SearchBar () {

  const [genderVal, setGenderVal] = useState(' ');
  const [styleVal, setStyleVal] = useState(' ');
  const [sizeVal, setSizeVal] = useState(' ');
  const [colorVal, setColorVal] = useState(' ');
  const [change, setChange] = useState({});


  const changeHandler = (event) => {

    console.log(change)
    const { target } = event;
    const { value, name } = target;
    setChange({
      [name]: value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    const tempVal = {
      genderVal: setGenderVal(event.target.value),
      styleVal: setStyleVal(event.target.value),
      sizeVal: setSizeVal(event.target.value),
      colorVal: setColorVal(event.target.value),
    };
    console.log(
      `You have entered Gender:${tempVal.genderVal}, Style: ${tempVal.styleVal}, Size: ${tempVal.sizeVal} & Colour :${tempVal.colorVal}. This form is under maintenance and will be ready to use shortly`,
    );
  };


    return (
      <aside id="search_category">
        <form id="search_category_form" onSubmit={submit}>
          <label></label>
          <SelectGender
            name="genderVal"
            genders={genders.options}
            value={genderVal}
            changeHandler={changeHandler}
          />
          <SelectStyle
            name="styleVal"
            styles={styles}
            value={styleVal}
            changeHandler={changeHandler}
          />
          <SelectSize
            name="sizeVal"
            sizes={sizes}
            value={sizeVal}
            changeHandler={changeHandler}
          />
          <SelectColor
            name="colorVal"
            colors={colors}
            value={colorVal}
            changeHandler={changeHandler}
          />
          <button name="find" className="search_category_btn" type="submit">
            Go
          </button>
        </form>
      </aside>
    );

}

export default SearchBar;
