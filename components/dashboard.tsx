import {StakingCard} from "../components/staking"

export const Dashboard = () => {




  return (

<div className="flex flex-col justify-between items-center h-fit mobile:pt-2 px-2 laptop:pt-7 px-0">
<div className="flex laptop:w-[90%] bg-[#FFF6E4] border h-fit rounded-md flex-row mb-3 mobile:w-full p-8 ">
<div className="flex flex-col w-full justify-center">
  <div className="flex flex-row justify-center">
  <div className="flex flex-col w-[60%] justify-center mobile:text-sm tablet:text-lg laptop:text-xl">
    <h1 className="sm-laptop:text-2xl font-bold mb-4">Cross chain liquid staking all in one place.</h1>
    <p className="sm-laptop:text-lg">Join fully transparent node pools to earn staking yields of up to 18.1% in real-time, without the complexity of running nodes on various networks yourself.</p>
    <div className="flex flex-row space-x-3 mt-4 mobile:text-xs tablet:text-lg">
    <button className="rounded-md px-3 py-2 bg-black text-white hover:opacity-70"> Start Staking</button>
    <button className="rounded-md px-3 py-2 border border-black hover:opacity-70">Read Documentation</button>
    </div>
    
    </div>
    <img className="w-[40%] my-7 items-center" src="/rigimg.svg"/>
    </div>

  
  </div>

</div>
<StakingCard/>

</div>
  )
}