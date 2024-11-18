import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { myColors } from "../../utils/myColors";

interface CustomizedTypographyProps extends PropsWithChildren {
    title?: boolean;
    subtitle?: boolean;
    tools?: boolean;
}

const titleStyle = {
    color: myColors.beige,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.2rem",
};

const toolsStyle = {
    textAlign: "center",
};

export const CustomizedTypography = ({
    title,
    subtitle,
    tools,
    children,
}: CustomizedTypographyProps) => {
    return (
        <Typography
            sx={{
                marginBottom: title ? "none" : "1rem",
                fontSize: "1rem",
                textAlign:
                    title || subtitle
                        ? { ...titleStyle }
                        : tools
                          ? { ...toolsStyle }
                          : "justify",
            }}
        >
            {children}
        </Typography>
    );
};
