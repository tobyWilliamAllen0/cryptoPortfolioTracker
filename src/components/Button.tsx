import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	className = '',
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
