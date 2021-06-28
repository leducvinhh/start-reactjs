import React from 'react';
import './App.scss';
import AlbumFeature from './features/Song';
import TodoFeature from './features/Todo';

const App = () => {
    return (
        <div className="App">
            <TodoFeature />
            <AlbumFeature />
        </div>
    );
};

export default App;
