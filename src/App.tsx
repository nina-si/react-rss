import { useState } from 'react'

import CardField from './components/Card-field/CardField'
import Search from './components/Search/Search'
import { data } from './data'
import { ICardData } from './types'

import './App.css'

const App = () => {
  const [filteredData, setFilteredData] = useState<Array<ICardData>>([...data])
  let temporary: {
    id: number
    name: string
    capital: string
    language: string
    currency: string
  }[] = []
  const filterData = (text: string) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase().indexOf(text) > -1) {
        temporary.push(data[i])
      }
    }

    temporary.length > 0
      ? setFilteredData([...temporary])
      : setFilteredData([...data])
  }

  return (
    <main className="main">
      <Search onSearch={filterData} />
      <CardField cards={filteredData} />
    </main>
  )
}

export default App
