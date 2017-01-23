import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/videoList'

// get one from developer console
const API_KEY = 'AIzaSyAD9BVK_K9AvnLwpTdXbHpKLYA6oU8pdh8'

// YTSearch({key: API_KEY, term: 'yourSearch'}, data => console.log(data))

// Create new component
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {videos: []}
    YTSearch({key: API_KEY, term: 'Headspring'}, videos => this.setState({videos}))
  }

  render () {
    return (
      <div className="row">
        <div className="card">
          <div className="card-header">
            <SearchBar />
          </div>
          <div className="card-block">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    )
  }
}

// Render component to DOM
ReactDOM.render(<App />, document.getElementById('app'))
