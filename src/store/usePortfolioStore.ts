import { create } from 'zustand';

interface Holding {
	name: string;
	symbol: string;
	quantity: number;
	currentPrice: number;
}

interface PortfolioState {
	portfolio: Holding[];
	addHolding: (holding: Holding) => void;
	editHolding: (updatedHolding: Holding) => void;
	deleteHolding: (index: number) => void;
	loadPortfolio: () => void;
	savePortfolio: () => void;
}

const usePortfolioStore = create<PortfolioState>((set, get) => ({
	portfolio: [],
	addHolding: (holding) =>
		set((state) => ({ portfolio: [...state.portfolio, holding] })),
	editHolding: (updatedHolding) =>
		set((state) => {
			const newPortfolio = state.portfolio.filter(
				(portfo) => portfo.symbol !== updatedHolding.symbol,
			);
			const portfolio = [...newPortfolio, updatedHolding];
			return { portfolio };
		}),
	deleteHolding: (index) =>
		set((state) => {
			const portfolio = state.portfolio.filter((_, i) => i !== index);
			return { portfolio };
		}),
	loadPortfolio: () => {
		const storedPortfolio =
			JSON.parse(localStorage.getItem('portfolio') || '[]') || [];
		set({ portfolio: storedPortfolio });
	},
	savePortfolio: () => {
		localStorage.setItem('portfolio', JSON.stringify(get().portfolio));
	},
}));

export default usePortfolioStore;
