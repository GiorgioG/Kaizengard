import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HeaderComponent } from './header';
import {CodeCardGridComponent} from "./components/code_card_grid";
require('./app.scss');


ReactDOM.render(
    <div><HeaderComponent/>
  <CodeCardGridComponent/>
    </div>,
    document.getElementById('app')
);