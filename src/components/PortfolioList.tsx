import React from 'react';
import usePortfolioStore from '../store/usePortfolioStore';
import { formatUSD } from '../utils/formatters';
import { ensureUSDT } from '../utils/symbolUtils';
import { Edit2, Trash } from 'iconsax-react';

const PortfolioList = () => {
	const {
		portfolio,
		prices,
		saveHoldingToEdit,
		setDrawerOpen,
		deleteHolding,
		savePortfolio,
	} = usePortfolioStore();

	return (
		<ul>
			{portfolio.map((holding, index) => (
				<li
					key={index}
					className="flex justify-between items-center flex-row bg-gray-100 p-4 mb-4 rounded-lg border-gray-200 border-[1px]"
				>
					<div className="flex justify-between items-start flex-col">
						<span className="font-bold text-xl mb-2">
							{holding.name} {holding.symbol}
						</span>
						<span className="text-base text-gray-500">
							Quantity: {holding.quantity}
						</span>
						<span className="text-base text-gray-500">
							Current Price:{' '}
							{formatUSD(Number(prices[ensureUSDT(holding.symbol)]))}
						</span>
						<span className="text-base text-gray-500">
							Total:{' '}
							{formatUSD(
								Number(holding.quantity) *
									Number(prices[ensureUSDT(holding.symbol)]),
							)}
						</span>
					</div>
					<div className="cursor-pointer flex flex-col gap-4 items-center justify-center">
						<Edit2
							size="24"
							color="#7e8491"
							onClick={() => {
								saveHoldingToEdit(holding);
								setDrawerOpen();
							}}
						/>
						<Trash
							size="24"
							color="#7e8491"
							onClick={() => {
								deleteHolding(holding.symbol);
								savePortfolio();
							}}
						/>
					</div>
				</li>
			))}
		</ul>
	);
};

export default PortfolioList;
