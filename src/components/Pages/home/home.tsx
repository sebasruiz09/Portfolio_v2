import { Banner, Sidebar } from "@Portfolio/components/layout";

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home__content">
                <Banner />
            </div>
        </div>
    );
};
