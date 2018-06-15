import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { HeaderComponent } from './header';
import {CodeCardGridComponent} from "./components/code_card_grid";
require('./app.scss');

const App = () => (
    <div>
        <HeaderComponent />
        <Main />
    </div>
)



ReactDOM.render(
    <div>
  {/*<CodeCardGridComponent/>*/}
        ReactDOM.render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
        ), document.getElementById('root'))
    </div>,
    document.getElementById('app')
);