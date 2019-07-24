import React from 'react';
import ReactDOM from 'react-dom';
import ContextExample from './ContextExample';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContextExample />, div);
});