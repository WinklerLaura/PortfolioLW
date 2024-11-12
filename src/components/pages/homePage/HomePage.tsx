import { PageLayout } from "../PageLayout";
import { Typography } from "@mui/material";
import { myColors } from "../../../utils/myColors";
import { contentHomePage } from "../../../textContent/contentHomePage";
import styles from "./HomePage.module.css";
import { myFontSizes } from "../../../utils/myFontSizes";

export const HomePage = () => {
    return (
        <PageLayout image={"helloGraphic"}>
            <div className={styles.contentContainer}>
                <Typography
                    sx={{
                        paddingBottom: "1rem",
                        color: myColors.lightGreen,
                        fontSize: "2rem",
                        textAlign: "center",
                    }}
                >
                    {contentHomePage.title}
                </Typography>
                {contentHomePage.textSections.map((section) => (
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
