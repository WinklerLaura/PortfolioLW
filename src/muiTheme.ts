import { createTheme, Dialog, styled } from "@mui/material";
import { myColors } from "./utils/myColors";

export const theme = createTheme({
    typography: {
        htmlFontSize: 12,
        fontFamily: "Roboto, sans-serif",
    },

    breakpoints: {
        values: {
            xs: 600,
            sm: 680,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
        background-color: ${myColors.middleGreen};
        color: ${myColors.beige};
        border-radius: 25px;
        margin: 40px;
    }
    .MuiButtonBase-root {
        color: ${myColors.beige};
        font-size: 1.5rem;
    }
`;

export const iconButtonStyle = {
    minWidth: 0,
    padding: 5,
    fontSize: "4vh",
    color: myColors.lightGreen,
};
