import React from 'react';
import '../options.css';
import Card from './HouseCard';
import Footer from "./Footer";
import styled from 'styled-components';

const CardList = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: stretch;
  position: relative;
  margin: auto;
  flex-direction: row;
  flex-wrap: wrap;




`;
export default function Options() {

    document.addEventListener('DOMContentLoaded', () => {
        const previousBtn = document.getElementById('previousBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        const content = document.getElementById('content');
        const bullets = [...document.querySelectorAll('.bullet')];

        const MAX_STEPS = 4;
        let currentStep = 1;
            nextBtn.addEventListener('click', () => {
                bullets[currentStep - 1].classList.add('completed');
                currentStep += 1;
                previousBtn.disabled = false;
                if (currentStep === MAX_STEPS) {
                    nextBtn.disabled = true;
                    finishBtn.disabled = false;
                }
                content.innerText = `Step Number ${currentStep}`;

            });



            previousBtn.addEventListener('click', () => {
                bullets[currentStep - 2].classList.remove('completed');
                currentStep -= 1;
                nextBtn.disabled = false;
                finishBtn.disabled = true;
                if (currentStep === 1) {
                    previousBtn.disabled = true;
                }
                content.innerText = `Step Number ${currentStep}`;
            });


            finishBtn.addEventListener('click', () => {
                window.location.reload();
            });


    })

    return (

        <div className="container">
            <div id="stepProgressBar">
                <div className="step">
                    <p className="step-text">About</p>
                    <div className="bullet">1</div>
                </div>
                <div className="step">
                    <p className="step-text">Contact</p>
                    <div className="bullet">2</div>
                </div>
                <div className="step">
                    <p className="step-text">Step 3</p>
                    <div className="bullet">3</div>
                </div>
                <div className="step">
                    <p className="step-text">Step 4</p>
                    <div className="bullet ">4</div>
                </div>
            </div>


                <p id="content" className="text-center">Step Number 1</p>
                <div id="main">
                <button id="previousBtn" >Previous</button>
                <button id="nextBtn">Next</button>
                <button id="finishBtn" >Finish</button>
            </div>
            <CardList>
            <Card img="skyscraper.png"/>
            <Card img="skyscraper.png"/>
            <Card img="skyscraper.png"/>
            <Card img="skyscraper.png"/>
            </CardList>
            <Footer />
        </div>
    )


}