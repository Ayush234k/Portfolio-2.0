// import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
 
  return (
    <div id="part-4">
        <div class="part-4-0">Work</div>
        <div class="part-4-1">
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <i class="fa-regular fa-folder"></i>
                    </div>
                    <div class="R">
                        <a href="https://github.com/Ayush232k/Projects/tree/main/weather" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="./Project Links/Weather App/index.html" target="_blank"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
                <div class="con" data-aos="zoom-in-up"><b>WEATHER APP</b></div>
            </div>
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <i class="fa-regular fa-folder"></i>
                    </div>
                    <div class="R">
                        <a href="https://github.com/Ayush232k/Projects/tree/main/Swiggy" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="./projectLinks/carWebpage/car.html" target="_blank"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
                <div class="con"data-aos="zoom-in-up"><b>CAR WEBSITE</b></div>
            </div>
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <i class="fa-regular fa-folder"></i>
                    </div>
                    <div class="R">
                        <a href="https://github.com/Ayush232k/Projects/tree/main/Dashboard"><i class="fa-brands fa-github"></i></a>
                        <a href="./Project Links/Dashboard/asg2.html" target="_blank"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
                <div class="con" data-aos="zoom-in-up"><b>RESPONSIVE DASHBOARD</b></div>
            </div>
        </div>
        <div class="part-4-2">
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <i class="fa-regular fa-folder"></i>
                    </div>
                    <div class="R">
                        <a href="https://github.com/Ayush232k/Projects/tree/main/Registration%20Form" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="./Project Links/Registration Form/form.html" target="_blank"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
                <div class="con" data-aos="zoom-in-up"><b>REGISTRATION FORM</b></div>
            </div>
            <div class="card">
                <div class="links">
                    <div class="L">
                        <i class="fa-regular fa-folder"></i>
                    </div>
                    <div class="R">
                        <a href="#"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
                <div class="con">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div class="card">
                <div class="links">
                    <div class="L">
                        <i class="fa-regular fa-folder"></i>
                    </div>
                    <div class="R">
                        <a href="#"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                </div>
                <div class="con">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
        </div>
    </div>
  );
};
export default Projects;