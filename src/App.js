import './App.css'

import Books from './components/Books/Books'
import { Provider } from 'react-redux'
import { SearchBar } from './components/SearchBar/SearchBar'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <SearchBar></SearchBar>
        <Books></Books>
      </div>
    </Provider>
  )
}

export default App
