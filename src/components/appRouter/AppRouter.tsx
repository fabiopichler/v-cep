import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from '../views/home/HomeView';
import AboutView from '../views/about/AboutView';
import NotFoundView from '../views/notFound/NotFoundView';

const url: string = process.env.PUBLIC_URL;

const AppRouter: React.FC = () => (
    <Switch>
        <Route
            exact
            path={`${url}/`}
            component={HomeView}
        />

        <Route
            exact
            path={`${url}/sobre`}
            component={AboutView}
        />

        <Route
            path="*"
            component={NotFoundView}
        />
    </Switch>
);

export default AppRouter;
