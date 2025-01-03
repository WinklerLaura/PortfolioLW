import { Typography } from "@mui/material";
import { PageLayout } from "../PageLayout";
import { myColors } from "../../../utils/myColors";
import { myFontSizes } from "../../../utils/myFontSizes";
import { getContentAboutPage } from "../../../textContent/getContentAboutPage";
import headerAbout from "../../../assets/headerGraphics/headerAbout.svg";
import styles from "../Pages.module.css";

export const AboutPage = () => {
    return (
        <div style={{ height: "100%" }}>
            <PageLayout image={headerAbout} backgroundBox={true}>
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
                        {getContentAboutPage.title}
                    </Typography>
                    {getContentAboutPage.textSections.map((section) => (
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
        </div>
    );
};
