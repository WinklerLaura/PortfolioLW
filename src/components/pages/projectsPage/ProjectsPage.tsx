import { PageLayout } from "../PageLayout";
import headerProjects from "../../../assets/headerGraphics/headerProjects.svg";
import styles from "../Pages.module.css";
import { Box } from "@mui/material";

export const ProjectsPage = () => {
    const boxStyle = {
        width: "20vw",
        height: "20vh",
        bgcolor: "rgb(221, 213, 201, 0.04)",
        padding: "20px",
        margin: "2vh 2vw",
        borderRadius: "25px",
        boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
    };

    return (
        <div style={{ height: "100%" }}>
            <PageLayout image={headerProjects}>
                <div className={styles.projectsContainer}>
                    <Box sx={boxStyle}>Project1</Box>
                    <Box sx={boxStyle}>Project2</Box>
                    <Box sx={boxStyle}>Project3</Box>
                </div>
            </PageLayout>
        </div>
    );
};
