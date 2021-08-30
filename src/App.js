import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Books from './components/BooksList/BooksList'
import Cart from './components/Cart/Cart'
import { Details } from './components/DetailsBook/DetailsBook'
import { Provider } from 'react-redux'
import { SearchBar } from './components/SearchBar/SearchBar'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className='App'>
          <SearchBar />
          <Switch>
            <Route path='/' exact component={Books} />
            <Route path='/cart' component={Cart} />
            <Route path='/bookInfo/:idBook' component={Details}></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
