import { PropsWithChildren } from "react";
import { PageLayout } from "../PageLayout";
import styles from "./HomePage.module.css";

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

const ContentParagraph = ({ children }: PropsWithChildren) => (
    <p className={styles.paragraph}>{children}</p>
);

export const HomePage = () => {
    return (
        <PageLayout image={"helloGraphic"}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>{homeContent.title}</h1>
                {homeContent.sections.map((section) => (
                    <ContentParagraph key={section.id}>
                        {section.text}
                    </ContentParagraph>
                ))}
            </div>
        </PageLayout>
    );
};
