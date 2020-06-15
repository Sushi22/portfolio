import React,{Component} from 'react';
import './App.css';
import FrontPage from './components/FrontPage.js'
import Content from './components/Content.js'
import Contact from './components/Contact';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab,fas);

class App extends Component {
  render(){

    return(
      <div className="App">
        <FrontPage/>
        <Content/>
        <Contact env={this.props.env} />
      </div>
  
    );

  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
