import { Project } from "@Portfolio/components/UI";

export const Main = () => {
    return (
        <main>
            <Project direction="row" align="flex-end" alingText="end" />
            <Project
                direction="row-reverse"
                align="flex-start"
                alingText="start"
            />
            <Project direction="row" align="flex-end" alingText="end" />
        </main>
    );
};
