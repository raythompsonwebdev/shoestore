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


export function SelectColor(props: {
  aria: string
  colorHandler: any
  colors: OptionsProp
  name: string
  value: string
}) {
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

export function SelectGender(props: {
  aria: string
  genderHandler: any
  genders: OptionsProp
  name: string
  value: string
}) {
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

export function SelectSize(props: {
  aria: string
  name: string
  sizeHandler: any
  sizes: OptionsProp
  value: string
}) {
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

export function SelectStyle(props: {
  aria: string
  name: string
  styleHandler: any
  styles: OptionsProp
  value: string
}) {
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
