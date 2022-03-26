interface Props {
	children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button' }: Props) => {
	return (
		<button onClick={onClick} className='bg-lime-400 h-10 px-3 rounded-md w-full text-base text-zinc-600 font-bold pointer border-none transition-all duration-75 ease-in hover:text-lime-400 hover:bg-zinc-600' type={type}>
			{children}
		</button>
	);
};

export default Button;
