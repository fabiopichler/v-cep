import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import Nav from './nav/Nav';

const url = process.env.PUBLIC_URL;

const Navbar: React.FC = () => {

    useEffect(() => {
        M.AutoInit();
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }, []);
    
    return (
        <>
            <nav className="nav-wrapper teal">
                <div className="container">
                    <Link to={`${url}/`} className="brand-logo">V-CEP</Link>

                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <Nav id="nav-mobile" className="right hide-on-med-and-down" />
                </div>
            </nav>

            <Nav id="mobile-demo" className="sidenav" />
        </>
    )
}

export default Navbar;
