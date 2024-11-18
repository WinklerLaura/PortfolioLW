import styles from "./PageLayout.module.css";
import linesGraphic from "../../assets/linesGraphic.svg";
import curvedGraphic from "../../assets/curvedGraphic.svg";
import { PropsWithChildren } from "react";

import { CustomizedProjectsBox } from "../customizedMuiComponents/CustomizedProjectsBox";

interface PageLayoutProps extends PropsWithChildren {
    image: string;
    backgroundBox?: boolean;
}

export const PageLayout = ({
    backgroundBox,
    image,
    children,
}: PageLayoutProps) => {
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
                <CustomizedProjectsBox backgroundBox={backgroundBox}>
                    {children}
                </CustomizedProjectsBox>
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
