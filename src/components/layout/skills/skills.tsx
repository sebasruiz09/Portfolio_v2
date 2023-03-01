import { SkillCard } from "@Portfolio/components/UI";
import "./skills.scss";

export const Skills = () => {
    return (
        <section className="skills">
            <h1>My Expertise</h1>
            <div>
                <SkillCard
                    title="Sofware Development"
                    desc="Experience in functional, reactive and OOP: Dart, JavaScript, TypeScript and Csharp"
                    tag="p"
                />
                <SkillCard
                    title="Frontend Development"
                    desc="Passionate about UI/UX. More than 2 years of development experience in HTML, CSS, JS, React and Angular..."
                    tag="h1"
                />
                <SkillCard
                    title="Backend Development"
                    desc="Experience in backend development and cross-platform solutions using NodeJS , NestJS or .NET"
                    tag="b"
                />
            </div>
        </section>
    );
};
