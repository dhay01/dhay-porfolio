const TabButtons = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-purple-200 border-b border-purple-400" : "text-slate-200";
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};
export default TabButtons;
