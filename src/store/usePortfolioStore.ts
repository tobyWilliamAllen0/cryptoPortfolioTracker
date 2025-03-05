import { create } from 'zustand';

interface Holding {
	name: string;
	symbol: string;
	quantity: number;
	currentPrice: number;
}

interface PortfolioState {
	portfolio: Holding[];
	holdingToEdit?: Holding;
	isDrawerOpen: boolean;
	setDrawerOpen: () => void;
	prices: { [key: string]: number };
	addHolding: (holding: Holding) => void;
	editHolding: (updatedHolding: Holding) => void;
	deleteHolding: (index: string) => void;
	loadPortfolio: () => void;
	savePortfolio: () => void;
	updatePrice: (symbol: string, price: number) => void;
	saveHoldingToEdit: (holding: Holding) => void;
}

const usePortfolioStore = create<PortfolioState>((set, get) => ({
	portfolio: [],
	prices: {},
	holdingToEdit: undefined,
	isDrawerOpen: false,
	setDrawerOpen: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
	saveHoldingToEdit: (holding: Holding) => set({ holdingToEdit: holding }),
	addHolding: (holding) =>
		set((state) => ({ portfolio: [...state.portfolio, holding] })),
	editHolding: (updatedHolding: Holding) =>
		set((state) => {
			const newPortfolio = state.portfolio.filter(
				(portfo) => portfo.symbol !== updatedHolding.symbol,
			);
			const portfolio = [...newPortfolio, updatedHolding];
			return { portfolio };
		}),
	deleteHolding: (symbol) =>
		set((state) => {
			const newPortfolio = state.portfolio.filter(
				(portfo) => portfo.symbol !== symbol,
			);
			return { portfolio: newPortfolio };
		}),
	loadPortfolio: () => {
		const storedPortfolio =
			JSON.parse(localStorage.getItem('portfolio') || '[]') || [];
		set({ portfolio: storedPortfolio });
	},
	savePortfolio: () => {
		localStorage.setItem('portfolio', JSON.stringify(get().portfolio));
	},
	updatePrice: (symbol, price) =>
		set((state) => ({
			prices: { ...state.prices, [symbol]: price },
		})),
}));
export default usePortfolioStore;
