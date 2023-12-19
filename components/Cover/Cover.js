import Image from "next/image";

export const Cover = ({ children, background }) => {
    return (
        <div className="h-screen dark:bg-stone-950 relative min-h-[400px] flex justify-center items-center cover">
            <Image alt="Cover" src={background} fill className="mix-blend-soft-light object-cover"/>
            <div className="max-w-[1440px] z-10">
                {children}
            </div>
        </div>
    )
}