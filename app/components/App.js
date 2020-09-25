import '../styles/application.scss';
import { connectNode } from '../services';
import React, { PureComponent } from 'react';

import Ticker from './Ticker';

// The below line is here as an example of getting prices
connectNode('GOGL');



class App extends PureComponent {
    render() {
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <Ticker />
            </div>
        );
    }
}

export default App;
