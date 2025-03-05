/**
 * Toggles the USDT suffix on a cryptocurrency symbol
 * If the symbol has USDT, it removes it; if it doesn't, it adds it
 *
 * @param symbol The cryptocurrency symbol to process
 * @returns The processed symbol
 */
export const toggleUSDT = (symbol: string): string => {
	// Normalize to uppercase for consistency
	const upperSymbol = symbol.toUpperCase();

	// Check if symbol ends with USDT (case insensitive)
	if (upperSymbol.endsWith('USDT')) {
		// Remove USDT from the end
		return upperSymbol.slice(0, -4);
	} else {
		// Add USDT to the end
		return `${upperSymbol}USDT`;
	}
};

/**
 * Ensures a symbol has USDT suffix for API calls
 */
export const ensureUSDT = (symbol: string): string => {
	const upperSymbol = symbol.toUpperCase();
	return upperSymbol.endsWith('USDT') ? upperSymbol : `${upperSymbol}USDT`;
};

/**
 * Removes USDT suffix for display purposes
 */
export const removeUSDT = (symbol: string): string => {
	const upperSymbol = symbol.toUpperCase();
	return upperSymbol.endsWith('USDT') ? upperSymbol.slice(0, -4) : upperSymbol;
};
