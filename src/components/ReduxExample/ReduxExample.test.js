import React from 'react';
import ReactDOM from 'react-dom';
import ReduxExample from './ReduxExample';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReduxExample />, div);
});