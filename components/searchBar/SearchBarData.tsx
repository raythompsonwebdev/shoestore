import {
  Key,
  // ReactElement,
  // JSXElementConstructor,
  // ReactFragment,
  // ReactPortal,
} from 'react'

interface OptionsProp {
  _id:string
  id:number
  name:string
  options:[]
}

export const SelectColor = (props: {
  aria: string
  colorHandler: (event: { target: {value :string} }) => void;
  colors: OptionsProp
  name: string
  value: string
}) => {
  const { aria, colorHandler, colors, name, value } = props

  const { options }= colors

  return (
    <select
      name={name}
      value={value}
      onChange={colorHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | readonly string[] | undefined
          id: Key | null | undefined
          displayValue: string | null | undefined
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  )
}

export const SelectGender = (props: {
  aria: string
  genderHandler: (event: { target: {value :string} }) => void;
  genders: OptionsProp
  name: string
  value: string
}) => {
  const { aria, genderHandler, genders, name, value } = props
  const { options } = genders

  return (
    <select
      name={name}
      value={value}
      onChange={genderHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | readonly string[] | undefined
          id: Key | null | undefined
          displayValue: string | null | undefined
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  )
}

export const SelectSize = (props: {
  aria: string
  name: string
  sizeHandler: (event: { target: {value :string} }) => void;
  sizes: OptionsProp
  value: string
}) => {
  const { aria, name, sizeHandler, sizes, value } = props
  const { options } = sizes

  return (
    <select
      name={name}
      value={value}
      onChange={sizeHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | readonly string[] | undefined
          id: Key | null | undefined
          displayValue: string | null | undefined
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  )
}

export const SelectStyle = (props: {
  aria: string
  name: string
  styleHandler: (event: { target: {value :string} }) => void;
  styles: OptionsProp
  value: string
}) => {
  const { aria, name, styleHandler, styles, value } = props
  const { options } = styles

  return (
    <select
      name={name}
      value={value}
      onChange={styleHandler}
      aria-labelledby={aria}
      className="search-category-input"
    >
      {options.map(
        (option: {
          value: string | readonly string[] | undefined
          id: Key | null | undefined
          displayValue: string | null | undefined
        }) => (
          <option value={option.value} key={option.id}>
            {option.displayValue}
          </option>
        )
      )}
    </select>
  )
}
