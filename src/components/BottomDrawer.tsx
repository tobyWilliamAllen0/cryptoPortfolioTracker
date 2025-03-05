import React from 'react';

interface BottomDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
	isOpen,
	onClose,
	children,
}) => {
	return (
		<div
			className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
				isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
		>
			<div
				className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-lg transition-transform duration-300 transform ${
					isOpen ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<div className="py-4 px-8">
					<button onClick={onClose} className="text-gray-500">
						Close
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};

export default BottomDrawer;
