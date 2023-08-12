// import { Key } from 'react'
import React, { Key } from 'react'
import { SelectBarType } from '../../types/index'

interface SearchSelector {
  selectBarData: SelectBarType[]
  changesOrders: (orderbyval: string, dir: string) => void
  handleChange: (selected: string) => void
  orderByVal: string
  orderDir: string
}

const SearchSelect = (props: SearchSelector) => {
  const { selectBarData, changesOrders, handleChange, orderDir } = props

  const onItemChange = (e: { target: { value: string } }) => {
    const { value } = e.target
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
        {selectBarData.map((options) => (
          <optgroup label={options.value} key={options.id}>
            {options.options.map(
              (option: {
                id: Key | number
                value: string | undefined
                displayValue: string | undefined
              }) => (
                <option key={option.id} value={option.value}>
                  {option.displayValue}
                </option>
              )
            )}
          </optgroup>
        ))}
      </select>
    </form>
  )
}

export default SearchSelect
