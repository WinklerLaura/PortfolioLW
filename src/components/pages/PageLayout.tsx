import styles from "./PageLayout.module.css";
import helloGraphic from "../../assets/helloGraphic.svg";
import linesGraphic from "../../assets/linesGraphic.svg";
import curvedGraphic from "../../assets/curvedGraphic.svg";

interface PageLayoutProps {
    image: string;
}

export const PageLayout = ({ image }: PageLayoutProps) => {
    const currentImage = image === "helloGraphic" ? helloGraphic : helloGraphic;
    return (
        <div className={styles.container}>
            <div className={styles.headerGraphics}>
                <img src={currentImage} alt="headerGraphics" />
            </div>
            <div className={styles.leftGraphics}>
                <img
                    src={linesGraphic}
                    alt="leftGraphics"
                    style={{ maxHeight: "800px", height: "40vh" }}
                />
            </div>
            <div className={styles.content}>
                <h1>Content</h1>
            </div>

            <div className={styles.rightGraphics}>
                <img
                    src={curvedGraphic}
                    alt="rightGraphics"
                    style={{ maxHeight: "800px", height: "50vh" }}
                />
            </div>
        </div>
    );
};
