import { Key } from "react";

export default function SearchSelect(props: {
  selectBarData: Array<any>;
  changesOrders: any;
  handleChange: any;
  orderByVal: string;
  orderDir: string;
}) {
  const { selectBarData, changesOrders, handleChange, orderByVal, orderDir } =
    props;

  function onItemChange(evt: { target: { value: string } }) {
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
        {selectBarData.map(
          (options: {
            value: string | undefined;
            id: Key | null | undefined;
            options: any[];
          }) => (
            // eslint-disable-next-line react/no-array-index-key
            <optgroup label={options.value} key={options.id}>
              {options.options.map((option) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={option.id} value={option.value}>
                  {option.displayValue}
                </option>
              ))}
            </optgroup>
          )
        )}
      </select>
    </form>
  );
}
