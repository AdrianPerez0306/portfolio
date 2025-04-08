import { BaseTechnology, ProgrammingTool } from "./common"


const pandas:BaseTechnology = {
    label: 'Pandas',
    color: 'Grey'
}

const numpy:BaseTechnology = {
    label: 'Numpy',
    color: 'Grey'
}

const materialUI:BaseTechnology = {
    label: 'Material UI',
    color: 'Grey'
}

const reactHookForm:BaseTechnology = {
    label: 'React-Hook Form',
    color: 'Grey'
}

const axiosAPI:BaseTechnology = {
    label: 'Axios',
    color: 'Grey'
}

const react:ProgrammingTool = {
    label: 'React Ts',
        color: 'Blue',
        version: '18',
        context: 'frontend',
        typeOfTool: 'library',
        subTool: [axiosAPI, reactHookForm, materialUI]
}

const angular:ProgrammingTool = {
    label: 'Angular Ts',
        color: 'Red',
        version: '18',
        context: 'frontend',
        typeOfTool: 'library',
        subTool: [axiosAPI]
}

const selenium:ProgrammingTool = {
    label: 'Selenium WebDriver',
        color: 'Green',
        version: '4',
        context: 'frontend',
        typeOfTool: 'library',
        subTool: [pandas, numpy]
}

export const frontendTools: { [language: string]: ProgrammingTool } = {
    react: react,
    angular: angular,
    selenium: selenium
}