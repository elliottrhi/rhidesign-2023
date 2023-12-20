import {Poppins, Roboto} from 'next/font/google';
import "../styles/globals.css";
import { getNav } from 'utils/getNav';
import { Navigation } from 'components/Navigation';
config.autoAddCss = false;

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    display: "swap",
    variable: "--font-poppins"
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "400", "700", "900"],
    display: "swap",
    variable: "--font-roboto"
})

export default async function RootLayout({children}){
    const data = await getNav();
    return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
        <body className="font-body">
            <Navigation 
            callToActionDestination={data.callToActionDestination} 
            callToActionLabel={data.callToActionLabel}
            items={data.mainMenuItems} />
            {children}
        </body>
    </html>
    );
};