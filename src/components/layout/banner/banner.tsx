import "./banner.scss";

export const Banner = () => {
    return (
        <section className="headBanner">
            <article className="banner">
                <div>
                    <small className="banner__subtitle">
                        Hello there, my name is
                    </small>
                    <h1 className="banner__title">Sebastian Ruiz !</h1>
                    <p className="banner__desc">
                        I try to keep myself in constant learning, I strengthen
                        skills such as self-taught knowledge and project
                        development.
                    </p>
                </div>
                <div className="banner__buttons">
                    <button type="button">
                        <span>Download my CV</span>
                    </button>
                    <button type="button">
                        <span>  Some projects</span>
                    </button>
                </div>
            </article>

            <article className="bannerImage">
                <picture>
                    <img src="" alt="banner" />
                </picture>
            </article>
        </section>
    );
};
