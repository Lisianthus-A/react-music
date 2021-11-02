import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppContainer from './containers';
import './app.scss';

function App() {

    return (
        <HashRouter>
            <AppContainer />
        </HashRouter>
    );
}

export default App;