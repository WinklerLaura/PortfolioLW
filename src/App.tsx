import styles from "./App.module.css";
import NavBar from "./components/navbars/Navbar";
import navImage from "./assets/ImgDev.svg";
import { Routes } from "./Routes";
import { LeftNavBarMenu } from "./components/navbars/LeftNavBarMenu";

const App = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.topNavContainer}>
                    <NavBar />
                </div>
                <div className={styles.leftNavContainer}>
                    <div className={styles.leftNavImageWrapper}>
                        <img src={navImage} alt="navImage" />
                    </div>
                    <LeftNavBarMenu />
                </div>
                <div className={styles.rightContainer}>
                    <Routes />
                </div>
            </div>
        </div>
    );
};

export default App;
