export const Column = ({children, width}) => {
    const widthStyle = width 
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
    return (
        <div style={widthStyle} className="max-w-[1380px] mx-auto">
            {children}
        </div>
    );
};