import { PageLayout } from "../PageLayout";
import { Typography } from "@mui/material";
import styles from "../Pages.module.css";
import { myColors } from "../../../utils/myColors";
import { myFontSizes } from "../../../utils/myFontSizes";
import headerSkills from "../../../assets/headerGraphics/headerSkills.svg";
import { contentSkillsPage } from "../../../textContent/contentSkillsPage";

export const SkillsPage = () => {
    return (
        <div style={{ height: "100%" }}>
            <PageLayout image={headerSkills}>
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
                        {contentSkillsPage.title}
                    </Typography>
                    {contentSkillsPage.textSections.map((section) => (
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
