import { PageLayout } from "../PageLayout";
import { Box, CardContent, CardMedia } from "@mui/material";
import headerProjects from "../../../assets/headerGraphics/headerProjects.svg";
import project1 from "../../../assets/projectImages/project1.svg";
import { cardMediaStyle, parentCardStyle } from "./cardStyles";

export const ProjectsPage = () => {
    const projectCards = [
        { id: 1, image: project1, title: "Project 1" },
        { id: 2, image: project1, title: "Project 2" },
        { id: 3, image: project1, title: "Project 3" },
        { id: 4, image: project1, title: "Project 4" },
    ];

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
                                title={project.title}
                                loading="lazy"
                            />
                        </CardContent>
                    ))}
                </Box>
            </PageLayout>
        </Box>
    );
};
