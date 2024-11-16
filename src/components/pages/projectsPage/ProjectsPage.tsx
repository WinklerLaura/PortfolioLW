import { PageLayout } from "../PageLayout";
import { Box, CardContent, CardMedia } from "@mui/material";
import { cardMediaStyle, parentCardStyle } from "./cardStyles";
import headerProjects from "../../../assets/headerGraphics/headerProjects.svg";
import project1 from "../../../assets/projectImages/project1.svg";
import project2 from "../../../assets/projectImages/project2.svg";
import project3 from "../../../assets/projectImages/project3.svg";
import project4 from "../../../assets/projectImages/project4.svg";
import { useState } from "react";
import { ProjectsModal } from "./ProjectsModal";

export const ProjectsPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
        null
    );

    const projectCards = [
        { id: 0, image: project1, title: "Portfolio Laura Winkler" },
        { id: 1, image: project2, title: "Automated Data Extraction" },
        { id: 2, image: project3, title: "cogvisAI: Maintenance, Features" },
        { id: 3, image: project4, title: "Convolutional Neural Network" },
    ];

    const handleClick = (projectId: number) => {
        setOpenModal(true);
        setSelectedProjectId(projectId);
    };

    return (
        <Box sx={{ height: "100%", width: "100%" }}>
            <PageLayout image={headerProjects}>
                <Box sx={parentCardStyle}>
                    {projectCards.map((project) => (
                        <CardContent
                            key={project.id}
                            sx={{
                                p: 0,
                                height: "100%",
                                "&:last-child": { pb: 0 },
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={cardMediaStyle}
                                image={project.image}
                                loading="lazy"
                                onClick={() => handleClick(project.id)}
                            />
                        </CardContent>
                    ))}
                </Box>
                <ProjectsModal
                    open={openModal}
                    onOpenModal={setOpenModal}
                    projectId={selectedProjectId}
                />
            </PageLayout>
        </Box>
    );
};
