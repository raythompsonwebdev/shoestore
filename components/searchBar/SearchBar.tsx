import React, { useState } from 'react'
import Link from 'next/link'
import {
  SelectGender,
  SelectColor,
  SelectStyle,
  SelectSize,
} from './SearchBarData'
import {SearchBarType} from '../../types/index'


type SearchBarProps =  {
  labelname: string
  searchData: SearchBarType[]
}

const SearchBar = (props: SearchBarProps) => {

  const { labelname, searchData } = props

  console.log(searchData)

  const [gender, style, size, color]  = [...searchData]

  const [genderVal, setGenderVal] = useState<string>(' ')
  const [sizeVal, setSizeVal] = useState<string>(' ')
  const [styleVal, setStyleVal] = useState<string>(' ')
  const [colorVal, setColorVal] = useState<string>(' ')

  const genderHandler = (event: { target: {value :string} }) :void => {
    const { target } = event
    const { value } = target
    setGenderVal(value)
  }

  const styleHandler = (event: { target: {value :string} }) :void => {
    const { target } = event
    const { value } = target
    setStyleVal(value)
  }

  const sizeHandler = (event: { target: {value :string} }) :void => {
    const { target } = event
    const { value } = target
    setSizeVal(value)
  }

  const colorHandler = (event: { target: {value :string} }) => {
    const { target } = event
    const { value } = target
    setColorVal(value)
  }

  const resultArray : string[] = [genderVal, styleVal, sizeVal, colorVal]

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }


  const aria = 'search-category-label'

  return (
    <aside id="search-category">
      <form id="search-category-form" onSubmit={submit}>
        <fieldset>
          <legend
            className={`search-category-label ${
              labelname === 'New Products' || labelname === 'All Products' ? 'search-category-label-new ' : ''
            }`}
          >
            {labelname}
          </legend>
          <SelectGender
            name="genderVal"
            genders={gender}
            value={genderVal}
            genderHandler={genderHandler}
            aria={aria}
          />

          <SelectStyle
            name="styleVal"
            styles={style}
            value={styleVal}
            styleHandler={styleHandler}
            aria={aria}
          />

          <SelectSize
            name="sizeVal"
            sizes={size}
            value={sizeVal}
            sizeHandler={sizeHandler}
            aria={aria}
          />
          <SelectColor
            name="colorVal"
            colors={color}
            value={colorVal}
            colorHandler={colorHandler}
            aria={aria}
          />
          <Link
            href={{
              pathname: '/search',
              query: { resultArray },
            }}
            className="search-category-btn"
            type="submit"
          >
            Go
          </Link>
        </fieldset>
      </form>
    </aside>
  )
}

export default SearchBar
