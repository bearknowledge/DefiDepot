import {StakingCard} from "../components/staking"

export const Dashboard = () => {




  return (

<div className="flex flex-col justify-between items-center flex-2  h-fit pt-7">
<div className="w-[90%] bg-[#FFF6E4] border h-fit rounded-md flex flex-row mb-3">
  <div className="flex flex-col w-[60%] justify-center space-y-4 px-6">
    <h1 className="sm-laptop:text-2xl font-bold">Cross chain liquid staking all in one place.</h1>
    <p className="sm-laptop:text-lg">Join fully transparent node pools to earn staking yields of up to 18.1% in real-time, without the complexity of running nodes on various networks yourself.</p>
    <div className="flex flex-row space-x-3">
    <button className="rounded-md px-3 py-2 bg-black text-white hover:opacity-70"> Start Staking</button>
    <button className="rounded-md px-3 py-2 border border-black hover:opacity-70">Read Documentation</button>
    </div>
    
  </div>
  <img className="w-[30%] my-7 items-center" src="/rigimg.svg"/>

</div>
<StakingCard/>

</div>
  )
}