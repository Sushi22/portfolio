import React,{Component} from 'react';
import './App.css';
import FrontPage from './components/FrontPage.js'
import Content from './components/Content.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { env } from './config';



library.add(fab,fas);

class App extends Component {
  render(){

    return(
      <div className="App" id="app">
      
        <FrontPage env={env}/>
        <Content/>
      </div>
  
    );

  }
}


export default App;
