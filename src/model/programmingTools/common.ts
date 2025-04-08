export type BaseTechnology = {
    label: string;
    color: string;
}

export type ProgrammingLanguage = BaseTechnology & {
    color: string,
    frequency: 'diario' | 'frecuente' | 'regular'
}

export type ProgrammingTool = BaseTechnology & {
    version: string,
    context: 'backend' | 'frontend' | 'database',
    typeOfTool: 'framework' | 'library' | 'RDBMS',
    subTool: BaseTechnology[]
}

export type PersistanceTool = BaseTechnology & {
    version: string,
    context: 'SQL' | 'NoSQL'
}