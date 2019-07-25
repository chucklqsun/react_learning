import React from 'react';
import ReactDOM from 'react-dom';
import RouterExample from './RouterExample';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <RouterExample />
        , div);
});