import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import List from './pages/List';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={List} />
    </Route>
    );
