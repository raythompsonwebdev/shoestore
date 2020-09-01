import React from "react";
import searchbarData from "./searchbarData";
import SelectGender from "./SelectGender";
import SelectSize from "./SelectSize";
import SelectStyle from "./SelectStyle";
import SelectColor from "./SelectColor";

let { genders, sizes, colors, styles } = searchbarData;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

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

    console.log(`Target: ${target}, Value: ${value}, Name: ${name}`);

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

    // this.props.changesOrders(tempVal.genderVal, "asc");

    console.log(tempVal);
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
            onChange={this.changeHandler}
          />

          <SelectSize
            name="sizeVal"
            sizes={sizes}
            value={this.state.sizeVal}
            onChange={this.changeHandler}
          />
            
          <SelectColor
            name="colorVal"
            colors={colors}
            value={this.state.colorVal}
            onChange={this.changeHandler}
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
