import styles from "./PageLayout.module.css";
import linesGraphic from "../../assets/linesGraphic.svg";
import curvedGraphic from "../../assets/curvedGraphic.svg";
import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface PageLayoutProps extends PropsWithChildren {
    image: string;
    backgroundBox?: boolean;
}

export const PageLayout = ({
    backgroundBox,
    image,
    children,
}: PageLayoutProps) => {
    const boxStyle = backgroundBox
        ? {
              width: "40vw",
              bgcolor: "rgb(221, 213, 201, 0.04)",
              padding: "1.2rem",
              borderRadius: "25px",
              boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
          }
        : null;

    const currentImage = image;

    return (
        <div className={styles.container}>
            <div className={styles.headerGraphics}>
                <img
                    src={currentImage}
                    alt="headerGraphics"
                    style={{
                        maxHeight: "800px",
                        height: "12vw",
                        minHeight: "100px",
                    }}
                />
            </div>
            <div className={styles.leftGraphics}>
                <img
                    src={linesGraphic}
                    alt="leftGraphics"
                    style={{ maxHeight: "800px", width: "12vw" }}
                />
            </div>
            <div className={styles.content}>
                <Box
                    sx={{
                        ...boxStyle,
                    }}
                >
                    {children}
                </Box>
            </div>

            <div className={styles.rightGraphics}>
                <img
                    src={curvedGraphic}
                    alt="rightGraphics"
                    style={{ maxHeight: "800px", height: "25vw" }}
                />
            </div>
        </div>
    );
};
