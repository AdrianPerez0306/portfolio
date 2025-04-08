import { PersistanceTool } from "./common";


const mysql: PersistanceTool = {
    label: 'MySQL',
    color: '',
    version: '',
    context: 'SQL'
}

const postgresql: PersistanceTool = {
    label: 'PostgreSQL',
    color: 'Blue',
    version: '',
    context: 'SQL'
}


export const persistanceTools: { [persistanceTool: string]: PersistanceTool } = {
    mysql: mysql,
    postgresql: postgresql
}
