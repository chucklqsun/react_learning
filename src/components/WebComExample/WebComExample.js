import React from 'react';
import {PopUpInfo} from '../../WebComponents/PopupInfo'
import './WebComExample.css';
import Box from "@material-ui/core/Box";

class WebComExample extends React.Component {
    render() {
        return (
            <Box p={2}>
                <popup-info data-text="Your card validation code is on the back of your card."></popup-info>
            </Box>
        );
    }
}
export default WebComExample;
