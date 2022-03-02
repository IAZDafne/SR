import React from "react";
import './Redes.css'

function Redes(){
    return (
        <div className="pie-social">
        <a href="https://www.facebook.com/sistemasderiegodecelaya">
            <img src={require('../Fotos/facebook1.png')} alt="facebook" className="pie-social-img"/>
        </a>
        <a href='https://api.whatsapp.com/send?phone=5214612627736'>
            <img src={require('../Fotos/pngegg.png')} alt="whatsapp" className="pie-social-img"/>
            
            </a>
    </div> 
    )
}

export default Redes;