import React, { Component } from 'react'
import './componentStyles/Header.css'
import stevieRock from "../images/stevieRock.png";

class Header extends Component{
    render() {
        return(
            <div className="header-component">
                <h1>Gallary</h1>
                <div className="image-home">
                    <img src={stevieRock} alt="hehe"/>
                </div>
            </div>
        )
    }
}

export default Header


