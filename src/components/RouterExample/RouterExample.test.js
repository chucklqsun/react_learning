import React from 'react';
import ReactDOM from 'react-dom';
import RouterExample from './RouterExample';
import {render, fireEvent} from '@testing-library/react'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <RouterExample />
        , div);
});

it( 'render game without crashing', () => {
    const {queryByTestId, getByText} = render(
        <RouterExample />
    );
    fireEvent.click(getByText("tic-tac-toe"));
    expect(queryByTestId("game-tic-tac-toe")).toBeVisible();
});