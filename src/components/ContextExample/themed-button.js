import {ThemeContext} from './theme-context';
import React from 'react';
import Button from '@material-ui/core/Button';

class ThemedButton extends React.Component {
    render() {
        const props = this.props;
        return (
            <ThemeContext.Consumer>
                {
                    ({theme, toggleTheme}) => (
                        <Button
                            {...props}
                            onClick={toggleTheme}
                            style={{
                                margin: '5px',
                                backgroundColor: theme.background,
                                color: theme.foreground
                            }}
                        />
                    )
                }
            </ThemeContext.Consumer>
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;