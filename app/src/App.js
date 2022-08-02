import React, { Component } from 'react';

import Counter from './containers/Counter/Counter'
import Results from './containers/Results/Results';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
                <hr />
                <Results />
            </div>
        );
    }
}

export default App;
