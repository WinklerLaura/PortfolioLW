import { useNavigate } from "react-router-dom";
import LeftNavMenuButton from "../customizedMuiComponents/LeftNavMenuButton";
import styles from "./LeftNavBarMenu.module.css";

interface MenuItem {
    label: string;
    path: string;
}

export const LeftNavBarMenu = () => {
    const navigate = useNavigate();
    const menuItems: MenuItem[] = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "About",
            path: "/about",
        },
        {
            label: "Projects",
            path: "/projects",
        },
        {
            label: "Contact",
            path: "/contact",
        },
    ];

    const handleClick = (item: MenuItem) => {
        console.log(`Clicked: ${item.label}, path: ${item.path}`);
        navigate(item.path);
    };

    return (
        <div className={styles.leftNavMenu}>
            {menuItems.map((item) => (
                <LeftNavMenuButton
                    key={item.path}
                    onClick={() => handleClick(item)}
                >
                    {item.label}
                </LeftNavMenuButton>
            ))}
        </div>
    );
};
