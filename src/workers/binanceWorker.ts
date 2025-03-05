import { ensureUSDT } from '../utils/symbolUtils';

const binanceSocket = 'wss://stream.binance.com:9443/stream';

let socket: WebSocket | null = null;

const subscribeToSymbols = (symbols: string[]) => {
	if (socket) {
		socket.close();
	}

	socket = new WebSocket(binanceSocket);

	socket.onopen = () => {
		symbols.forEach((symbol) => {
			const binanceSymbol = ensureUSDT(symbol).toLowerCase();

			socket?.send(
				JSON.stringify({
					method: 'SUBSCRIBE',
					params: [`${binanceSymbol}@ticker`],
					id: 1,
				}),
			);
		});
	};

	socket.onmessage = (event) => {
		const { data } = JSON.parse(event.data);
		if (data && data.e === '24hrTicker') {
			postMessage({
				symbol: data.s,
				price: parseFloat(data.c),
			});
		}
	};

	socket.onerror = (error) => {
		console.error('WebSocket error:', error);
	};

	socket.onclose = () => {
		console.log('WebSocket connection closed');
	};
};

onmessage = (event) => {
	const { type, symbols } = event.data;
	if (type === 'subscribe') {
		subscribeToSymbols(symbols);
	}
};
