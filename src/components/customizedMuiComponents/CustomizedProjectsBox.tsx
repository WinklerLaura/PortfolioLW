import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface CustomizedProjectsCardProps extends PropsWithChildren {
    backgroundBox?: boolean;
}

export const CustomizedProjectsBox = ({
    children,
    backgroundBox,
}: CustomizedProjectsCardProps) => {
    const boxStyle = backgroundBox
        ? {
              width: "40vw",
              bgcolor: "rgb(221, 213, 201, 0.04)",
              padding: "1.2rem",
              borderRadius: "25px",
              boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
          }
        : null;

    return (
        <Box
            sx={{
                ...boxStyle,
            }}
        >
            {children}
        </Box>
    );
};
