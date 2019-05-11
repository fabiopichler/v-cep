import React from 'react';

import './appHeader.scss';

import Navbar from './navbar/Navbar';

const AppHeader: React.FC = () => {

    return (
        <header className="app-header teal lighten-2">
            <Navbar />

            <div className="desc-container container">
                <div>
                    Consultas por CEPs do Brasil é com o V-CEP
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
