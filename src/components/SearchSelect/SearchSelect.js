/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import searchbarData2 from "./searchbarData2";

function Selector(props) {
  const [setvalue, setValue] = useState({});

  // eslint-disable-next-line no-console
  console.log(props);

  // eslint-disable-next-line func-style
  const changeHandler = (event) => {
    const { target } = event;
    const { value, name } = target;
    setValue({ [name]: value });
    // props.changesOrders(value, "asc");
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
  // eslint-disable-next-line react/forbid-prop-types
  // eslint-disable-next-line react/no-unused-prop-types
  props: PropTypes.object.isRequired,
};

export default Selector;
