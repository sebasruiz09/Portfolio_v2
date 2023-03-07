import { Banner, Sidebar, Skills } from "@Portfolio/components/layout";
import { Main } from "@Portfolio/components/layout/main/main";

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home__content">
                <Banner />
                <Skills />
                <Main />
            </div>
        </div>
    );
};
