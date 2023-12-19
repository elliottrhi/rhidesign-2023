import { useEffect, useState } from "react";
import queryString from 'query-string';

export const Filters = ({onSearch}) => {
    const [branding, setBranding] = useState(false);
    const [webDesign, setWebDesign] = useState(false);
    const [webDev, setWebDev] = useState(false);
    const [graphicDesign, setGraphicDesign] = useState(false);
    const [motionDesign, setMotionDesign] = useState(false);
    

    const handleSearch = () => {
        onSearch({
            branding,
            webDesign,
            webDev,
            graphicDesign,
            motionDesign,
        });
    };

    useEffect(() => {
        const {
            branding: brandingInitial,
            webDesign: webDesignInitial,
            webDev: webDevInitial,
            graphicDesign: graphicDesignInitial,
            motionDesign: motionDesignInitial 
        } = queryString.parse(window.location.search);

        setBranding(brandingInitial === "true");
        setWebDesign(webDesignInitial === "true");
        setWebDev(webDevInitial === "true");
        setGraphicDesign(graphicDesignInitial === "true");
        setMotionDesign(motionDesignInitial === "true");
    }, []);

    return (
            <div className="dark:border-stone-300 border-2  mt-[30px] py-4">
                <ul className="items-center w-full text-sm font-medium sm:flex">
                    <li className="ml-5">
                    <div className="flex items-center ps-3">
                        <input id="vue-checkbox-list" type="checkbox" checked={branding} onChange={() => setBranding((value) => !value)} className="w-4 h-4 text-pink-500 bg-gray-100  rounded focus:ring-pink-500" />
                        <label htmlFor="vue-checkbox-list" className="w-full pl-2 py-3 ms-2 font-secondary text-sm font-medium">Branding</label>
                    </div>
                    </li>
                    <li className="ml-5">
                        <div className="flex items-center ps-3">
                            <input id="react-checkbox-list" type="checkbox" checked={webDesign} onChange={() => setWebDesign((value) => !value)} className="w-4 h-4 text-pink-500 bg-gray-100  rounded focus:ring-pink-500" />
                            <label htmlFor="react-checkbox-list" className="w-full pl-2 py-3 ms-2 font-secondary text-sm font-medium">Web Design</label>
                        </div>
                    </li>
                    <li className="ml-5">
                        <div className="flex items-center ps-3">
                            <input id="angular-checkbox-list" type="checkbox" checked={webDev} onChange={() => setWebDev((value) => !value)} className="w-4 h-4 text-pink-500 bg-gray-100  rounded focus:ring-pink-500" />
                            <label htmlFor="angular-checkbox-list" className="w-full pl-2 py-3 ms-2 font-secondary text-sm font-medium">Web Development</label>
                        </div>
                    </li>
                    <li className="ml-5">
                        <div className="flex items-center ps-3">
                            <input id="laravel-checkbox-list" type="checkbox" checked={graphicDesign} onChange={() => setGraphicDesign((value) => !value)} className="w-4 h-4 text-pink-500 bg-gray-100  rounded focus:ring-pink-500" />
                            <label htmlFor="laravel-checkbox-list" className="w-full pl-2 py-3 ms-2 font-secondary text-sm font-medium">Graphic Design</label>
                        </div>
                    </li>
                    <li className="ml-5">
                        <div className="flex items-center ps-3">
                            <input id="laravel-checkbox-list" type="checkbox" checked={motionDesign} onChange={() => setMotionDesign((value) => !value)} className="w-4 h-4 text-pink-500 bg-gray-100 focus:ring-pink-500" />
                            <label htmlFor="laravel-checkbox-list" className="w-full pl-2 py-3 ms-2 font-secondary font-bold text-sm font-medium">Motion Design</label>
                        </div>
                    </li>
                    <div className="ml-5 my-3">
                        <div className="btn hover:rainbow-fill" id="button" onClick={handleSearch}>Search</div>
                    </div>
                </ul>
            </div>
    );
};