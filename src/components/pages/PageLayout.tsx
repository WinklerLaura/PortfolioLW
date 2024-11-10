import styles from "./PageLayout.module.css";
import helloGraphic from "../../assets/helloGraphic.svg";
import linesGraphic from "../../assets/linesGraphic.svg";
import curvedGraphic from "../../assets/curvedGraphic.svg";
import { PropsWithChildren } from "react";

interface PageLayoutProps extends PropsWithChildren {
    image: string;
}

export const PageLayout = ({ image, children }: PageLayoutProps) => {
    const currentImage = image === "helloGraphic" ? helloGraphic : helloGraphic;
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
            <div className={styles.content}>{children}</div>

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
