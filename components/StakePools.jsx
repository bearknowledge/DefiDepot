import React from 'react';
import { useWindowDimensions } from '/utils/hooks/useWindowDimensions.js';

export const StakePools = ({ positions }) => {
	const screens = {
		mobile: '300',
		tablet: '640',
		laptop: '1200',
		desktop: '1400',
	};

	// let truncateContract =
	// 	positions?.address.substring(0, 4) + '...' + positions?.address.slice(-4);

	// const explorer = 'https://goerli.etherscan.io/address/' + positions?.address;

	const { width } = useWindowDimensions();
	return (
		<a>
			{width >= screens.tablet ? (
				<div className="flex flex-row grid grid-cols-7 text-[12px] rounded-lg w-full bg-[#0C1615] text-white font-Inter items-center justify-between py-3 px-5 my-[.5rem] hover:opacity-70">
					<span className="flex flex-row col-span-2 font-SG text-sm justify-center items-center ">
						<img className="w-[20px] mr-2" src={positions?.logo} />
						{positions?.name}
					</span>

					<span className="flex flex-row col-span-3 text-xs  justify-center items-center ">
						<span className="bg-[#FF8400] text-black rounded-[40px] py-1 px-2 flex ">
							<p className="text-xs font-Inter">
								{positions?.apy}
							</p>
						</span>
					</span>

          <span className="flex flex-row col-span-2 font-SG text-sm  justify-center items-center ">
						+{positions?.bonus}
					</span>
					
				</div>
			) : ( <></>
				// <a
					
				// 	className="flex flex-row grid grid-cols-2 text-[12px] rounded-[40px]  space-x-2 w-full bg-[#0C1615] text-white font-Inter items-center justify-between py-4 px-8 my-[.5rem]"
				// >
				// 	<span className="flex flex-row col-span-1 font-SG text-xs text-ellipsis overflow-hidden ">
				// 		{positions?.name}
				// 	</span>
				// 	<span className="flex flex-row col-span-1 text-xs font-Inter justify-center bg-[#ACFF00] text-black rounded-[40px] py-1 ">
				// 		{positions?.amountYes} Yes / {positions?.amountNo} No
				// 	</span>
				// </a>
			)}
		</a>
	);
};
