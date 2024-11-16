import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Button } from "@mui/material";
import { iconButtonStyle } from "../../muiTheme";
import styles from "./LeftNavBarIcons.module.css";

export const LeftNavBarIcons = () => {
    return (
        <div className={styles.iconContainer}>
            <Button
                onClick={() => {
                    window.open(
                        "https://linkedin.com/in/laura-winkler-749381204",
                        "_blank",
                        "noopener,noreferrer"
                    );
                }}
                style={{ ...iconButtonStyle }}
            >
                <FaLinkedin />
            </Button>
            <Button
                onClick={() => {
                    window.open(
                        "https://x.com/Laura_Winkler_?t=kjNLjq5VHlaIpKS44JMoTw&s=08",
                        "_blank",
                        "noopener,noreferrer"
                    );
                }}
                style={{ ...iconButtonStyle }}
            >
                <FaSquareXTwitter />
            </Button>
            <Button
                onClick={() => {
                    window.open(
                        "https://github.com/WinklerLaura",
                        "_blank",
                        "noopener,noreferrer"
                    );
                }}
                style={{ ...iconButtonStyle }}
            >
                <FaSquareGithub />
            </Button>
        </div>
    );
};
