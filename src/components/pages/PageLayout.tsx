import styles from "./PageLayout.module.css";
import linesGraphic from "../../assets/linesGraphic.svg";
import curvedGraphic from "../../assets/curvedGraphic.svg";
import { PropsWithChildren } from "react";

import { CustomizedBox } from "../customizedMuiComponents/CustomizedBox";

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
                <CustomizedBox backgroundBox={backgroundBox}>
                    {children}
                </CustomizedBox>
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
