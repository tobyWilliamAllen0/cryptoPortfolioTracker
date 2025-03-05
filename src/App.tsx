import React, { useEffect, useRef, useState } from 'react';
import PortfolioList from './components/PortfolioList';
import AddEditHolding from './components/AddEditHolding';
import BottomDrawer from './components/BottomDrawer';
import usePortfolioStore from './store/usePortfolioStore';
import Button from './components/Button';
import './App.css';

const App: React.FC = () => {
	const { loadPortfolio, portfolio, updatePrice, isDrawerOpen, setDrawerOpen } =
		usePortfolioStore();

	const workerRef = useRef<Worker | null>(null);

	useEffect(() => {
		loadPortfolio();
	}, [loadPortfolio]);

	useEffect(() => {
		if (workerRef.current) {
			workerRef.current.terminate();
		}

		workerRef.current = new Worker(
			new URL('./workers/binanceWorker.ts', import.meta.url),
		);

		workerRef.current.onmessage = (event) => {
			const { symbol, price } = event.data;
			updatePrice(symbol, price);
		};
		const symbols = portfolio.map((holding) => holding.symbol);

		workerRef.current.postMessage({ type: 'subscribe', symbols });

		return () => {
			if (workerRef.current) {
				workerRef.current.terminate();
			}
		};
	}, [portfolio, updatePrice]);

	const toggleDrawer = () => {
		setDrawerOpen();
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
