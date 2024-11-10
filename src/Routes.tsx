import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { ContactPage } from "./components/pages/ContactPage";

export const Routes = () => {
    return (
        <RouterRoutes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </RouterRoutes>
    );
};
