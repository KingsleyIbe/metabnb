import React from 'react';
import Group1 from '../../assets/images/home/group1.png';

const Intro = () => (
  <div className="max-w-[1240px] p-10 mt-[100px]">
    <div className="flex flex-col lg:flex-row lg:gap-10">
      <div className="max-w-[646px]">
        <h1 className="font-semibold text-[56px] lg:w-[700px]">
          <span>Rent a </span>
          <span className="text-[#A02279]">Place </span>
          <span>away from </span>
          <span className="text-[#A02279]">Home </span>
          <span>in the </span>
          <span className="text-[#A02279]">Metaverse </span>
        </h1>
        <p className="my-10 text-[24px] lg:w-[636px]">
          we provide you access to luxury and affordable houses in the metaverse,
          get a chance to turn your imagination to reality at your comfort zone

        </p>
        <div className="max-w-[618px]">
          <span className="flex gap-0 max-w-[618px]">
            <input type="text" placeholder="Search for location" className="input-border" />
            <button type="button" className="home-input-btn bg-[#A02279] px-[21px] py-[12px] text-[#fff]">Search</button>
          </span>
        </div>
      </div>
      <div className="max-w-[476px]">
        <img src={Group1} alt="Group one" />
      </div>
    </div>
  </div>
);

export default Intro;
