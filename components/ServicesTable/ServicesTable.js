import { useState } from "react";
import { ServicesAccordion } from "./ServicesAccordion";

export const ServicesTable = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if(open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }

    const accordionData = [
        {
            title: "Branding",
            desc: "With my influential combination of skills in design, marketing, and advertising, I create distinguished logos or visual identities that will make your business pop.",
        },
        {
            title: "Web Development",
            desc: "Ensuring your online presence is evergreen and thrives in a constantly-evolving environment, I prioritize UI/UX and accessibility to ensure a smooth experience on all devices.",
        },
        {
            title: "Web Design",
            desc: "With an emphasis on interactive 2D and 3D browser-based graphics, I am dedicated to transforming ordinary online moments into extraordinary ones.",
        },
        {
            title: "Graphic Design",
            desc: "Utilizing my experience in marketing and community research, my skills in Graphic Design bring innovation and appeal to audiences as unique as you are.",
        },
        {
            title: "Motion Design",
            desc: "With a keen eye for interactivity and memorable digital moments, I craft unique animations that help breathe life into your brand or business.",
        },
    ];

    return (
        <section className=" my-auto mx-auto max-w-[800px]">
            <div className="mx-auto flex">
                <span className="mx-auto text-center">Learn more about what I do <svg id="details-arrow" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="currentColor" d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"/></svg></span>
            </div>
            <div className="mx-auto grid grid-row-1">
                {accordionData.map((data, index) => { return (
                    <ServicesAccordion 
                    key={index} 
                    open={index === open} 
                    title={data.title} 
                    desc={data.desc} 
                    toggle={()=>toggle(index)}/>
                ); 
            })}
            </div>
        </section>
    );
};