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

export const overflowYStyle = {
    overflowY: "auto",
    mx: "auto",
    "&::-webkit-scrollbar": {
        width: "5px",
        backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "50px",
    },
    "&::-webkit-scrollbar-track": {
        margin: "100px 0",
    },
};

export const parentCardStyle = {
    width: "100%",
    maxWidth: {
        xs: "95%",
        sm: "85%",
        md: "75%",
    },
    height: "auto",
    maxHeight: "60vh",
    backgroundColor: "rgb(221, 213, 201, 0.04)",
    p: 3,
    borderRadius: "25px",
    boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    ...overflowYStyle,
};

export const cardMediaStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "25px",
    objectFit: "cover",
    boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "scale(1.02)",
    },
    cursor: "pointer",
};
