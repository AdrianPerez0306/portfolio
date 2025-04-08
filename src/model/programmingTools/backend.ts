import { BaseTechnology, ProgrammingTool } from "./common";


const springWebREST: BaseTechnology = {
    label: 'Spring Web REST',
    color: ''
}

const springDataJPA: BaseTechnology = {
    label: 'Spring Web REST',
    color: ''
}

const springBoot: ProgrammingTool = {
    label: 'Spring Boot',
    color: 'Green',
    version: '3.4.4',
    context: 'backend',
    typeOfTool: 'framework',
    subTool: [springWebREST, springDataJPA]
}

export const backendTools: { [language: string]: ProgrammingTool } = {
    springBoot: springBoot
}
