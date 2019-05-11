import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavProps } from './INavProps';

const Nav: React.FC<INavProps> = ({ id, className }) => {

    return (
        <ul id={id} className={className}>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
        </ul>
    );
};

export default Nav;
