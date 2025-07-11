import { NavLink, Outlet } from "react-router-dom";
import { defaultRoute } from "../../views/routes/router";
import './layout.css'
import { useEffect } from "react";


export const Layout = () => {
    
    function cleanSelectedButtons(buttonsToClear:NodeListOf<HTMLButtonElement>){
        buttonsToClear.forEach(b=> b.classList.remove('selected'))
    }
    function setSelectedButton(buttonToSelect:HTMLButtonElement){
        buttonToSelect.classList.add('selected')
    }

    function selectedButton(){
        const buttons:NodeListOf<HTMLButtonElement> = document.querySelectorAll('button')
        buttons.forEach(button =>{
            button.addEventListener('click', ()=>{
                cleanSelectedButtons(buttons)
                setSelectedButton(button)
            })
        })
    }

    useEffect(()=>{
        selectedButton()
    },[])
    return <>
        <header>
            <div className="detail">
                <img src="./src/assets/logo.png" alt="IMG" className="detail__logo" />
                <h2 className="detail__title">Portfolio</h2>
            </div>
            <div className="shortcuts">
    
                <NavLink to={`${defaultRoute}/main`} >
                    <button className="selected">About me</button>
                </NavLink>

                <NavLink to={`${defaultRoute}/projects`}>
                    <button >Projects</button>
                </NavLink>

                <NavLink to={`${defaultRoute}/projects`}>
                    <button >Extra</button>
                </NavLink>
            </div>

        </header>
        <div className="content">
            <Outlet></Outlet>
        </div>
        <footer>
            {
                ["Github", "Linkedin", "Curriculum"].map((name, index)=>(
                    <span key={index} >{name}</span>
                ))
            }
        </footer>
    </>
};
