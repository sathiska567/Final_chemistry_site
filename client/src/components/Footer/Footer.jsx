/* eslint-disable no-unused-vars */
import React from 'react';
import footerModule from '../Footer/footer.module.css';
import { IoCall } from 'react-icons/io5';
import { BiLogoGmail } from 'react-icons/bi';
import { SocialIcon } from 'react-social-icons';


/*Gmail Function Start*/
const gmailEmail = 'sandunsumindak@gmail.com';
const subject = 'Ask for Chemistry Classes';
const body = 'Give the class details \nGrade : \nVenue: \nClass Time : ';

// Encode the subject and body for the URL
const encodedSubject = encodeURIComponent(subject);
const encodedBody = encodeURIComponent(body);

// Create the Gmail compose URL
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailEmail}&su=${encodedSubject}&body=${encodedBody}`;


/*Gmail Function End*/




export const Footer = () => (
  <div>
    <div className={footerModule.trapezoid}>
      <div className={footerModule.mainContainer}>
        <div className={footerModule.subContainers}>
          <ul className={footerModule.footerLeft}>
            <li><img className={footerModule.Logo} src='../../../public/logo.png' alt='Logo' /> </li>
            <li><a href='tel:94+765660860'><IoCall className={footerModule.FooterLeftSocial} />076 - 5660860</a></li>
            <li className={footerModule.desktopMail}><a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer"><BiLogoGmail className={footerModule.FooterLeftSocial} />sandunsumindak@gmail.com</a></li>
            <li className={footerModule.mobileMail}><a href={`mailto:${gmailEmail}?subject=${encodedSubject}&body=${encodedBody}`}><BiLogoGmail className={footerModule.FooterLeftSocial} />sandunsumindak@gmail.com</a></li>
          </ul>
        </div>
        <div className={footerModule.subContainers}>
          <ul className={footerModule.footerMiddle}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Class Details</a></li>
            <li><a href='#'>Classes</a></li>
            <li><a href='#'>About</a></li>
            <li><button className={footerModule.registerButton}>Register</button></li>
          </ul>
        </div>
        <div className={footerModule.subContainers}>
          <div className={footerModule.SocialMediaPlane}>
            <SocialIcon href='https://www.facebook.com/profile.php?id=61550273950503' className={footerModule.SocialIcon} url="https://www.facebook.com/profile.php?id=61550273950503" />
            <SocialIcon href='https://wa.me/94765660860' className={footerModule.SocialIcon} url="https://whatsapp.com" />
            <SocialIcon href='https://www.instagram.com/sandun_suminda/' className={footerModule.SocialIcon} url="https://instagram.com" />
            <SocialIcon href='https://www.linkedin.com/in/sandun-suminda-a1603627b' className={footerModule.SocialIcon} url="https://linkedin.com" />
          </div>
        </div>
      </div>

      <div className={footerModule.MobileMainContainer}>
        <ul className={footerModule.MobileLinkContainer}>
          <li><div className={footerModule.scrollDown}></div></li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Class Details</a></li>
            <li><a href='#'>Classes</a></li>
            <li><a href='#'>About</a></li>
          <li>
            <button className={footerModule.registerButton}>Register</button>
          </li>
          <li>
          <div className={footerModule.mobileSocialMediaPlane}>
            <SocialIcon bgColor='transparent' href='https://www.facebook.com/profile.php?id=61550273950503' className={footerModule.SocialIcon} url="https://www.facebook.com/profile.php?id=61550273950503" />
            <SocialIcon bgColor='transparent' href={`mailto:${gmailEmail}?subject=${encodedSubject}&body=${encodedBody}`} className={footerModule.SocialIcon} url="www.email.com" />
            <SocialIcon bgColor='transparent' href='https://www.instagram.com/sandun_suminda/' className={footerModule.SocialIcon} url="https://instagram.com" />
            <SocialIcon bgColor='transparent' href='https://www.linkedin.com/in/sandun-suminda-a1603627b' className={footerModule.SocialIcon} url="https://linkedin.com" />
          </div>
          </li>
        </ul>
      </div>

      <div className={footerModule.footerBottom}>
        <p>© 2023 Sandun Suminda. All Rights Reserved.</p>
      </div>
    </div>
  </div>
)
