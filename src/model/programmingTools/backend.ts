import { BaseTechnology, ProgrammingTool } from "../common";


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
    color: '#5e8d5a',
    version: '3.4.4',
    context: 'backend',
    typeOfTool: 'framework',
    subTool: [springWebREST, springDataJPA]
}

const mysql: ProgrammingTool = {
    label: 'MySQL',
    color: '#00758f',
    version: '',
    context: 'database',
    typeOfTool: 'RDBMS',
    subTool: [springWebREST, springDataJPA]
}

const postgresql: ProgrammingTool = {
    label: 'PostgreSQL',
    color: '#336791',
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
