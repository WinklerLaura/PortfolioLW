import { PageLayout } from "../PageLayout";
import headerContact from "../../../assets/headerGraphics/headerContact.svg";

export const ContactPage = () => {
    return (
        <div style={{ height: "100%" }}>
            <PageLayout image={headerContact}>
                <h1>ContactPage</h1>
            </PageLayout>
        </div>
    );
};
