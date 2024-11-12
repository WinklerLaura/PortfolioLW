import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./muiTheme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Router>
    </StrictMode>
);
