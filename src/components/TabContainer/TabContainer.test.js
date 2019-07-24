import React from 'react';
import ReactDOM from 'react-dom';
import TabContainer from './TabContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TabContainer>
            <div>Hello Earth!</div>
        </TabContainer>
        , div);
});