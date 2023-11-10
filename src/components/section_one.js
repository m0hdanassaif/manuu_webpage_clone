import React from 'react'

import CoverImage from '../asset/cover_image.jpeg'

const section_one = () => {
    return (
        <div className='section_one'>
            <div className='cover_image'>
                <img src={CoverImage} alt='opps' />
            </div>

            <div className='box_links'>
                <div className='link_box'><h4>NIRF</h4></div>
                <div className='link_box'><h4>NAAC SSR</h4></div>
                <div className='link_box'><h4>Online Education/SWAYAM</h4></div>
                <div className='link_box'><h4>Seminar/Workshop/conference</h4></div>
                <div className='link_box'><h4>IQAC</h4></div>
                <div className='link_box'><h4>Best Practices</h4></div>
                <div className='link_box'><h4>Institutional Distinctiveness</h4></div>
                <div className='link_box'><h4>Library</h4></div>
           

            </div>
        </div>
    )
}

export default section_one
