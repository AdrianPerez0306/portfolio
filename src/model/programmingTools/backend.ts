import { BaseTechnology, ProgrammingTool } from "./common";


const springWebREST: BaseTechnology = {
    label: 'Spring Web REST',
    color: ''
}

const springDataJPA: BaseTechnology = {
    label: 'Spring Data JPA',
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

const mysql: ProgrammingTool = {
    label: 'MySQL',
    color: 'grey',
    version: '',
    context: 'database',
    typeOfTool: 'RDBMS',
    subTool: [springWebREST, springDataJPA]
}

const postgresql: ProgrammingTool = {
    label: 'PostgreSQL',
    color: 'Blue',
    version: '',
    context: 'database',
    typeOfTool: 'RDBMS',
    subTool: [springWebREST, springDataJPA]
}

export const backendTools: { [language: string]: ProgrammingTool } = {
    springBoot: springBoot,
    mysql: mysql,
    postgresql: postgresql
}
