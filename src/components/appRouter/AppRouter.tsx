import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

const url: string = process.env.PUBLIC_URL;

const AppRouter: React.FC = () => (
    <Switch>
        <Route
            exact
            path={`${url}/`}
            component={HomePage}
        />

        <Route
            exact
            path={`${url}/sobre`}
            component={AboutPage}
        />

        <Route
            path="*"
            component={NotFoundPage}
        />
    </Switch>
);

export default AppRouter;
