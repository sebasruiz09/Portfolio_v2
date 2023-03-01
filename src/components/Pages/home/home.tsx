import { Banner, Sidebar, Skills } from "@Portfolio/components/layout";
import { Project } from '../../UI/project/project';

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home__content">
                <Banner />
                <Skills />
                <Project />
            </div>
        </div>
    );
};
