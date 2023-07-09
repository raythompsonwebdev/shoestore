import { Key } from 'react'

interface SearchSelector {
  selectBarData: []
  changesOrders: (orderbyval: string , dir: string) => void;
  handleChange: (selected: string ) => void;
  orderByVal: string
  orderDir: string
}

export default function SearchSelect(props: SearchSelector) {
  const { selectBarData, changesOrders, handleChange, orderDir } = props

  function onItemChange(e: { target: { value: string } }) {
    const {value} = e.target;
    handleChange(value)
    changesOrders(value, orderDir)
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
            value: string | undefined
            id: Key | null | undefined
            options: []
          }) => (
            // eslint-disable-next-line react/no-array-index-key
            <optgroup label={options.value} key={options.id}>
              {options.options.map((option :{id:Key | number, value:string | undefined, displayValue:string | undefined}) => (
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
  )
}
