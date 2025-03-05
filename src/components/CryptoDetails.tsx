import React from 'react';

interface Holding {
	name: string;
	symbol: string;
	quantity: number;
}

interface CryptoDetailsProps {
	holding: Holding;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ holding }) => {
	return (
		<div>
			<h2>
				{holding.name} ({holding.symbol})
			</h2>
			<p>Quantity: {holding.quantity}</p>
			{/* Add chart and historical data here */}
		</div>
	);
};

export default CryptoDetails;
