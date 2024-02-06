// import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
 
  return (
    <div id="part-3">
        <div class="skill">Skills</div>
        <div class="skill-1">
            <div class="skill-1-L">
                <div class="skill-1-L-1"></div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>HTML</b></div>
                    <div class="Progress">
                        <div class="Progress-1"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>CSS</b></div>
                    <div class="Progress">
                        <div class="Progress-2"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>JAVA SCRIPT</b></div>
                    <div class="Progress">
                        <div class="Progress-3"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>REACT</b></div>
                    <div class="Progress">
                        <div class="Progress-4"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>C++</b></div>
                    <div class="Progress">
                        <div class="Progress-5"></div>
                    </div>
                </div>
            </div>
            <div class="skill-1-R">
                <img src="./Images/img5.jpg" alt="Image can't load"/>
            </div>
        </div>
    </div>
  );
};
export default Skills;