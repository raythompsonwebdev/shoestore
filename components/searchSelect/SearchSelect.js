//import PropTypes from "prop-types";

export default function SearchSelect(props) {
  const { selectBarData, changesOrders, handleChange, orderByVal, orderDir } =
    props;

  function onItemChange(evt) {
    handleChange(evt.target.value);
    changesOrders(evt.target.value, orderDir);
  }

  return (
    <form className="search-products">
      <label>Search Products </label>

      <select
        name="value"
        onChange={onItemChange}
        className="search-products-select"
      >
        {selectBarData.map((options, i) => (
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

// Selector.defaultProps = {
//   // orderByVal: " ",
//   // orderDir: " ",
//   selectData: [],
//   handleChange: " ",
//   changesOrders: " ",
// };

// Selector.propTypes = {
//   // orderByVal: PropTypes.string,
//   // orderDir: PropTypes.string,
//   selectData: PropTypes.arrayOf(PropTypes.object),
//   changesOrders: PropTypes.func,
//   handleChange: PropTypes.func,
// };
