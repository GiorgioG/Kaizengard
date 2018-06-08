import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HeaderComponent } from './header';
require('./app.scss');


ReactDOM.render(
    <HeaderComponent/>,
    document.getElementById('app')
);