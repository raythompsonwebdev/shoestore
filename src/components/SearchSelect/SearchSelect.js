import React from "react";
import searchbarData2 from "./searchbarData2";
class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: " ",
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event) => {
    const target = event.target;
    const value = target.value; //value
    //const name = target.name //name

    this.setState({
      value: value,
    });

    this.props.changesOrders(value, "asc");
  };

  render() {
    return (

      <form className="search_products">
        <label>{this.props.labelname}</label>

        <select          
          name="value"
          value={this.state.value}
          onChange={this.changeHandler}          
        >
          {searchbarData2.map((options, i) => (
            <optgroup label={options.value} key={i}>
              {options.options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.displayValue}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        
      </form>
    );
  }
}

export default Selector;
