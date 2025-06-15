import { ProgrammingLanguage, ProgrammingTool } from "./common"

export type Project = {
    id:number,
    title:string,
    info:string,
    img:string,
    languages: ProgrammingLanguage[]
    technologys: ProgrammingTool[],
    type: 'laboral' | 'facultad',
    inProgress: boolean,
    githubRepoLink: string,
    hosted: boolean,
    deployLink?: string
}