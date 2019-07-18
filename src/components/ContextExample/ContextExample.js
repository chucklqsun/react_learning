import React from 'react';
import {ThemeContext, THEMES} from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
class Toolbar extends React.Component{
    render (){
        return (
            <ThemedButton>
                Change Theme
            </ThemedButton>
        );
    }
}

class ContextExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === THEMES.dark
                        ? THEMES.light
                        : THEMES.dark,
            }));
        };
        this.state = {
            theme: THEMES.dark,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar />
                </ThemeContext.Provider>
                <div>
                    <ThemedButton>
                        only use default Theme
                    </ThemedButton>
                </div>
            </div>
        );
    }
}
export default ContextExample;
