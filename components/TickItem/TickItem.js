export const TickItem = ({ children }) => {
  return (
    <div className="grid grid-cols-[50px_1fr] gap-3">
      <div className="text-3xl text-green-500 flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1" fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
      </div>
      <div>{children}</div>
    </div>
  );
};