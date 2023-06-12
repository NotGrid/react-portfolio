import React from "react";
import Navbar from "../components/Navbar";
import MainBkgd from '../components/MainBkgd';
import '../components/HomePage.css'
import headshot from '../assets/DSC_3757.jpg';


const Home = () => {
    return <div>
        <Navbar /> 
        <MainBkgd />
        <div className="welcome">
            <img style={{width: '300px', borderRadius: '50%', paddingTop: '20px'}} src={headshot} alt='profile_picture' />
            <p>My name is Andrew</p>
            <p>and welcome to my portfolio</p>
        </div>
    </div>
};

export default Home;