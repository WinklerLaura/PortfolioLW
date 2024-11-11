import { PageLayout } from "../PageLayout";
import styles from "./HomePage.module.css";
import { Typography } from "@mui/material";
import { myColors } from "../../../utils/myColors";

const homeContent = {
    title: "Welcome to my digital workspace!",
    sections: [
        {
            id: "intro",
            text: "I'm a passionate developer and creative thinker dedicated to crafting elegant solutions to complex problems. Through this portfolio, I invite you to explore my journey in software development and discover the projects that showcase my skills and creativity.",
        },
        {
            id: "description",
            text: "My approach combines technical expertise with innovative thinking to create meaningful digital experiences. Whether you're here to explore potential collaborations or simply curious about my work, I'm glad you've stopped by.",
        },
        {
            id: "callToAction",
            text: "Feel free to navigate through my portfolio to learn more about my background, explore my projects, or get in touch to discuss exciting opportunities.",
        },
    ],
};

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
                    {homeContent.title}
                </Typography>
                {homeContent.sections.map((section) => (
                    <Typography
                        key={section.id}
                        sx={{
                            color: myColors.beige,
                            padding: "0.2rem",
                            fontSize: "1.2rem",
                            textAlign: "justify",
                        }}
                    >
                        {section.text}
                    </Typography>
                ))}
            </div>
        </PageLayout>
    );
};
