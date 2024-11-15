import { PageLayout } from "../PageLayout";
import { Box, Card, CardMedia } from "@mui/material";
import headerProjects from "../../../assets/headerGraphics/headerProjects.svg";
import project1 from "../../../assets/projectImages/project1.svg";

export const ProjectsPage = () => {
    const cardStyle2 = {
        height: "30vh",
        width: "28vw",
        margin: "1vh 0.3vw",
        borderRadius: "25px",
        boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
        bgcolor: "rgb(221, 213, 201, 0.04)",
    };

    const cardMediaStyle2 = {
        height: "13vh",
        width: "26vw",
        margin: "2vh 1vw",
        borderRadius: "25px",
        objectFit: "contain",
    };

    const parentCardStyle = {
        maxWidth: { xs: "100%", sm: "40vw" },
        maxHeight: "60vh",
        bgcolor: "rgb(221, 213, 201, 0.04)",
        padding: "1.2rem",
        borderRadius: "25px",
        boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "auto",
        "&::-webkit-scrollbar": {
            width: "8px",
            backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "50px",
        },
    };

    return (
        <div style={{ height: "100%" }}>
            <PageLayout image={headerProjects}>
                <Box sx={parentCardStyle}>
                    <Card sx={cardStyle2}>
                        <CardMedia
                            sx={cardMediaStyle2}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                    <Card sx={cardStyle2}>
                        <CardMedia
                            sx={cardMediaStyle2}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                    <Card sx={cardStyle2}>
                        <CardMedia
                            sx={cardMediaStyle2}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                    <Card sx={cardStyle2}>
                        <CardMedia
                            sx={cardMediaStyle2}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                </Box>
            </PageLayout>
        </div>
    );
};
