import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'

import './Search.css'

const Search = (props: any) => {
  const [enteredValue, setEnteredValue] = useState('')

  const handleSearchChange = (e: ChangeEvent) => {
    const text = (e.target as HTMLInputElement).value
    setEnteredValue((prevText) => text)
  }

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    props.onSearch(enteredValue)
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        className="search-input"
        type="search"
        placeholder="Type the name of the country"
        id="search"
        onChange={handleSearchChange}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  )
}

export default Search
