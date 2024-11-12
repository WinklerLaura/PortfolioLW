import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        htmlFontSize: 12,
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});