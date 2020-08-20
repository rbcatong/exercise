import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import RoutinesContainer from './containers/RoutinesContainer'
import ExercisesContainer from './containers/ExercisesContainer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import {Route} from 'react-router-dom'
import AboutMe from './components/AboutMe'



class App extends React.Component{



  render(){
    return (

      <div className="App">
      <header className="App-header">
        <p>
        </p>
        <Header/>
        <Navbar/>
        <RoutinesContainer/>
        <ExercisesContainer/>
        <Route path='/aboutme' component={AboutMe}/>
      </header>



    </div>


  );
  }
}

export default App;
