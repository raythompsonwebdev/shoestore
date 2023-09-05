import React, { useState } from 'react'
import {
  SelectStyle,
  SelectColor,
  SelectGender,
  SelectSize,
} from './SearchBarData'
import { SearchBarType } from '../../types/index'
import { useRouter } from 'next/navigation'

type SearchBarProps = {
  labelname: string
  searchData: SearchBarType[]
}

const SearchBar = (props: SearchBarProps) => {
  const [sizeVal, setSizeVal] = useState<string>('')
  const [colorVal, setColorVal] = useState<string>('')
  const [genderVal, setGenderVal] = useState<string>('')
  const [styleVal, setStyleVal] = useState<string>('')

  const { labelname, searchData } = props

  const [size, color, gender, style] = searchData

  const genderHandler = (event: { target: { value: string } }): void => {
    const { target } = event
    const { value } = target
    setGenderVal(value)
  }

  const styleHandler = (event: { target: { value: string } }): void => {
    const { target } = event
    const { value } = target
    setStyleVal(value)
  }

  const sizeHandler = (event: { target: { value: string } }): void => {
    const { target } = event
    const { value } = target
    setSizeVal(value)
  }

  const colorHandler = (event: { target: { value: string } }) => {
    const { target } = event
    const { value } = target
    setColorVal(value)
  }

  const router = useRouter()

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    //get form
    const SearchFormData = document.querySelector(
      '#search-category-form'
    ) as HTMLFormElement
    //get form data
    const formData: FormData = new FormData(SearchFormData)

    //get url query params
    const size: FormDataEntryValue | null = formData.get('sizeVal')
    const color: FormDataEntryValue | null = formData.get('colorVal')
    const gender: FormDataEntryValue | null = formData.get('genderVal')
    const style: FormDataEntryValue | null = formData.get('styleVal')

    // send data to search results page as url query params -query string
    router.push(
      `/search?genderVal=${gender}&styleVal=${style}&sizeVal=${size}&colorVal=${color}`
    )
    return false
  }

  const aria = 'search-category-label'

  return (
    <aside id="search-category">
      <form id="search-category-form" onSubmit={submit}>
        <fieldset>
          <legend
            className={`search-category-label ${
              labelname === 'New Products' || labelname === 'All Products'
                ? 'search-category-label-new '
                : ''
            }`}
          >
            {labelname}
          </legend>
          <SelectSize
            name="sizeVal"
            sizes={size || ''}
            value={sizeVal}
            sizeHandler={sizeHandler}
            aria={aria}
          />
          <SelectColor
            name="colorVal"
            colors={color || ''}
            value={colorVal}
            colorHandler={colorHandler}
            aria={aria}
          />
          <SelectGender
            name="genderVal"
            genders={gender || ''}
            value={genderVal}
            genderHandler={genderHandler}
            aria={aria}
          />
          <SelectStyle
            name="styleVal"
            styles={style || ''}
            value={styleVal}
            styleHandler={styleHandler}
            aria={aria}
          />
          <input type="submit" className="search-category-btn" value="GO" />
        </fieldset>
      </form>
    </aside>
  )
}

export default SearchBar
