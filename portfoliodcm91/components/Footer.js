import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";


export const Footer = ({theme}) => {
  return (
    <div data-theme={theme}>
        <footer data-theme={theme} className="footer p-8 py-6 bg-neutral text-neutral-content" >
            <div style={{position: 'relative', fontSize:"large"}}>
                <p><br/>El código de esta aplicación está disponible, lo que significa que puedes copiar y manipular el código libremente.<br/> <br/> Agradecería  una mención si utilizas este código</p>
            </div> 
            <div>
                <span className="footer-title" style={{fontSize:"large"}}>Social &nbsp; /DCM91</span> 
                <div className="grid grid-flow-col gap-4">
                <a href='https://www.linkedin.com/in/dcm91'><svg style={{width:"4rem", height:"4rem"}}  viewBox="0 0 24 24" className="fill-current"><BsLinkedin /></svg></a>
                <a href='https://github.com/DCM91'><svg style={{width:"4rem", height:"4rem"}}  viewBox="0 0 24 24" className="fill-current"><BsGithub /></svg></a>
                </div>
            </div>
        </footer>
    </div>
  )
}
