import React, { useEffect } from 'react';

import './app.scss';

import { useStoreContext } from '../store/StoreContext';

import AppHeader from './appHeader/AppHeader';
import AppRouter from './appRouter/AppRouter';
import AppFooter from './appFooter/AppFooter';

const App: React.FC = () => {

    const { actions: { init } } = useStoreContext();

    useEffect(init, []);

    return (
        <div className="app">
            <AppHeader />

            <AppRouter />

            <AppFooter />
        </div>
    );
}

export default App;
