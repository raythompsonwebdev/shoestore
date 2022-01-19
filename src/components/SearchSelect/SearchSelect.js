/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import searchbarData2 from "./searchbarData2";

function Selector(props) {
  const { changesOrders } = props;

  const [setvalue, setValue] = useState({});

  // eslint-disable-next-line func-style
  const changeHandler = (event) => {
    const { target } = event;
    const { value } = target;
    setValue({ value });

    // eslint-disable-next-line no-console
    console.log(setvalue);

    changesOrders(setvalue, "asc");
  };

  return (
    <form className="search_products">
      {/* <label>{labelname}</label> */}

      <select name="value" value={setvalue} onChange={changeHandler}>
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
};

export default Selector;
