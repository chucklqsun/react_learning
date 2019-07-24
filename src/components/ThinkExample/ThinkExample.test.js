import React from 'react';
import ReactDOM from 'react-dom';
import {render, wait, fireEvent} from '@testing-library/react'
import ThinkExample from './ThinkExample';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThinkExample />, div);
});

test('check toggle filter', async() => {
    const {queryByText, getByText, getByTestId} = render(
        <ThinkExample />
    );
    const itemOutOfStock = "Basketball";
    //The await operator is used to wait for a Promise
    await wait(() => {
        //should show all items
        expect(getByText(itemOutOfStock)).toBeInTheDocument();
        //click the checkbox to show only items in stock
        fireEvent.click(getByTestId("in-stock-only-checkbox"));
        expect(queryByText(itemOutOfStock)).toBeNull()
    });
});
