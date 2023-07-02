import React, { useState } from 'react'
import Link from 'next/link'
import {
  SelectGender,
  SelectColor,
  SelectStyle,
  SelectSize,
} from './SearchBarData'

interface SearchBaror {
  labelname: string
  searchData: Array<any>
}

export default function SearchBar(props: SearchBaror) {
  const { labelname, searchData } = props

  // const router = useRouter();

  const [genderVal, setGenderVal] = useState<string>(' ')
  const [sizeVal, setSizeVal] = useState<string>(' ')
  const [styleVal, setStyleVal] = useState<string>(' ')
  const [colorVal, setColorVal] = useState<string>(' ')

  const genderHandler = (event: { target: any }) => {
    const { target } = event
    const { value } = target
    setGenderVal(value)
  }

  const styleHandler = (event: { target: any }) => {
    const { target } = event
    const { value } = target
    setStyleVal(value)
  }

  const sizeHandler = (event: { target: any }) => {
    const { target } = event
    const { value } = target
    setSizeVal(value)
  }

  const colorHandler = (event: { target: any }) => {
    const { target } = event
    const { value } = target
    setColorVal(value)
  }

  const resultArray = [genderVal, styleVal, sizeVal, colorVal]

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  const [gender, style, size, color] = searchData

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
          {/* <legend id="search-category-label">{labelname}</legend> */}
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
            arialabelledby={aria}
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
            <button name="find">Go</button>

            {/* <button onClick={() => router.push('/about')}>
      Click here to read more
    </button> */}
          </Link>
        </fieldset>
      </form>
    </aside>
  )
}
