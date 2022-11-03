import React from 'react';
import { useWindowDimensions } from '/utils/hooks/useWindowDimensions.js';

export const StakePoolTable = ({ children }) => {
	const screens = {
		mobile: '300',
		tablet: '640',
		smlaptop: '1024',
		laptop: '1200',
		desktop: '1400',
	};

	const { width } = useWindowDimensions();

	return (
		<div className="flex flex-col w-full ">
			{width >= screens.tablet ? (
				<div className=" grid grid-cols-8 py-4 px-8 text-[14px] place-items-center w-full  font-Inter ">
					<div className="flex flex-row col-span-2 space-x-2 justify-center items-center ">
						<p>Token</p>
						<img className="w-[15%]" src="/container.svg" />
					</div>

					<div className="flex flex-row col-span-3  space-x-2 justify-center items-center">
						<p>Yield (APY%)</p>
						<img className="w-[15%]" src="/pump.svg" />
					</div>

					<div className="flex flex-row col-span-3  space-x-2 justify-center items-center">
						<p>Bonus</p>
						<img className="w-[15%]" src="/barrels.svg" />
					</div>

				</div>
			) : (
				<div className="grid grid-cols-8 py-4 text-[12px] px-4  place-items-center w-full font-Inter">
					<div className="flex flex-row col-span-4 space-x-2 items-center justify-center ">
						<p>Token</p>
						<img className="w-[15%]" src="/container.svg" />
					</div>

					<div className="flex flex-row col-span-4 space-x-2 items-center justify-center">
						<p>Yield (APY%)</p>
						<img className="w-[15%]" src="/pump.svg" />
					</div>
				</div>
			)}
			{children}
		</div>
	);
};
