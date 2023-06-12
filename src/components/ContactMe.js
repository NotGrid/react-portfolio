import React from 'react';
import './ContactMe.css';

function ContactMe() {
    return (
        <div className='contactContainer'>
            <div className='contactHeader'>Contact me using the information below!</div>
            <div className='contactCardContainer'>
                <div className='contactCard'>
                    <div className='contactTitle'>View my Github page</div>
                    <div className='projButtons'>
                        <a href='https://github.com/NotGrid' target='_blank' className='btn'>Github</a>
                    </div>
                </div>
                <div className='contactCard'>
                    <div className='contactTitle'>View my LinkedIn page</div>
                    <div className='projButtons'>
                        <a href='https://www.linkedin.com/in/andrew-white-053803235/' target='_blank' className='btn'>LinkedIn</a>
                    </div>
                </div>
                <div className='contactCard'>
                    <div className='contactTitle'>Personal Contact</div>
                    <div className='projButtons'>
                        <a href='mailto:awhitecss@gmail.com' className='btn'>Email</a>
                        <a href='tel:+15593018555' className='btn'>559-301-8555</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe