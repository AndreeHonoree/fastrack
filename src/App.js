//import logo from './logo.svg';
import './App.css';
import React,{ Component} from 'react';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Home/>
        <About></About>
      </div>
    );
  }
}

export default App;
