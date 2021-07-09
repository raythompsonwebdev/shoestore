import React from "react";
import searchbarData from "./searchbarData";
import SelectGender from "./SelectGender";
import SelectSize from "./SelectSize";
import SelectStyle from "./SelectStyle";
import SelectColor from "./SelectColor";

let { genders, sizes, colors, styles } = searchbarData;

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      genderVal: " ",
      styleVal: " ",
      sizeVal: " ",
      colorVal: " ",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      //computed property
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    let tempVal = {
      genderVal: this.state.genderVal,
      styleVal: this.state.styleVal,
      sizeVal: this.state.sizeVal,
      colorVal: this.state.colorVal,
    };

    alert(
      `You have entered Gender:${tempVal.genderVal}, Style: ${tempVal.styleVal}, Size: ${tempVal.sizeVal} & Colour :${tempVal.colorVal}. This form is under maintenance and will be ready to use shortly`,
    );


  };

  render() {
    return (
      <aside id="search_category">
        <form id="search_category_form" onSubmit={this.submit}>

          <label>{this.props.labelname}</label>

          <SelectGender
            name="genderVal"
            genders={genders}
            value={this.state.genderVal}
            changeHandler={this.changeHandler}
          />

          <SelectStyle
            name="styleVal"
            styles={styles}
            value={this.state.styleVal}
            changeHandler={this.changeHandler}
          />

          <SelectSize
            name="sizeVal"
            sizes={sizes}
            value={this.state.sizeVal}
            changeHandler={this.changeHandler}
          />

          <SelectColor
            name="colorVal"
            colors={colors}
            value={this.state.colorVal}
            changeHandler={this.changeHandler}
          />

          <button name="find" className="search_category_btn" type="submit">
            Go
          </button>

        </form>
      </aside>
    );
  }
}

export default SearchBar;
