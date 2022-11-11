import React from 'react';
import Logo1 from '../../assets/images/home/logo1.svg';
import Logo2 from '../../assets/images/home/logo2.svg';
import Logo3 from '../../assets/images/home/logo3.svg';

const PartnerLogo = () => (
  <div className="bg-[#A02279] w-[100%] my-10">
    <div className="flex gap-[250px] items-center py-2 px-[100px]">
      <img src={Logo1} alt="Partner Logo one" />
      <img src={Logo2} alt="Partner Logo one" />
      <img src={Logo3} alt="Partner Logo one" />
    </div>
  </div>
);

export default PartnerLogo;
