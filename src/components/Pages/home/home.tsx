import { Sidebar } from "@Portfolio/components/layout";
import { CodeFragment } from "@Portfolio/components/UI";

export const Home = () => {
    return (
        <div className="home_content">
            <Sidebar />
            <CodeFragment />
        </div>
    );
};
