import { Box } from "@mui/material";
import styles from "./App.module.css";
import NavBar from "./components/navbar/Navbar";
import navImage from "./assets/ImgDev.svg";
import LeftNavMenuButton from "./components/customizedMuiComponents/LeftNavMenuButton";

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
                    <div className={styles.leftNavMenu}>
                        <LeftNavMenuButton>Home</LeftNavMenuButton>
                        <LeftNavMenuButton>About</LeftNavMenuButton>
                        <LeftNavMenuButton>Projects</LeftNavMenuButton>
                        <LeftNavMenuButton>Contact</LeftNavMenuButton>
                    </div>
                </div>
                <div className={styles.rightNavContainer}>
                    <div className={styles.box}>
                        <h1>Hello World</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
