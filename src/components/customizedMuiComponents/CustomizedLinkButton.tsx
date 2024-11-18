import { Button, Typography } from "@mui/material";
import { iconButtonStyle } from "../../muiTheme";
import { myColors } from "../../utils/myColors";

interface CustomizedLinkButtonProps {
    linkURL: string;
    btnText: string;
}

export const CustomizedLinkButton = ({
    linkURL,
    btnText,
}: CustomizedLinkButtonProps) => {
    return (
        <Button
            variant="contained"
            onClick={() => {
                window.open(linkURL, "_blank", "noopener,noreferrer");
            }}
            style={{
                ...iconButtonStyle,
                backgroundColor: myColors.lightGreen,
                margin: "1rem",
            }}
        >
            <Typography
                variant={"body1"}
                sx={{
                    textTransform: "none",
                    color: myColors.darkGreen,
                }}
            >
                {btnText}
            </Typography>
        </Button>
    );
};
