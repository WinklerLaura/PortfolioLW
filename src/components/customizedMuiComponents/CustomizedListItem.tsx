import { ListItem } from "@mui/material";
import { PropsWithChildren } from "react";

export const CustomizedListItem = ({ children }: PropsWithChildren) => (
    <ListItem
        sx={{
            typography: "body1",
            marginBottom: "0.5rem",
            textAlign: "justify",
            fontSize: "1rem",
        }}
    >
        {children}
    </ListItem>
);
