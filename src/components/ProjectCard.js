import React from 'react';
import DrinkersUnited from '../assets/drinkerUnited.png';
import EncoreMusicApp from '../assets/EncoreMusicApp.png';
import DoctorsLog from '../assets/DoctorsLog.png';
import APIWeather from '../assets/APIWeather.png';
import './ProjectCard.css';

const ProjectCard = () => {
    return (
        <div className='projContainerRow'>

            <div className='projCard'>
                <img src={DrinkersUnited} alt='project home' />
                <div className='projTitle'>Drinker United</div>
                <div className='description'>A simple app used to help people make their favorite drinks as well as discover new drinks based off of specific ingredients. We added local bars to enjoy a night out on the town.</div>
                <div className='projButtons'>
                    <a href='https://github.com/NotGrid/Project1-Drinkers-United' target='_blank' className='btn'>Source</a>
                </div>
            </div>
            <div className='projCard'>
                <img src={EncoreMusicApp} alt='project home' />
                <div className='projTitle'>Encore Music App</div>
                <div className='description'>Here, we build our own music app where you can search and listen to music.</div>
                <div className='projButtons'>
                    <a href='https://github.com/NotGrid/EncoreMusicProject3' target='_blank' className='btn'>Source</a>
                </div>
            </div>
            <div className='projCard'>
                <img src={DoctorsLog} alt='project home' />
                <div className='projTitle'>Doctors.Log</div>
                <div className='description'>We created a simple app for doctors to keep better track of their patients and schedules</div>
                <div className='projButtons'>
                    <a href='https://github.com/NotGrid/Doctors_Log' target='_blank' className='btn'>Source</a>
                </div>
            </div>
            <div className='projCard'>
                <img src={APIWeather} alt='project home' />
                <div className='projTitle'>API Weather App</div>
                <div className='description'>A basic weather app I created to learn the functionality of APIs.</div>
                <div className='projButtons'>
                    <a href='https://github.com/NotGrid/API-Weather-Dashboard' target='_blank' className='btn'>Source</a>
                </div>
            </div>
            </div>
)}
            export default ProjectCard;