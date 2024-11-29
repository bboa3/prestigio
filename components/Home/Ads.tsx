import ads1Img from '@/assets/img/ads/ads_1.jpg';
import Image from 'next/image';
import React from 'react';

const Ads: React.FC = () => {

  return (
    <div className="container space-top">
      <a href="https://themeforest.net/user/themeholy/portfolio">
        <Image width={600} height={600} src={ads1Img} alt="ads" className='w-100' />
      </a>
    </div>
  )
};

export default Ads;