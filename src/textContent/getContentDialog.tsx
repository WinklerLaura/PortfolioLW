import { Button, List, Stack, Typography } from "@mui/material";
import { FaSquareGithub } from "react-icons/fa6";
import { iconButtonStyle } from "../muiTheme";
import { myColors } from "../utils/myColors";
import { CustomizedListItem } from "../components/customizedMuiComponents/CustomizedListItem";

export const titleStyle = {
    color: myColors.beige,
    fontWeight: "bold",
};

export const getContentDialog = (
    projectId: number | null,
    section: "title" | "text" | null
) => {
    if (projectId === null || section === null) {
        return;
    }
    if (projectId === 0) {
        if (section === "title") {
            return (
                <Typography
                    variant={"body1"}
                    sx={{
                        ...titleStyle,
                    }}
                >
                    Portfolio Laura Winkler (November 2024)
                </Typography>
            );
        }
        if (section === "text") {
            return (
                <Stack>
                    <Typography variant={"body1"} sx={{ marginTop: "1rem" }}>
                        This portfolio showcases my journey in software
                        development and highlights the projects that showcase my
                        skills and creativity.
                    </Typography>
                    <Typography variant={"body1"} sx={{ marginTop: "1rem" }}>
                        React | TypeScript | Material-UI | Git | GitHub | Canva
                        | Responsive Web Design
                    </Typography>
                    <Typography variant={"h6"}>
                        <Button
                            onClick={() => {
                                window.open(
                                    "https://github.com/WinklerLaura/PortfolioLW",
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}
                            style={{ ...iconButtonStyle, marginTop: "1rem" }}
                        >
                            <FaSquareGithub />
                        </Button>
                    </Typography>
                </Stack>
            );
        }
    }
    if (projectId === 1) {
        if (section === "title") {
            return (
                <Stack>
                    <Typography
                        variant={"body1"}
                        sx={{
                            ...titleStyle,
                        }}
                    >
                        AI Against Human Trafficking
                    </Typography>
                    <Typography
                        variant={"body1"}
                        sx={{
                            ...titleStyle,
                        }}
                    >
                        - TEDAI Hackathon Project (October 2024)
                    </Typography>
                </Stack>
            );
        }
        if (section === "text") {
            return (
                <Stack>
                    <Typography variant={"body1"} sx={{ marginTop: "1rem" }}>
                        As the technical lead/builder in a cross-functional team
                        of three (alongside a designer and an advocate), we
                        engineered an automated media monitoring system to
                        combat human trafficking in collaboration with an NGO.
                        The project addressed a critical gap in tracking human
                        trafficking incidents, which currently affects an
                        estimated 50 million people globally, directly
                        contributing to UN Sustainable Development
                    </Typography>
                    <Typography variant={"body1"}>
                        <List>
                            <CustomizedListItem>
                                - Implemented Gmail API integration to
                                programmatically access and process Google Alert
                                notifications, establishing an automated data
                                collection pipeline
                            </CustomizedListItem>
                            <CustomizedListItem>
                                - Developed a Python script to extract and parse
                                trafficking-related news articles from Gmail
                                alerts, eliminating manual monitoring
                            </CustomizedListItem>
                            <CustomizedListItem>
                                - Engineered data extraction pipelines to
                                consolidate information Google Alerts
                            </CustomizedListItem>
                            <CustomizedListItem>
                                - Integrated OpenAI's API to perform automated
                                analysis of news articles, enabling rapid
                                identification and categorization of trafficking
                                incidents
                            </CustomizedListItem>
                        </List>
                    </Typography>
                    <Typography variant={"body1"} sx={{ marginTop: "1rem" }}>
                        Python | Docker | Gmail API | OpenAI API | LLM
                        Integration
                    </Typography>
                </Stack>
            );
        }
    }
};
