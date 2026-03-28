import { createTheme } from "@mui/material/styles";

// Default (light mode) theme 
declare module '@mui/material/styles' {
    interface Theme {
        background: string;
        backgroundTwo: string;
        text: string;
        textContrastPrimary: string;
        textContrastSecondary: string;
        primary: string;
        primaryLight: string;
        primaryDark: string;
        secondary: string;
        secondaryLight: string;
        secondaryDark: string;
        error: string;
        warning: string;
        info: string;
        success: string;
        divider: string;
    }

    interface ThemeOptions {
        background?: string;
        backgroundTwo?: string;
        text?: string;
        textContrastPrimary?: string;
        textContrastSecondary?: string;
        primary?: string;
        primaryLight?: string;
        primaryDark?: string;
        secondary?: string;
        secondaryLight?: string;
        secondaryDark?: string;
        error?: string;
        warning?: string;
        info?: string;
        success?: string;
        divider?: string;
    }
}

export const theme = createTheme({
    background: '#fafafa',
    backgroundTwo: '#fff',
    primary: '#15DCCF',
    primaryDark: '#0E9A90',
    primaryLight: '#43E3D8',
    secondary: '#1522dc',
    secondaryDark: '#0E179A',
    secondaryLight: '#434EE3',
});