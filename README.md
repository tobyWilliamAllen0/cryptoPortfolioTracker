# Crypto Portfolio Tracker

A modern React application that allows you to track your cryptocurrency investments in real-time. Easily manage your portfolio, view current prices, and monitor the total value of your holdings.

## Features

- 📈 Track multiple cryptocurrencies in one place
- 💰 View real-time price updates
- 📊 Calculate total portfolio value
- ✏️ Add, edit, and delete your crypto holdings
- 💾 Persistent storage to save your portfolio
- 📱 Responsive design for desktop and mobile devices

## Technologies Used

- React 
- TypeScript
- TailwindCSS for styling
- Zustand for state management (via usePortfolioStore)
- Iconsax for UI icons

## Installation

To get started with the Crypto Portfolio Tracker, follow these steps:

```bash
# Clone the repository
git clone https://github.com/tobyWilliamAllen0/cryptoPortfolioTracker.git

# Navigate to project directory
cd crypto-portfolio-tracker

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

### Adding a new holding

1. Click the "Add Holding" button
2. Enter the cryptocurrency name, symbol, and quantity
3. Click "Save" to add it to your portfolio

### Editing a holding

1. Find the holding you want to edit in your portfolio list
2. Click the edit (pencil) icon
3. Update the details as needed
4. Click "Save" to update your portfolio

### Deleting a holding

1. Find the holding you want to remove
2. Click the trash icon
3. Confirm deletion if prompted

## Project Structure

```
crypto-portfolio-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── PortfolioList.tsx     # List view of portfolio holdings
│   │   ├── AddEditDrawer.tsx     # Drawer component for adding/editing holdings
│   │   ├── CryptoForm.tsx        # Form for managing crypto holdings
│   │   ├── PortfolioSummary.tsx  # Summary of portfolio total value
│   │   ├── Header.tsx            # Application header with navigation
│   │   └── PriceDisplay.tsx      # Component for displaying crypto prices
│   ├── store/
│   │   └── usePortfolioStore.ts  # State management for the portfolio
│   ├── utils/
│   │   ├── formatters.ts         # Utility for formatting currency values
│   │   └── symbolUtils.ts        # Utility for handling crypto symbols
│   ├── App.tsx
│   └── index.tsx
└── README.md

```

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [Iconsax React](https://github.com/iconsax-react)
- [TailwindCSS](https://tailwindcss.com/)
