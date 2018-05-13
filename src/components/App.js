import React from 'react';
import Header from './Header';
import List from './List';


class App extends React.Component {
  state = {
    recent: [],
    alltime: [],
    sort: 'recent'
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => res.json())
      .then(data => this.setState({recent: data}))

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(res => res.json())
      .then(data => this.setState({alltime: data}))
  }

  handleSort = (sort) => {
    this.setState({ sort })
  }

  render() {
    return (
      <div className='wrapper'>
        <Header
          handleSort={this.handleSort}
          sort={this.state.sort}
        />
        <List {...this.state}/>
      </div>
    )
  }
}

export default App;
