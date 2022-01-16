import React from 'react';
import searchbarData2 from './searchbarData2';

class Selector extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ' ',
    };
  }

  changeHandler = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      value,
    });

    this.props.changesOrders(value, 'asc');
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
              {options.options.map((option, p) => (
                <option key={p} value={option.value}>
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
