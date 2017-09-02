import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.jsx';
import SideMenu from './components/sideMenu.jsx';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
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
            <SideMenu/>
          </div>
          <div className='three wide column inverted'>
            <SideMenu/>
          </div>
          <div className='four wide column inverted'>
            <SideMenu/>
          </div>
          <div className='eight wide column inverted'>

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));