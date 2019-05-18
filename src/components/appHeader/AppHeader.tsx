import React from 'react';

import './appHeader.scss';

import Navbar from './navbar/Navbar';

const AppHeader: React.FC = () => {

    return (
        <header className="app-header teal lighten-2">
            <Navbar />

            <div className="desc-container container">
                <div>
                    <h3 className="title">V-CEP</h3>
                    Consultas por CEPs do Brasil é com o V-CEP
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
