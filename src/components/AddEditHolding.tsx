import React, { useEffect, useRef, useState } from 'react';
import usePortfolioStore from '../store/usePortfolioStore';
import Button from './Button';
import useDebounce from '../hooks/debounce';

interface Holding {
	name: string;
	symbol: string;
	quantity: number;
	currentPrice: number;
}

interface AddEditHoldingProps {
	onClose?: () => void;
}

const AddEditHolding: React.FC<AddEditHoldingProps> = ({ onClose }) => {
	const { portfolio, addHolding, editHolding, savePortfolio, holdingToEdit } =
		usePortfolioStore();

	const nameRef = useRef<HTMLInputElement>(null);
	const symbolRef = useRef<HTMLInputElement>(null);
	const quantityRef = useRef<HTMLInputElement>(null);

	const [symbol, setSymbol] = useState<string | undefined>();
	const debouncedSymbol = useDebounce(symbol, 500);

	useEffect(() => {
		if (debouncedSymbol) {
			handleInitialData();
		}
	}, [debouncedSymbol]);

	useEffect(() => {
		return () => {
			clearData();
		};
	}, []);

	useEffect(() => {
		if (holdingToEdit) {
			if (nameRef.current) nameRef.current.value = holdingToEdit.name;
			if (symbolRef.current) symbolRef.current.value = holdingToEdit.symbol;
			if (quantityRef.current)
				quantityRef.current.value = holdingToEdit.quantity.toString();
		} else {
			clearData();
		}
	}, [holdingToEdit]);

	const clearData = () => {
		if (nameRef.current) nameRef.current.value = '';
		if (symbolRef.current) symbolRef.current.value = '';
		if (quantityRef.current) quantityRef.current.value = '';
	};

	const handleInitialData = () => {
		const isExist = portfolio.find(
			(holding) => holding.symbol === debouncedSymbol?.toUpperCase(),
		);

		if (isExist) {
			if (nameRef.current) nameRef.current.value = isExist.name;
			if (quantityRef.current)
				quantityRef.current.value = isExist.quantity.toString();
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const quantity = parseFloat(quantityRef.current?.value || '0');

		const newHolding: Holding = {
			name: nameRef.current?.value || '',
			symbol: symbolRef.current?.value || '',
			quantity,
			currentPrice: 0,
		};

		const isExist = portfolio.find(
			(holding) => holding.symbol === newHolding.symbol,
		);

		if (isExist) {
			editHolding(newHolding);
		} else {
			addHolding(newHolding);
		}
		clearData();
		savePortfolio();
		onClose && onClose();
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<input
				ref={symbolRef}
				placeholder="Symbol"
				required
				className="border p-2 mb-2 w-full"
				onChange={(e) => setSymbol(e.target.value)}
				value={symbol}
			/>
			<input
				ref={nameRef}
				placeholder="Crypto Name"
				required
				className="border p-2 mb-2 w-full"
			/>

			<input
				type="number"
				ref={quantityRef}
				placeholder="Quantity"
				required
				min="0"
				className="border p-2 mb-2 w-full"
			/>
			<Button type="submit">{'Add'} Holding</Button>
		</form>
	);
};

export default AddEditHolding;
