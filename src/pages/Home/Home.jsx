import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next'; 

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="Hero Banner" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="Hero Title" className='caption-img' />
          <p>
            {t('heroDescription')}
          </p>
          <div className='hero-btns'>
            <button className='btn'>
              <img src={play_icon} alt="Play" />
              {t('play')}
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="Info" />
              {t('moreInfo')}
            </button>
          </div>
          <br />
        </div>
      </div>

      <div className='more-cards'>
        <TitleCards title={t('blockbusterMovies')} category={"top_rated"} key="blockbuster-movies" />
        <br />
        <TitleCards title={t('onlyOnNetflix')} category={"popular"} key="only-on-netflix" />
        <br />
        <TitleCards title={t('upcoming')} category={"upcoming"} key="upcoming" />
        <br />
        <TitleCards title={t('topPicsForYou')} category={"now_playing"} key="top-pics" />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
