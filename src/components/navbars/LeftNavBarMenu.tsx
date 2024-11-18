import { useNavigate } from "react-router-dom";
import { myFontSizes } from "../../utils/myFontSizes";
import { CustomizedLeftNavBarMenuButton } from "../customizedMuiComponents/CustomizedLeftNavMenuButton";
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
            label: "Skills",
            path: "/skills",
        },
    ];

    const handleClick = (item: MenuItem) => {
        navigate(item.path);
    };

    return (
        <div className={styles.leftNavMenu}>
            {menuItems.map((item) => (
                <CustomizedLeftNavBarMenuButton
                    key={item.path}
                    onClick={() => handleClick(item)}
                    sx={{
                        fontSize: {
                            sm: myFontSizes.title.xs,
                            md: myFontSizes.title.sm,
                            lg: myFontSizes.title.md,
                            xl: myFontSizes.title.lg,
                        },
                    }}
                >
                    {item.label}
                </CustomizedLeftNavBarMenuButton>
            ))}
        </div>
    );
};
