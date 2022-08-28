import React from 'react';
import './Styles/home.css'
import lotus from './assets/lotus.png'

function Introduction() {
    return(
        <div id="introduction">
            {/*  Intro Text  */}
            <div id="intro-text">
                {/*  Intro Title  */}
                <div id="intro-title">
                    <h1>Jennifer Nguy</h1>
                </div>
                {/*  Intro Description  */}
                <div id="intro-description">
                    {/* <h1>VISUAL ARTIST</h1>
                    <h1>+</h1>
                    <h1>DESIGNER</h1> */}
                    <h1>VISUAL ARTIST + DESIGNER</h1>
                </div>
                {/*  About Link  */}
            </div>
            {/*  Intro Image  */}
            <div id="intro-img">
                <img id="lotus-img" src={lotus} alt="lotus" />
            </div>
            <div id='button-container'>
                <button class="about-button">
                    <a href="About.html"><b>About Me</b></a>
                </button>
            </div>
        </div>
    )
};

export default Introduction;
