import { backendTools } from "../model/programmingTools/backend"
import { persistanceTools } from "../model/programmingTools/database"
import { frontendTools } from "../model/programmingTools/frontend"
import { programmingLanguages } from "../model/programmingTools/language"
import { Project } from "../model/project"

const automotiveDesign: Project = {
    'id': 1,
    'title': 'Automotive Design',
    'img': './src/assets/readApp.jpeg',
    'info': 'Proyecto freelance de venta de productos a base de impresiones 3D. Se implementan las features de venta de producto, comunicacion via mail sobre cada venta. ',
    'languages': [programmingLanguages.java, programmingLanguages.typescript],
    'technologys': [backendTools.springBoot, frontendTools.react, persistanceTools.mysql],
    'type': 'laboral',
    'inProgress': true,
    'githubRepoLink': 'https://github.com/AdrianPerez0306',
    'hosted': false,
    'deployLink': ''
}

const uberto: Project = {
    'id': 2,
    'title': 'Uberto',
    'img': './src/assets/readApp.jpeg',
    'info': 'Se implementan features de login. La applicacion permite buscar conductores disponibles, contratar viajes con conductores, ver la informacion del conductor del viaje. Cuenta con un perfil personal de usuario, donde se puede modificar la informacion(segun validaciones de dominio), ver los viajes realizados, calificar al conductor del viaje.',
    'languages': [programmingLanguages.kotlin, programmingLanguages.typescript],
    'technologys': [backendTools.springBoot, frontendTools.react, persistanceTools.postgresql],
    'type': 'facultad',
    'inProgress': false,
    'githubRepoLink': 'https://github.com/AdrianPerez0306',
    'hosted': false,
    'deployLink': ''
}

const readApp: Project = {
    'id': 4,
    'title': 'ReadApp',
    'img': './src/assets/readApp.jpeg',
    'info': 'Applicacion de lectura. Se implementan features de login, creacion de cuenta, recuperar credenciales. Permite agregar amigos, leer libros, generar recomendaciones sobre libros, valorar las recomendaciones',
    'languages': [programmingLanguages.kotlin, programmingLanguages.typescript],
    'technologys': [backendTools.springBoot, frontendTools.react],
    'type': 'facultad',
    'inProgress': false,
    'githubRepoLink': 'https://github.com/AdrianPerez0306',
    'hosted': false,
    'deployLink': ''
}



const webScrapping: Project = {
    'id': 3,
    'title': 'WebScrapping Qanlex',
    'img': './src/assets/readApp.jpeg',
    'info': 'Ejercicio de entrevista tecnica de web-scrapping. Se pide realizar un scrapper para la pagina <LINK>, y cumplir determinadas condiciones especificadas en la consigna entregada. La consigna se encuentra adjunta en el repositorio de Github',
    'languages': [programmingLanguages.python],
    'technologys': [frontendTools.selenium],
    'type': 'laboral',
    'inProgress': false,
    'githubRepoLink': 'https://github.com/AdrianPerez0306',
    'hosted': false,
    'deployLink': ''
}


export const projects = [readApp, uberto, webScrapping, automotiveDesign]

