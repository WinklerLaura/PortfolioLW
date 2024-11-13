import { PageLayout } from "../PageLayout";
import { Card, CardMedia } from "@mui/material";
import headerProjects from "../../../assets/headerGraphics/headerProjects.svg";
import project1 from "../../../assets/projectImages/project1.svg";

export const ProjectsPage = () => {
    const cardStyle = {
        width: "630px",
        height: "230px",
        minHeight: "230px",
        margin: "2vh 2vw",
        padding: "15px 15px",
        borderRadius: "25px",
        boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
        bgcolor: "rgb(221, 213, 201, 0.04)",
    };

    const parentCardStyle = {
        maxWidth: "40vw",
        minWidth: "670px",
        maxHeight: "60vh",
        bgcolor: "rgb(221, 213, 201, 0.04)",
        padding: "1.2rem",
        borderRadius: "25px",
        boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
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
                <Card sx={parentCardStyle}>
                    <Card sx={cardStyle}>
                        <CardMedia
                            sx={{
                                height: 200,
                                width: "100%",
                                objectFit: "contain",
                            }}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                    <Card sx={cardStyle}>
                        <CardMedia
                            sx={{
                                height: 200,
                                width: "100%",
                                objectFit: "contain",
                            }}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                    <Card sx={cardStyle}>
                        <CardMedia
                            sx={{
                                height: 200,
                                width: "100%",
                                objectFit: "contain",
                            }}
                            image={project1}
                            title="project1Image"
                        />
                    </Card>
                </Card>
            </PageLayout>
        </div>
    );
};
