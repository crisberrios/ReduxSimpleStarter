import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'

// get one from developer console
const API_KEY = 'AIzaSyAD9BVK_K9AvnLwpTdXbHpKLYA6oU8pdh8'

// Create new component
const App = () => <div>
  <SearchBar />
</div>

// Render component to DOM
ReactDOM.render(<App />, document.getElementById('app'))
