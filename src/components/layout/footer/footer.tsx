import "./footer.scss";
import { BsGithub, BsLinkedin, BsGoogle } from "react-icons/bs";
export const Footer = () => {
    return (
        <footer>
            <section>
                <picture>
                    <img src="public/icon.svg" alt="logo" />
                </picture>
                <span>
                    <BsGithub className="footerIcon" />
                    <BsLinkedin className="footerIcon" />
                    <BsGoogle className="footerIcon" />
                </span>
                <p>❤️ Created by Sebas</p>
            </section>
        </footer>
    );
};
