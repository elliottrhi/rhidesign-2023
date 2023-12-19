import { useState } from "react";
import Link from "next/link";

export const Navigation = ({ items }) => {
    const [isOpen, setOpen] = useState(false);



    console.log("MAIN MENU: ", items);
    return (
        <main>
            <nav>
                <Link href="/" className="dark:text-stone-300 text-stone-950">
                    <svg id="navlogo" className="navLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" >
                        <path id="logo-fill" fillRule="evenodd" clipRule="evenodd" d="M33.3501 33.0508C42.5471 33.0419 50 25.6466 50 16.5254C50 7.39869 42.5381 0 33.3334 0H5.5858e-05L0 50H16.6667V33.0585C16.6701 42.4158 22.887 50 30.5555 50H49.9999C49.9999 40.6392 43.7817 33.0508 36.1111 33.0508H33.3501ZM33.3334 16.9492L16.6667 16.9492L16.6667 33.0508L33.3334 33.0508V16.9492Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M33.3501 33.0508C42.5471 33.0419 50 25.6466 50 16.5254C50 7.39869 42.5381 0 33.3334 0H5.5858e-05L0 50H16.6667V33.0585C16.6701 42.4158 22.887 50 30.5555 50H49.9999C49.9999 40.6392 43.7817 33.0508 36.1111 33.0508H33.3501ZM33.3334 16.9492L16.6667 16.9492L16.6667 33.0508L33.3334 33.0508V16.9492Z" />
                    </svg>
                </Link>
                <div className={ isOpen ? "nav__menu-container in-front" : "nav__menu-container"}>
				    <div className={ isOpen ? "nav__menu-wrapper dark:bg-stone-900 bg-stone-200 nav-active" : "nav__menu-wrapper dark:bg-stone-900 bg-stone-300"} >
					    <div className="nav__menu-inner">
                            <div className="nav__menu-links-wrapper">
                                <ul className="nav__menu-links">
                                    {(items || []).map((item) => (
                                        <li key={item.id}>
                                            <Link href={item.destination} className="cursor-pointer link nav__menu-link font-secondary" onClick={() => setOpen(!isOpen)}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="nav__menu-bottom">
                            <div className="nav__menu-socials">
                                <a href="https://www.linkedin.com/in/rhi-elliott/" target="_blank" rel="noreferrer" className="socials-link">
                                    <svg id="icon-link" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                    </svg></a>

                                <a href="https://codepen.io/rhidesign/" target="_blank" rel="noreferrer" className="socials-link">
                                    <svg id="icon-link" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                                        <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
                                    </svg>
                                </a>

                                <a href="https://github.com/elliottrhi" target="_blank" rel="noreferrer" className="socials-link">
                                    <svg id="icon-link" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 480 512">
                                        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
                                    </svg>
                                    </a>
                                </div>
                            <div className="nav__menu-copyright m-t-10">
                                © Rhi Elliott 2023.
                            </div>
					    </div>
				    </div>
			    </div>
                <div className="hamburger-wrapper" onClick={() => setOpen(!isOpen)}>
                    <span className={ isOpen ? "hamburger close" : "hamburger"} id="hamburger" >
                        <span></span>
                    </span>
                </div>
            </nav>
        </main>
    );
};
