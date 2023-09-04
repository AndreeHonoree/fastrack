//import logo from './logo.svg';
import './App.css';
import React,{ Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

class App extends Component {
  render(){
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />}/>
        </Routes>
      </>
    );
  }
}

export default App;
