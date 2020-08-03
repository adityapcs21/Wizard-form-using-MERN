import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Home
            </NavLink>
                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Button>
                        <NavLink className="btn btn-secondary" to ="/users/adduser">{<PersonAddIcon/>}</NavLink>
                        
                        </Button>
                        </li>
                    </ul>
                    
                </div>
                    
            </div>
        </nav>
    );
};


export default Navbar;