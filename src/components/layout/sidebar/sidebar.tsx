import "./sidebar.scss";
import {
    AiOutlineHome,
    AiOutlineAppstore,
    AiOutlineUser,
} from "react-icons/ai";
import {FiMoreVertical } from "react-icons/fi";
import { ChangeTheme } from "@Portfolio/components/UI";



export const Sidebar = () => {
    const ToogleSidebar = () => {
        document.body.classList.toggle("open");
    };

    return (
        <div>
            <button
                type="button"
                className="burger"
                onClick={() => ToogleSidebar()}
            >
                <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="" className="burger__avatar"/>
                <FiMoreVertical className="icons" />
            </button>
            <div className="overlay" onClick={()=> ToogleSidebar()}>
                <aside className="sidebar">
                    <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="" className="sidebar__avatar" />
                    <p className="sidebar__username">Sebastian Ruiz</p>
                    <p className="sidebar__role">Full stack Jr Developer</p>
                    <nav className="sidebar__menu">
                        <button className="button-menu">
                            <AiOutlineHome className="icons"/>
                            <span>home</span>
                        </button>
                        <button className="button-menu">
                            <AiOutlineAppstore className="icons"/>
                            <span>Projects</span>
                        </button>
                        <button className="button-menu">
                            <AiOutlineUser className="icons"/>
                            <span>Contact</span>
                        </button>
                    </nav>
                    <nav className="sidebar__menu bottom">
                        <button type="button" className="theme-box">
                            <span>Theme</span>
                            <ChangeTheme />
                        </button>
                    </nav>
                </aside>
            </div>
        </div>
    );
};
