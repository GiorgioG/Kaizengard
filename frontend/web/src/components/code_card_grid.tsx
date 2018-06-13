
require('./code_card_grid.scss');
import { CodeCardComponent } from './code_card';

import * as React from 'react';
export const CodeCardGridComponent = () => {
    return (
        <div className="flex-grid">
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />
                <CodeCardComponent />

        </div>
    );
};