import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { myColors } from "../../utils/myColors";

interface CustomizedTypographyProps extends PropsWithChildren {
    title?: boolean;
    tools?: boolean;
}

const titleStyle = {
    color: myColors.beige,
    fontWeight: "bold",
    textAlign: "center",
};

const toolsStyle = {
    textAlign: "center",
};

export const CustomizedTypography = ({
    title,
    tools,
    children,
}: CustomizedTypographyProps) => {
    return (
        <Typography
            sx={{
                marginBottom: "1rem",
                textAlign: title
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
