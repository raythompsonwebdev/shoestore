/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import searchbarData2 from "./searchbarData2";

function Selector(props) {
  const { handleChange, changesOrders } = props;

  // const [setvalue, setValue] = useState({});

  function onItemChange(evt) {
    handleChange(evt.target.value);
    changesOrders(evt.target.value, "asc");
  }

  return (
    <form className="search_products">
      {/* <label>{labelname}</label> */}

      <select name="value" onChange={onItemChange}>
        {searchbarData2.map((options, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <optgroup label={options.value} key={i}>
            {options.options.map((option, p) => (
              // eslint-disable-next-line react/no-array-index-key
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

Selector.propTypes = {
  changesOrders: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Selector;
