import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import { useTranslation } from 'react-i18next'; // Импортируем хук для локализации

const Footer = () => {
  const { t } = useTranslation(); // Хук для получения переведенных строк

  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon} alt="Facebook" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={youtube_icon} alt="YouTube" />
      </div>
      <ul>
        <li>{t('audioDescription')}</li>
        <li>{t('helpCenter')}</li>
        <li>{t('investorRelations')}</li>
        <li>{t('giftCards')}</li>
        <li>{t('mediaCenter')}</li>
        <li>{t('jobs')}</li>
        <li>{t('termsOfUse')}</li>
        <li>{t('privacy')}</li>
        <li>{t('legalNotice')}</li>
        <li>{t('cookiePreferences')}</li>
        <li>{t('corporateInfo')}</li>
        <li>{t('contactUs')}</li>
      </ul>
      <p className='copyright-text'>{t('copyrightText')}</p>
    </div>
  );
};

export default Footer;
