import React from 'react';

export const THEMES = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    {
        toggleTheme: () => {},
        theme: THEMES.dark // default value
    }
);