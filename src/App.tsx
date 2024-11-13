import styles from "./App.module.css";
import TopNavBar from "./components/navbars/TopNavbar";
import navImage from "./assets/imgDev.svg";
import { Routes } from "./Routes";
import { LeftNavBarMenu } from "./components/navbars/LeftNavBarMenu";
import { LeftNavBarIcons } from "./components/navbars/LeftNavBarIcons";

const App = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.topNavContainer}>
                    <TopNavBar />
                </div>
                <div className={styles.leftNavContainer}>
                    <div className={styles.leftNavImageWrapper}>
                        <img src={navImage} alt="navImage" />
                    </div>
                    <LeftNavBarMenu />
                    <div className={styles.iconsContainer}>
                        <LeftNavBarIcons />
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <Routes />
                </div>
            </div>
        </div>
    );
};

export default App;
