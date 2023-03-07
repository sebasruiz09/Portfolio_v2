import { ProjectProps } from "@Portfolio/interfaces";
import styled from "styled-components";

export const ProjectContent = styled.div<Partial<ProjectProps>>`
    display: flex;
    flex-direction : ${props => props.direction};
`;
