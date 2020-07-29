import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home";
//import About from './components/pages/about';
//import Contact from './components/pages/contact';
import Navbar from './components/layout/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/users/adduser';
import EditUser from './components/users/EditUser';
import User from './components/users/users';
import Form from './form/Form';


function App(props) {
  return (
    

     <Router>
    <div className="App">
    <Navbar />

    <switch>
      <Route exact path="/" component={Home}/>
{/*       <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/> */}
      <Route  path="/users/adduser" component={AddUser} />
      <Route  path="/users/edit/:id" component={EditUser} />
      <Route  path="/users/:id" component={User} />

    </switch>
      
    </div>
    </Router> 
  );
}

export default App;
