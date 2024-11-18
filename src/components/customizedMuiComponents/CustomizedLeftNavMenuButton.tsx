import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import { myColors } from "../../utils/myColors";

export const CustomizedLeftNavBarMenuButton = styled(MuiButton)(() => ({
    color: myColors.beige,
    textTransform: "none",
    borderRadius: "10px",
}));
