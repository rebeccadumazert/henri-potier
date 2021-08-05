import './App.css'

import Books from './components/Books/Books'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {
  return (
    <div className='App'>
      <SearchBar></SearchBar>
      <Books></Books>
    </div>
  )
}

export default App
