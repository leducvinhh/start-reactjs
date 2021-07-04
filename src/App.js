import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import AlbumFeature from './features/Song';
import TodoFeature from './features/Todo';

const App = () => {
    return (
        <div className="App">
            Home Page
            <Switch>
                <Route path="/todos" component={TodoFeature} />
                <Route path="/albums" component={AlbumFeature} />
            </Switch>
        </div>
    );
};

export default App;
