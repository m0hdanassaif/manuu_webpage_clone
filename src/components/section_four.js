import React from "react";

import { FaFacebookF , FaTwitter , FaLinkedinIn} from 'react-icons/fa'

// Images
import VC from '../asset/VC.png'
import AKA from '../asset/AKA.png'

import BannerBestInMANUU from '../asset/bestthings.png'

const section_four = () => {
  return (
    <div className="about_manuu">
      <div className="navigation_about_manuu">
        <div class="nav-item">Overview</div>
        <div class="nav-item">About University</div>
        <div class="nav-item">School & Centres</div>
        <div class="nav-item">Department</div>
        <div class="nav-item">Students</div>
        <div class="nav-item">Employee Corner</div>
        <div class="nav-item">Publication</div>
        <div class="nav-item">OtherLinks</div>
      </div>

      <div className="messages_for_MANUU">
      <div className="messages_from_BP">
        {/* First message */}
        <div className="message_BP">
          <div className="photo">
            <img src={VC} alt="Vice Chancellor" />
            <h3>Prof. Syed Ainul Hasan Vice Chancellor</h3>
          </div>
          <div className="that_message">
            <h3>Vice-Chancellor’s Message:</h3>
            <p>
              Messages for Students, Teachers, Alumni and Well Wishers of
              Maulana Azad National Urdu University ...
            </p>
            <ul>
            <li><FaLinkedinIn style={{fontSize:'25px'}}/></li>
              <li><FaFacebookF style={{fontSize:'25px'}}/></li>
              <li><FaTwitter style={{fontSize:'25px'}}/></li>
              
            </ul>
          </div>
        </div>

        {/* second message */}
        <div className="message_BP">
          <div className="photo">
            <img src={AKA} alt="Vice Chancellor" />
            <h3 style={{marginTop: '35px'}}>Maulana Abul Kalam Azad</h3>
          </div>

          <div className="that_message">
            <p style={{marginTop : '20px'}}>
              “We must not for a moment forget, it is a birthright of every
              individual to receive at least the basic education without which
              he cannot fully discharge his duties as a citizen.”
            </p>
            <button>Maulana Azad Virtual Gallery</button>
          </div>
        </div>
      </div>
      </div>
      <div className="Banner-of-best-moverment-in-manuu">
        <img src={BannerBestInMANUU} alt="haha"/>
      </div>
    </div>
  );
};

export default section_four;
