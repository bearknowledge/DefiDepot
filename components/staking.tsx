import type { NextPage } from 'next';
import {Linegraph} from '../components/linegraph';


import { useState, useEffect, useMemo } from 'react';

import React from 'react';
// import { ethers } from 'ethers';
import { StakePoolTable } from '../components/StakePoolTable';
import { StakePools } from '../components/StakePools';
import { StakeTab } from '../components/StakeTab';

// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib

import { Skeleton } from '@mui/material';



declare let window: any;
export const StakingCard = () => {
  const [Token, setToken] = useState(-1)

const skeletonArray = [1, 2, 3];
const allPools:any [] = [
  {logo: "/eth.png",
  name: "ETH",
  apy: 3.75,
  bonus: 4.2}
];

return (
  <div className="flex mb-10 mobile:w-full laptop:flex-col justify-center laptop:w-[90%]">
    <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3 w-full">
    {Token === -1 ?
     <span className="w-full h-[22rem] bg-[#FFF6E4] rounded-lg shadow p-6 mobile:col-span-2">
       <h1>Staking Pools Available</h1>

        <StakePoolTable>
          {allPools.length === 0
            ? skeletonArray.map(() => (
                <>
                  <Skeleton
                    animation="pulse"
                    variant="rounded"
                    height={50}
                    width={"100%"}
                    sx={{ borderRadius: "100px" }}
                  />
                  <p className="h-4"> </p>
                </>
              ))
            : allPools?.map((el: any, index: number) => {
                return <button className='' onClick={() => setToken(index)}><StakePools positions={el} /></button>
              })}
        </StakePoolTable>
      </span> : <span className="w-full h-[22rem] bg-black rounded-lg shadow p-3 col-span-2">
        <button onClick={() => setToken(-1)} className='text-white px-2'>X</button>
        <StakeTab token={allPools[Token]}/>
      </span> }

      <span className="text-lg w-full h-[22rem] bg-[#FFF6E4] rounded-lg shadow p-6 mobile:col-span-2">
        <div className='flex flex-1 flex-col'>
        <h1 className='text-2xl'>My Total Balance</h1>
        <h1 className='font-bold text-2xl'>$1,000,000</h1>
        </div>
        <div className='flex flex-2 flex-col justify-center divide-y mt-3 divide-black'>
          <div className='flex flex-row justify-between'>
<span className='flex flex-col'>
  <h1>$DPO Balance</h1>
  <h2 >0.00 DPO</h2>
</span>

<span className='flex flex-col'>
<h1>$DPO Price</h1>
  <h2 className='text-right'>$0.33</h2>
  </span>
          </div>
          <div className='flex flex-row justify-between items-center mt-3 pt-3'>
<span>
        <h1 className=''>Staking Rewards</h1>
        <h1>$6.25</h1>
        </span>
        <span>
        <button className='bg-black py-1 px-3 rounded-lg text-white shadow-lg hover:opacity-70'>Claim Rewards</button>
        </span>
        </div>
        </div>
       
      </span>

    
    </div>
  </div>
);

}