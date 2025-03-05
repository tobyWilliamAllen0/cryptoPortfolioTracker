import React from 'react';
import usePortfolioStore from '../store/usePortfolioStore';

const PortfolioList = () => {
	const { portfolio, deleteHolding } = usePortfolioStore();

	return (
		<ul>
			{portfolio.map((holding, index) => (
				<li
					key={index}
					className="flex justify-between items-start flex-col bg-gray-100 p-4 mb-4 rounded-lg border-gray-200 border-[1px]"
				>
					<span className="font-bold text-xl mb-2">
						{holding.name} {holding.symbol}
					</span>
					<span className="text-base text-gray-500">
						Quantity: {holding.quantity}
					</span>
					<span className="text-base text-gray-500">
						Current Price: {holding.currentPrice}
					</span>
					<span className="text-base text-gray-500">Total: {holding.name}</span>
				</li>
			))}
		</ul>
	);
};

export default PortfolioList;
