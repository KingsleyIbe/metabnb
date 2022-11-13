import React from 'react';
import NFT from '../../assets/images/home/ntf.png';

const MetaBnbNFT = () => (
  <section className="mt-[100px] bg-[#A02279] w-[100%]">
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-10 p-[100px]">
      <div className="max-w-[646px]">
        <h3 className="font-semibold text-[48px] lg:w-[700px] text-[#fff]">
          Metabnb NFTs
        </h3>
        <p className="my-10 text-[18px] lg:w-[636px] text-[#fff]">
          Discover our NFT gift cards collection. Loyal customers gets
          amazing gift cards which are traded as NFTs.
          These NFTs gives our customer access to loads of our exclusive services.
        </p>
        <div className="max-w-[618px]">
          <button type="button" className="rounded-[8px] bg-[#fff] text-[16px] text-[#A02279] px-[21px] py-[12px]">Learn More</button>
        </div>
      </div>
      <div className="lg:max-w-[476px]">
        <img src={NFT} alt="Group one" />
      </div>
    </div>
  </section>
);

export default MetaBnbNFT;
