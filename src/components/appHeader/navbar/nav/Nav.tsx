import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavProps } from './INavProps';

const url = process.env.PUBLIC_URL;

const Nav: React.FC<INavProps> = ({ id, className }) => {

    return (
        <ul id={id} className={className}>
            <li className="sidenav-close"><NavLink to={`${url}/`}>Início</NavLink></li>
            <li className="sidenav-close"><NavLink to={`${url}/sobre`}>Sobre</NavLink></li>
        </ul>
    );
};

export default Nav;
