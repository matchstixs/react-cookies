import React, {Component} from 'react';
import CookiesFactory from './CookiesFactory.js';

class App extends Component {
    // RENDER
    render() {
        return(
            <div>
                <h1>Your Boutique</h1>
                <h4>Shop for new trending products</h4>
                < CookiesFactory />
            </div>
        )
    };
};
export default App;