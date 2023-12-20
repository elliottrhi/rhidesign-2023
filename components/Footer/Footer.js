export const Footer = ({ items }) => {
    return ( 
        <footer className="mt-[30px] m-auto w-full max-w-[1440px]">
            <div className="footer__inner mb-[30px] mx-[30px]">
                <div className="footer__container">
                    <div className="footer__container__top grid-cols-1">
                        <div className="footer__logo md:mt-[30px] md:ml-[30px] md:mb-[0px] mt-[25px] ml-[25px] mb-[15px]">
                        
                            <svg id="logo" className="footerLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" >
                            <a href="/">
                                <path id="logo-fill" fillRule="evenodd" clipRule="evenodd" d="M33.3501 33.0508C42.5471 33.0419 50 25.6466 50 16.5254C50 7.39869 42.5381 0 33.3334 0H5.5858e-05L0 50H16.6667V33.0585C16.6701 42.4158 22.887 50 30.5555 50H49.9999C49.9999 40.6392 43.7817 33.0508 36.1111 33.0508H33.3501ZM33.3334 16.9492L16.6667 16.9492L16.6667 33.0508L33.3334 33.0508V16.9492Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M33.3501 33.0508C42.5471 33.0419 50 25.6466 50 16.5254C50 7.39869 42.5381 0 33.3334 0H5.5858e-05L0 50H16.6667V33.0585C16.6701 42.4158 22.887 50 30.5555 50H49.9999C49.9999 40.6392 43.7817 33.0508 36.1111 33.0508H33.3501ZM33.3334 16.9492L16.6667 16.9492L16.6667 33.0508L33.3334 33.0508V16.9492Z" />
                            </a>
                            </svg>
                        
                        </div>
                    </div>
                    <div className="footer__container__bottom">
                        <div className="footer__copyright">© Rhi Elliott 2023.</div>
                        <div className="footer__links grid grid-cols-2 md:flex md:justify-end md:align-middle md:items-center">
                            {(items || []).map((item) => (
                                <div key={item.id} className="cursor-pointer relative group">
                                    <a href={item.destination} className="hover:underline hover:rainbow-hover block pl-[25px] font-bold uppercase font-secondary">
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end mr-6">
                        <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="30" viewBox="0 0 16 52" fill="none">
                            <path fill="currentColor" d="M8.71016 0.295956C8.32133 -0.0962533 7.68817 -0.0989909 7.29596 0.289841L0.90454 6.62623C0.512331 7.01506 0.509593 7.64822 0.898425 8.04043C1.28726 8.43264 1.92042 8.43537 2.31263 8.04654L7.99389 2.4142L13.6262 8.09546C14.0151 8.48767 14.6482 8.49041 15.0404 8.10157C15.4326 7.71274 15.4354 7.07958 15.0465 6.68737L8.71016 0.295956ZM8.7838 51.0043L8.99999 1.00432L7.00001 0.995675L6.78382 50.9957L8.7838 51.0043Z" />
                        </svg>
                    </div>
                </div>
            
                <a href="#">
                    <svg className="footer__corner" width="85" height="85" viewBox="0 0 85 85">
                        <path fill="inherit" d="M.5.5h83.3L.5 83.8V.5z"></path>
                    </svg>
                </a>
            </div>
        </footer>
    );
};