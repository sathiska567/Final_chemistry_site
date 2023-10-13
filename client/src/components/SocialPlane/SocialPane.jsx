/* eslint-disable no-unused-vars */
import React from 'react'
import socialPlane from'../SocialPane/socialPane.module.css'
import { SocialIcon } from 'react-social-icons'

export const SocialPane = () => {
  return (
    <div>
        <div className={`${socialPlane.socialMediaPlane} position-fixed`}>
            <SocialIcon href='' className={socialPlane.SocialIcon} url="https://www.facebook.com/profile.php?id=61550273950503" />
            <SocialIcon href='https://wa.me/94765660860' className={socialPlane.SocialIcon} url="https://whatsapp.com" />
            <SocialIcon href='https://www.instagram.com/sandun_suminda/' className={socialPlane.SocialIcon} url="https://instagram.com" />
            <SocialIcon href='https://www.linkedin.com/in/sandun-suminda-a1603627b' className={socialPlane.SocialIcon} url="https://linkedin.com" />
          </div>

        <div className={`${socialPlane.socialMediaPlaneForMobile} position-fixed`}>
        <SocialIcon href='https://wa.me/94765660860' style={{ width: '65px', height: '65px' }} url="https://whatsapp.com" />
      </div>
    </div>
  )
}
