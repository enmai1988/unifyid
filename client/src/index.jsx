import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ui grid'>
        React
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));