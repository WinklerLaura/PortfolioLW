import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import { myColors } from "../../utils/myColors";

const CustomButton = styled(MuiButton)(() => ({
    color: myColors.beige,
    fontSize: "2.5lvh",
    textTransform: "none",
    borderRadius: "10px",
}));
export default CustomButton;