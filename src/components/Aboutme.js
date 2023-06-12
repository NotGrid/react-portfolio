import React from 'react'
import headshot from '../assets/DSC_3757.jpg';
import harrier from '../assets/harrier.jpg';
import f18lineup from '../assets/f18lineup.JPG';
import MyDogs from '../assets/Sadie_and_Carbine.jpg';
import './Aboutme.css';


function Aboutme() {
  return (
    <div className='background'>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <img style={{width: '300px', borderRadius: '50%', paddingTop: '20px', paddingBottom: '20px'}} src={headshot} alt='profile_picture' />
        <p className='aboutOpening'>My name is Andrew White and I am a certified Full Stack Developer
        through the UC Berkeley Bootcamp Program.  I specialize in web development using React with CSS styling to fullfill my creative ideas.</p>
        <p className='aviation'>I come from an extensive background in aviation where I've learned basic aircraft maintenance and even became a civilian contractor for the US military.</p>
        <div className='imageContainer'>
          <div className='imageCard'>
        <img src={harrier} alt='harrier jet refueling' />
        </div>
        <div className='imageCard'>
        <img src={f18lineup} alt='f18 lined up'/>
        </div>
        </div>
        <p className='gaming'>I've been gaming for 20 years starting with Halo and enventually switching to Call of Duty. Now, I mostly play Warzone 2.0 with my friends and board games with family/friends over the weekends.</p>
        <p className='dogs'>Proud dog dad!</p>
        <div className='mydogsContainer'>
        <img src={MyDogs} className='mydogsImg' alt='german shepherd and husky' />
        </div>
      </div>
    </div>
  )
}

export default Aboutme