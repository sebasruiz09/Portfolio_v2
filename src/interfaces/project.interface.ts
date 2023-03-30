export interface ProjectProps {
    direction: "row" | "row-reverse";
    align: "flex-end" | "flex-start";
    alingText: "start" | "center" | "end";
    languages: string[];
    urlRepo: string;
    urlDeploy?: string;
    title: string;
    description: string;
    projectType : string;
}
