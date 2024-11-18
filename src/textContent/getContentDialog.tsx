import { Button, List, Stack, Typography } from "@mui/material";
import { FaSquareGithub } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";
import { iconButtonStyle } from "../muiTheme";
import { CustomizedListItem } from "../components/customizedMuiComponents/CustomizedListItem";
import TedAIHackthonPresentation from "../assets/video/TEDAIHackathonPresentation.pptx.mp4";
import { CustomizedLinkButton } from "../components/customizedMuiComponents/CustomizedLinkButton";
import { CustomizedTypography } from "../components/customizedMuiComponents/CustomizedTypography";

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
                <CustomizedTypography title>
                    Portfolio Laura Winkler (November 2024)
                </CustomizedTypography>
            );
        }
        if (section === "text") {
            return (
                <Stack alignItems="center">
                    <CustomizedTypography>
                        This portfolio showcases my journey in software
                        development and highlights the projects that showcase my
                        skills and creativity.
                    </CustomizedTypography>
                    <CustomizedTypography tools>
                        React | TypeScript | Material-UI | Git | GitHub | Canva
                        | Responsive Web Design
                    </CustomizedTypography>
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
                    <CustomizedTypography title>
                        AI Against Human Trafficking
                    </CustomizedTypography>
                    <CustomizedTypography title>
                        TEDAI Hackathon Project (October 2024)
                    </CustomizedTypography>
                </Stack>
            );
        }
        if (section === "text") {
            return (
                <Stack alignItems="center">
                    <CustomizedTypography>
                        As the technical lead/builder in a cross-functional team
                        of three (alongside a designer and an advocate), we
                        engineered an automated media monitoring system to
                        combat human trafficking in collaboration with an NGO.
                        The project addressed a critical gap in tracking human
                        trafficking incidents, which currently affects an
                        estimated 50 million people globally, directly
                        contributing to UN Sustainable Development
                    </CustomizedTypography>
                    <CustomizedTypography>
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
                    </CustomizedTypography>
                    <CustomizedTypography>
                        The TedAI Hackathon presentation that can be found below
                        was created in collaboration with Julia Macher (CEO,
                        Freedom Collaborative) and Joseph Thomas Thekkekara
                        (Technical Project Manager, Baubot)
                    </CustomizedTypography>
                    <CustomizedTypography tools>
                        Python | Docker | Gmail API | OpenAI API | LLM
                        Integration
                    </CustomizedTypography>
                    <Typography variant={"h6"}>
                        <Button
                            onClick={() => {
                                window.open(
                                    TedAIHackthonPresentation,
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}
                            style={{ ...iconButtonStyle, marginTop: "1rem" }}
                        >
                            <MdSmartDisplay />
                        </Button>
                    </Typography>
                </Stack>
            );
        }
    }
    if (projectId === 2) {
        if (section === "title") {
            return (
                <Stack>
                    <CustomizedTypography title>
                        cogvisAI: Maintenance, Features
                    </CustomizedTypography>
                    <CustomizedTypography title>
                        (since February 2023)
                    </CustomizedTypography>
                </Stack>
            );
        }
        if (section === "text") {
            return (
                <Stack alignItems="center">
                    <CustomizedTypography>
                        Over the past 2 years, I have had the privilege of
                        collaborating with Bit Perfect on an innovative project
                        for Cogvis, a company dedicated to transforming the
                        future of care through advanced technology. Our joint
                        efforts have focused on the design and development of a
                        user-friendly interface and admin panel for Cogvis's
                        pioneering care software, cogvisAI. This software
                        leverages cutting-edge 3D smart sensors to enhance
                        safety for individuals receiving care, all while
                        ensuring compliance with privacy regulations.
                    </CustomizedTypography>
                    <CustomizedTypography>
                        The primary objective of this project was to create an
                        intuitive and multilingual user interface that
                        simplifies complex functionalities for nursing staff
                        while providing administrators with a powerful tool to
                        manage and analyze care services effectively. The
                        project aims to improve the overall quality of care and
                        safety for users by delivering real-time monitoring and
                        alerts.
                    </CustomizedTypography>
                    <CustomizedTypography>
                        Key Features include:
                    </CustomizedTypography>
                    <CustomizedTypography>
                        <List>
                            <CustomizedListItem>
                                - User Interface Development: We designed a
                                multilingual user interface that allows nursing
                                staff to easily navigate the software, monitor
                                the status of care units, and manage settings
                                for individual rooms with activated sensors.
                            </CustomizedListItem>
                            <CustomizedListItem>
                                - Admin Panel Design and Development: An admin
                                panel was created to provide support staff with
                                a comprehensive overview of system settings and
                                analytics, enabling them to enhance care
                                services through data-driven insights.
                            </CustomizedListItem>
                            <CustomizedListItem>
                                - Dashboard Development: Over the past year, we
                                have developed numerous dashboards that provide
                                in-depth insights into care metrics and
                                performance. These dashboards empower
                                administrators and nursing staff to make
                                informed decisions based on real-time data,
                                improving overall care quality and operational
                                efficiency.
                            </CustomizedListItem>
                        </List>
                    </CustomizedTypography>
                    <CustomizedTypography tools>
                        React | TypeScript | Material-UI | Git | GitHub | Figma
                        | Responsive Web Design | Jira | Recharts | i18next
                    </CustomizedTypography>
                    <Typography variant={"h6"}>
                        <CustomizedLinkButton
                            linkURL={"https://cogvis.ai/"}
                            btnText={"cogvis"}
                        />

                        <CustomizedLinkButton
                            linkURL={
                                "https://bitperfect.at/en/portfolio/front-end-development-ui-design-cogvis"
                            }
                            btnText={"bitperfect"}
                        />
                    </Typography>
                </Stack>
            );
        }
    }
};
