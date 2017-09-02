import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/nav.jsx';
import SideIconMenu from './components/sideIconMenu.jsx';
import SideTextMenu from './components/sideTextMenu.jsx';
import CredentialList from './components/credentialList.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      credentials: []
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    axios.get('/api/credentials')
      .then(response => {
        this.setState({ credentials: response.data.own_credentials });
      })
      .catch(err => console.log('err getting credentials: ', err));
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    console.log(this.state.credentials);

    return (
      <Router>
        <div className='ui grid' style={{margin: 0}}>
          <Nav toggleSidebar={this.toggleSidebar}/>
          <div className='row'>
            <div className='one wide column inverted'>
              <SideIconMenu/>
            </div>
            <div className='three wide column inverted'>
              <SideTextMenu/>
            </div>
            <div className='four wide column inverted'>
              <div className='row'>
                <Search/>
              </div>
              <div className='row'>
                <CredentialList />
              </div>
            </div>
            <div className='eight wide column inverted'>

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));