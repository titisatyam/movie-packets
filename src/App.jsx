import React,{ Component }  from "react";
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import {Login,Register} from "./components/login/index";
import MovieContainer from './containers/movies/movieContainer';

import DisplayMsg from './components/movies/displayMessage';
import MovieDetail from './containers/movies/movieDetails';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
        <Switch>

          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/movies" component={MovieContainer} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="*" component={DisplayMsg} />
        </Switch>
        {/* <Register/> */}
      </div>
    )
  }
}

export default App;
