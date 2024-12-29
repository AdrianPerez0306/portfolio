export const aboutMe = `
Desarrollador en formación con experiencia en el diseño y desarrollo de aplicaciones. Me apasiona la resolución de problemas y la lógica computacional. Tengo conocimientos teorico/practicos programacion full-stack,disenio de bases de datos, OOP y pratones de disenio me permiten abordar proyectos complejos de manera estructurada. Busco oportunidades para aplicar mis habilidades en un entorno colaborativo y seguir creciendo profesionalmente. Soy una persona curiosa, con una gran capacidad para aprender y aplicar nuevos conocimientos. Actualmente trabajo como docente en UNSAM-ECyT-CPU en Introduccion a las Ciencias y la Tecnologia(ICyT)` 
export type project = {
    id:number,
    title:string,
    img:string,
    info:string,
    technologys: {
        [key: string]: string[];
    },
    link:string
}
const project_1:project = {
    'id': 1,
    'title':'ReadApp',
    'img':'./src/assets/readApp.jpeg',
    'info':'Mucho texto saraza perro loco Mucho texto saraza perro loco Mucho texto saraza perro loco Mucho texto saraza perro loco',
    'technologys':{
        'language':['TypeScript', 'Kotlin'],
        'front-end':['Angular v.18','React', 'Material-UI'],
        'back-end': ['SpringBoot Framework'],
        'database':[],
        'testing':['Jasmine', 'Karma', 'Cypress']
    },
    'link':'https://github.com/AdrianPerez0306'
}

export const projects = [project_1]
