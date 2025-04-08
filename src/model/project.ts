import { PersistanceTool, ProgrammingLanguage, ProgrammingTool } from "./programmingTools/common"

export type Project = {
    id:number,
    title:string,
    info:string,
    img:string,
    languages: ProgrammingLanguage[]
    technologys: (ProgrammingTool | PersistanceTool)[],
    type: 'laboral' | 'facultad',
    inProgress: boolean,
    githubRepoLink: string,
    hosted: boolean,
    deployLink?: string
}