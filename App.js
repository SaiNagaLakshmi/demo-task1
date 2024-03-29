import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './component/home';
import Postlist from './component/postlist';
import Practice from './component/practice';
import All from './component/all';
import Sidemenu from './component/sidemenu';
class App extends Component {
  render(){
    return (
      <div className="App">
       <Switch>
       <Route exact path='/home' component={Home} />
       <Route exact path='/postlist' component={Postlist} />
       <Route exact path='/practice' component={Practice} />
       <Route exact path='/all' component={All} />
       <Route exact path='/sidemenu' component={Sidemenu} />
       </Switch>
     
      </div>
    );

  }
  
}

export default App;
