import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { myColors } from "../../utils/myColors";

function TopNavBar() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: myColors.middleGreen,
                borderRadius: "0px 0px 5px 5px",
            }}
        >
            <Toolbar
                sx={{
                    height: "7vh",
                    maxHeight: "80px",
                }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontWeight: 700,
                        color: myColors.beige,
                        textDecoration: "none",
                    }}
                >
                    Laura Winkler
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default TopNavBar;
