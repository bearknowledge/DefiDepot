import type { NextPage } from 'next';
import {Linegraph} from '../components/linegraph';

import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';

import React from 'react';
// import { ethers } from 'ethers';
import { StakePoolTable } from '../components/StakePoolTable';
import { StakePools } from '../components/StakePools';

// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib

import { Skeleton } from '@mui/material';



declare let window: any;
export const StakingCard = () => {

const skeletonArray = [1, 2, 3];
const allPools:any [] = [
  {logo: "/eth.png",
  name: "ETH",
  apy: "3.75%",
  bonus: "4.2%"},
  {logo: "/fuel.png",
  name: "FUEL",
  apy: "10.4%",
  bonus: "7.7%"},
];

return (
  
  <div className="flex flex-col justify-center w-[90%] mb-10">
   <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3 w-full">
   <span className="w-full h-[22rem] bg-[#FFF6E4] rounded-lg shadow p-6">

<h1>Staking Pools Available</h1>

<StakePoolTable>
             {allPools.length === 0
               ? skeletonArray.map(() => (
                 <>
                   <Skeleton
                     animation="pulse"
                     variant="rounded"
                     height={50}
                     width={'100%'}
                     sx={{ borderRadius: '100px' }}
                   />
                   <p className="h-4"> </p>
                 </>
               ))
               : allPools?.map((el: any, index: number) => {
                 return <StakePools positions={el} />;
               })}
           </StakePoolTable>


   </span>
   
    <span className="w-full h-[22rem] bg-[#FFF6E4] rounded-lg shadow p-6">
    <h1>My Total Balance</h1>
<h2>Staking Rewards</h2>
    
    </span>
    <span className="w-full h-[22rem] bg-[#FFF6E4] rounded-lg p-6 shadow col-span-2">
  <div>
    
 <h1>Total Value Locked</h1>
 <h1>$1,773,246</h1>
 <Linegraph/>

 </div>
    </span>



   </div>
  </div>
)

}