import Image from "next/image";

export const ProjectCard = ({ title, destination, image, branding, webDev, webDesign, graphicDesign, motionDesign }) => {
    return (
        <a href={destination} className="project-card max-w-[350px] border-2 border-stone-950 dark:border-stone-300 p-5 block dark:hover:bg-stone-900 mt-[30px]">
            <div className="flex w-full relative h-[300px]">
                <Image 
                src={image}
                fill
                sizes="300px"
                alt=""
                className="project-card-img object-cover"
                />
            </div>
            <div className="mt-3 text-lg font-bold font-secondary">
                {title}
            </div>
            <div className="mt-3">
            {(!!branding) && <div className="mr-1 mb-1 inline-block bg-stone-600 rounded-full uppercase font-secondary font-xs px-3">branding</div>}
            {(!!graphicDesign) && <div className="mr-1 mb-1 inline-block bg-stone-600 rounded-full uppercase font-secondary font-xs px-3">graphic design</div>}
            {(!!motionDesign) && <div className="mr-1 mb-1 inline-block bg-stone-600 rounded-full uppercase font-secondary font-xs px-3">motion design</div>}
            {(!!webDesign) && <div className="mr-1 mb-1 inline-block bg-stone-600 rounded-full uppercase font-secondary font-xs px-3">web design</div>}
            {(!!webDev) && <div className="mr-1 mb-1 inline-block bg-stone-600 rounded-full uppercase font-secondary font-xs px-3">web development</div>}
            </div>
        </a>
    )
};