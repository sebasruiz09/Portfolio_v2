import { FiGithub } from "react-icons/fi";
import "./project.scss";

export const Project = () => {
    return (
        <section className="project">
            <span>
                <h3>01. Projects Personal Title</h3>
                <div />
            </span>
            <article className="project__content">
                <picture className="project__picture">
                    <img src="./src/assets/images/editor.png" alt="editor" />
                </picture>
                <aside className="projectInfo">
                    <div className="projectInfo__header">
                        <small>Featured Project</small>
                        <h3>Project name</h3>
                    </div>
                    <p className="projectInfo__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo repellat nesciunt quia unde aliquam? Eaque amet
                        eveniet exercitationem. Quos amet iure.
                    </p>
                    <span className="projectInfo__tags">
                        <p>typescript</p>
                        <p>react</p>
                        <p>sass</p>
                        <p>vite</p>
                        <p>Vs code</p>
                    </span>
                    <span className="projectInfo__tags">
                        <FiGithub />
                    </span>
                </aside>
            </article>
        </section>
    );
};
