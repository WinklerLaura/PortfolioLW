import { PageLayout } from "../PageLayout";
import headerProjects from "../../../assets/headerGraphics/headerProjects.svg";

export const ProjectsPage = () => {
    return (
        <div style={{ height: "100%" }}>
            <PageLayout image={headerProjects}>
                <h1>ProjectsPage</h1>
            </PageLayout>
        </div>
    );
};
