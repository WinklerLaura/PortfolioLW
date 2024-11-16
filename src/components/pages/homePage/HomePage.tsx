import { PageLayout } from "../PageLayout";
import { Typography } from "@mui/material";
import { myColors } from "../../../utils/myColors";
import { getContentHomePage } from "../../../textContent/getContentHomePage";
import { myFontSizes } from "../../../utils/myFontSizes";
import headerHello from "../../../assets/headerGraphics/headerHello.svg";
import styles from "../Pages.module.css";

export const HomePage = () => {
    return (
        <PageLayout image={headerHello} backgroundBox={true}>
            <div className={styles.contentContainer}>
                <Typography
                    sx={{
                        paddingBottom: "1rem",
                        color: myColors.lightGreen,
                        textAlign: "center",
                        fontSize: {
                            xs: myFontSizes.title.xs,
                            sm: myFontSizes.title.sm,
                            md: myFontSizes.title.md,
                            lg: myFontSizes.title.lg,
                            xl: myFontSizes.title.xl,
                        },
                    }}
                >
                    {getContentHomePage.title}
                </Typography>
                {getContentHomePage.textSections.map((section) => (
                    <Typography
                        key={section.id}
                        sx={{
                            color: myColors.beige,
                            padding: "0.2rem",
                            textAlign: "justify",
                            fontSize: {
                                xs: myFontSizes.text.xs,
                                sm: myFontSizes.text.sm,
                                md: myFontSizes.text.md,
                                lg: myFontSizes.text.lg,
                                xl: myFontSizes.text.xl,
                            },
                        }}
                    >
                        {section.text}
                    </Typography>
                ))}
            </div>
        </PageLayout>
    );
};
