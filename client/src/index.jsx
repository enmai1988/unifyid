import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Nav from './components/nav.jsx';
import SideIconMenu from './components/sideIconMenu.jsx';
import SideTextMenu from './components/sideTextMenu.jsx';
import CredentialList from './components/credentialList.jsx';
import CredentialDetails from './components/credentialDetails.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
      credentials: [],
      selectedCredentialDetail: {}
    };

    this.handleCredentialSelect = this.handleCredentialSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    axios.get('/api/credentials')
      .then(response => {
        let credentials = response.data.own_credentials;
        let selectedCredentialDetail = credentials[0];
        this.setState({ credentials, selectedCredentialDetail });
      })
      .catch(err => console.log('err getting credentials: ', err));
  }

  handleCredentialSelect(e, credential) {
    e.preventDefault();
    this.setState({ selectedCredentialDetail: credential });
  }

  handleSearch(e) {
    let keyword = e.target.value;
    // search credential with keyword
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    return (
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
              <CredentialList 
                credentials={this.state.credentials} 
                handleCredentialSelect={this.handleCredentialSelect} 
              />
            </div>
          </div>
          <div className='eight wide column inverted'>
            <CredentialDetails credential={this.state.selectedCredentialDetail}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));