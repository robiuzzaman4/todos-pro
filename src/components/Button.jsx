const Button = ({children, onClick, type, variant}) => {
    return (
        <button
        type={`${type === "submit" ? "submit" : "button"}`}
        onClick={onClick}
        className={`px-4 py-2 rounded-lg bg-lime-500 text-black font-medium focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-neutral-900 ${variant === "secondary" && "bg-neutral-700/50 text-white font-medium focus:ring-neutral-700/50"}`}>
            {children}
        </button>
    );
};

export default Button;