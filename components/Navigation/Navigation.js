import Link from "next/link";

export const Navigation = ({ items }) => {
    console.log("MAIN MENU: ", items);
    return (
        <nav className="relative w-full bg-stone-100 dark:bg-stone-950">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1440px] p-4">
                <Link href="/" className="dark:text-stone-300 text-stone-950">
                    <svg id="logo" className="navLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" >
                        <path id="logo-fill" fillRule="evenodd" clipRule="evenodd" d="M33.3501 33.0508C42.5471 33.0419 50 25.6466 50 16.5254C50 7.39869 42.5381 0 33.3334 0H5.5858e-05L0 50H16.6667V33.0585C16.6701 42.4158 22.887 50 30.5555 50H49.9999C49.9999 40.6392 43.7817 33.0508 36.1111 33.0508H33.3501ZM33.3334 16.9492L16.6667 16.9492L16.6667 33.0508L33.3334 33.0508V16.9492Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M33.3501 33.0508C42.5471 33.0419 50 25.6466 50 16.5254C50 7.39869 42.5381 0 33.3334 0H5.5858e-05L0 50H16.6667V33.0585C16.6701 42.4158 22.887 50 30.5555 50H49.9999C49.9999 40.6392 43.7817 33.0508 36.1111 33.0508H33.3501ZM33.3334 16.9492L16.6667 16.9492L16.6667 33.0508L33.3334 33.0508V16.9492Z" />
                    </svg>
                </Link>
                <div className="flex items-center space-x-6">
                    {(items || []).map((item) => (
                        <div key={item.id} className="cursor-pointer relative group">
                            <Link href={item.destination} className="text-sm font-bold uppercase text-stone-950 hover:rainbow-hover dark:text-stone-300 hover:underline font-secondary">
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};
