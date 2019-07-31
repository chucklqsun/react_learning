import React from 'react';
import ReactDOM from 'react-dom';
import HookExample from "./HookExample";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HookExample/>, div);
});