import "./codeFragment.scss";
import { BiRightArrow, BiGitCompare } from "react-icons/bi";
import { BsWindow } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { GrFormClose } from "react-icons/gr";
import { DiReact } from "react-icons/di";

export const CodeFragment = () => {
    const numbers = [...Array(15).keys()];
    return (
        <section className="fragment">
            <div className="fragment__scape">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="fragment__head">
                <div className="fragment__title">
                    <p>
                        Home.tsx M <GrFormClose />
                    </p>
                    <p>
                        Home.scss U <GrFormClose />
                    </p>
                </div>
                <div className="fragment__options">
                    <BiRightArrow />
                    <BiGitCompare />
                    <BsWindow />
                    <SlOptions />
                </div>
            </nav>
            <p className="fragment__subtitle">
                src &gt; components &gt; UI &gt; 
                <DiReact />
                 Home.tsx{" "}
            </p>
            <article className="window">
                <div className="window__lines">
                    {numbers.map((e) => (
                        <span key={e}>{e}</span>
                    ))}
                </div>
            </article>
        </section>
    );
};
