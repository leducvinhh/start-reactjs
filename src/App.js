import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Song';
import TodoFeature from './features/Todo';

const App = () => {
    return (
        <div className="App">
            Home Page
            <p>
                <NavLink to="/todos">Todo</NavLink>
            </p>
            <p>
                <NavLink to="/albums">Albums</NavLink>
            </p>
            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postID" to="/posts/:postID" />

                <Route path="/todos" component={TodoFeature} />
                <Route path="/albums" component={AlbumFeature} />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default App;
