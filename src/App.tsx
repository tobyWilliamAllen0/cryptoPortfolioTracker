import React, { useEffect, useState } from 'react';
import PortfolioList from './components/PortfolioList';
import AddEditHolding from './components/AddEditHolding';
import BottomDrawer from './components/BottomDrawer';
import usePortfolioStore from './store/usePortfolioStore';
import Button from './components/Button';
import './App.css';

const App: React.FC = () => {
	const { loadPortfolio } = usePortfolioStore();
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		loadPortfolio();
	}, [loadPortfolio]);

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen);
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex flex-row justify-between items-center mb-4">
				<h1 className="text-2xl font-bold">Crypto Portfolio Tracker</h1>
				<Button onClick={toggleDrawer}>+ Add New Holding</Button>
			</div>
			<PortfolioList />

			<BottomDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
				<AddEditHolding onClose={toggleDrawer} />
			</BottomDrawer>
		</div>
	);
};

export default App;
