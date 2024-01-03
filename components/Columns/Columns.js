export const Columns = ({ isStackedOnMobile, children }) => {
    return (
        <div>
            <div className={`max-w-[1340px] mx-auto items-center ${isStackedOnMobile ? "block lg:flex" : "flex"}`}>
            {children}
            </div>
        </div>
    );
};