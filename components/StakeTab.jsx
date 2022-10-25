import React from "react";
import {useState } from "react";


export const StakeTab = ({token}) => {

const [isStaked, setIsStaked] = useState(true)

return (

	<div className='flex flex-col'>
    <div className="flex flex-row py-4 items-center">
    <img className="w-[3%] mr-2" src={token?.logo}/>
    <h1 className="font-bold text-left text-white">{token?.name}</h1>
    </div>
							<div className="flex flex-col flex-1 ">
							<div className="flex flex-row">
								<button
									type="selection"
									id="stake"
									className={
										isStaked
											? 'flex flex-row justify-center items-center w-1/2 font-medium text-lg py-4 text-black bg-[#FF8400] rounded-tl-lg rounded-bl-lg'
											: 'flex flex-row justify-center items-center w-1/2 font-medium text-lg py-4 text-white bg-black border border-white border-[2px] rounded-tl-lg rounded-bl-lg active:opacity-70'
									}
									onClick={() => setIsStaked(true)}
								>
									Stake 🥩
								
								</button>
								<button
									type="selection"
									id="unstake"
									className={
										isStaked
											? 'flex  flex-row justify-center items-center w-1/2 font-medium text-lg py-4 text-white bg-black border border-white border-[2px] bg-black rounded-tr-lg rounded-br-lg active:opacity-70'
											: 'flex flex-row justify-center items-center w-1/2 font-medium text-lg py-4 text-white bg-[#FF8400] rounded-tr-lg rounded-br-lg'
									}
									onClick={() => setIsStaked(false)}
								>
									Unstake 🐄
								
								</button>
							</div>
							<div className="mt-5 flex flex-row  bg-white items-center py-4 px-6 text-left w-[100%] border-[1px] border-black rounded-[80px]  focus:outline-2 focus:outline-offset-2 hover:outline-1">
								<p className="flex-1 text-left mobile:text-sm laptop:text-md pr-1">
									Amount:
								</p>
								<input
									className="flex-1 text-right mobile:text-sm laptop:text-md mobile:w-[10%] appearance-none focus:none focus:outline-none"
									name="Amount"
									id="amount"
									type="number"
									placeholder={"100 " + token?.name}
									// onChange={() => CalculateTotal()}
									required
								/>
							</div>

							<button
								type="submit"
								id="mint"
								className="w-full border border-white border-[2px] font-medium mb-6 mt-3 text-xl py-4 text-white bg-[#0C1615] rounded-[80px] hover:opacity-70"
							>
								{isStaked ? 'Stake' : 'Unstake'}
							</button>
              </div>
              </div>
              





)







}