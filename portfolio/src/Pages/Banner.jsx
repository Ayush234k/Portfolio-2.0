import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Banner.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Banner = () => {
 
  return (
        <div class="content">
            <div class="name">
                <div class="text-box">
                    <div class="first">I'M</div>
                    <div class="second"><h3>AYUSH</h3></div>
                    <div class="third">BUILDING DIGITAL PRODUCTS, BRANDS & EXPERIENCE</div> 
                </div>
                <div class="contact">
                    <div class="one"><a href= "#">Explore My Portfolio</a></div>
                    <div class="two"><a href= "https://www.linkedin.com/in/ayush-singh-6a3a37253/" target="_blank">Connect With Me</a></div>
                    <div class="three">You Can Explore More About My Portfolio And Personal Life Experience Here </div>
                </div>
            </div>
        <div class="icons">
            <Link href="https://www.instagram.com/_ayushh_singh/" target="_blank"><InstagramIcon/></Link>
            <Link href="https://wa.me/7979887495" target="_blank"><WhatsAppIcon/></Link>
            <Link href="https://github.com/Ayush234k" target="_blank"><GitHubIcon/></Link>
        </div>
    </div>
  );
};

export default Banner;