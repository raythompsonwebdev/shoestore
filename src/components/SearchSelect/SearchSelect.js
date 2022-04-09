/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
// import selectBarData1 from "../../data/selectBarData.json";

function Selector(props) {
  const { handleChange, changesOrders, selectData } = props;

  // eslint-disable-next-line no-console
  // console.log(selectData);

  function onItemChange(evt) {
    handleChange(evt.target.value);
    changesOrders(evt.target.value, "asc");
  }

  return (
    <form className="search_products">
      {/* <label>{labelname}</label> */}

      <select name="value" onChange={onItemChange}>
        {selectData.map((options, i) => (
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

Selector.defaultProps = {
  // orderByVal: " ",
  // orderDir: " ",
  selectData: [],
  handleChange: " ",
  changesOrders: " ",
};

Selector.propTypes = {
  // orderByVal: PropTypes.string,
  // orderDir: PropTypes.string,
  selectData: PropTypes.arrayOf(PropTypes.object),
  changesOrders: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Selector;
