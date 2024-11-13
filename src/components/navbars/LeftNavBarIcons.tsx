import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Button } from "@mui/material";
import styles from "./LeftNavBarIcons.module.css";
import { myColors } from "../../utils/myColors";

export const LeftNavBarIcons = () => {
    const buttonStyle = {
        minWidth: 0,
        padding: 5,
        fontSize: "4vh",
        color: myColors.lightGreen,
    };

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
                style={{ ...buttonStyle }}
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
                style={{ ...buttonStyle }}
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
                style={{ ...buttonStyle }}
            >
                <FaSquareGithub />
            </Button>
        </div>
    );
};
