/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import searchbarData2 from "./searchbarData2";

function Selector(props) {
  const { handleChange, changesOrders } = props;

  const [searchbarData, setSelectData] = useState({});

  useEffect(() => {
    // eslint-disable-next-line func-style
    const fetchData = async () => {
      const result = await fetch(`/api/selectdata`);
      const body = await result.json();

      // eslint-disable-next-line no-console
      console.log(body);
      setSelectData(body);
    };

    fetchData();
  }, []);

  // eslint-disable-next-line no-console
  console.log(searchbarData);

  function onItemChange(evt) {
    handleChange(evt.target.value);
    changesOrders(evt.target.value, "asc");
  }

  return (
    <form className="search_products">
      {/* <label>{labelname}</label> */}

      <select name="value" onChange={onItemChange}>
        {searchbarData.map((options, i) => (
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
