import React from 'react';
import './style.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div className='navigation-container'>
                <div className='navigation-links'>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                    <NavLink to={"/todo"}>
                        Todo List
                    </NavLink>
                    <NavLink to={"/about"}>
                        About
                    </NavLink>
                    <NavLink to={"/user"}>
                        List Users
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Nav;