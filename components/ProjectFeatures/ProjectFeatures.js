import { Gallery } from "components/Gallery";

export const ProjectFeatures = ({projectName, projectDate, projectDescription, outboundLinkUrl, outboundLinkName, technologies, branding, webDev, webDesign, graphicDesign, motionDesign }) => {    
    console.log("OUTBOUND NAME: ", outboundLinkName);
    console.log("PROJECT NAME: ", projectName);
    return (
        <>
            <div className="max-w-[1330px]">
                <div className="project-name">
                    <header className="header">
                        <h1 className="border-stone-950 dark:border-stone-300 border-l-2 pl-[20px] pt-[10px] pb-[10px] display uppercase font-secondary strong | col-start-1 row-start-2 lg:row-start-1 flex flex-col items-start">
                            {projectName}
                        </h1>
                    </header>
                </div>
                <div className="grid grid-cols-3 mt-2 my-auto p-1">
                    <div className="detail-heading">
                        <span className="detail-dot"></span>
                        <span className="detail-title font-secondary font-xs uppercase strong">Year</span>
                    </div>
                    <div className="detail-heading">
                        <span className="detail-dot"></span>
                        <span className="detail-title font-secondary font-xs uppercase strong">Technologies</span>
                    </div>
                    <div className="detail-heading">
                        <span className="detail-dot"></span>
                        <span className="detail-title font-secondary font-xs uppercase strong">Tags</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 my-auto mt-1 align-middle items-center">
                    <div className="project-date font-secondary text-left">
                        {projectDate}
                    </div>
                    <div className="detail-content flex flex-col items-start font-xs uppercase">
                        Created with {technologies}
                    </div>
                    <div className="mt-5">
                        <div className="project-tag mr-1">
                            {!!branding &&
                                <>
                                Branding
                                </>
                            }
                        </div>
                        <div className="project-tag mr-1">
                            {!!webDev &&
                                <>
                                Web Development
                                </>
                            }
                        </div>
                        <div className="project-tag mr-1">
                            {!!webDesign &&
                                <>
                                Web Design
                                </>
                            }
                        </div>
                        <div className="project-tag mr-1">
                            {!!graphicDesign &&
                                <>
                                Graphic Design
                                </>
                            }
                        </div>
                        <div className="project-tag mr-1">
                            {!!motionDesign &&
                                <>
                                Motion Design
                                </>
                            }
                        </div>
                </div>
            </div>
            <div className="max-w-[1320px] mx-auto border-b-2 border-stone-950 dark:border-stone-300 my-[30px]"></div>
                <div className="grid grid-cols-4 gap-4 max-w-[1320px]">
                    <div className="col-span-3 pb-[50px]">
                        <span className="text-[18px]">
                            <p>{projectDescription}</p>
                        </span>
                    </div>
                    <div className="items-end font-xs uppercase">
                        <span className="strong">Visit The Site:</span><br/><br/>
                        <a href= {outboundLinkUrl} target="_blank" rel="noopener noreferrer" className="btn" id="button">
                        {outboundLinkName} 
                            <svg id="button-arrow" xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                                <path fill="black" d="M24.3536 8.35355C24.5488 8.15829 24.5488 7.84171 24.3536 7.64645L21.1716 4.46447C20.9763 4.2692 20.6597 4.2692 20.4645 4.46447C20.2692 4.65973 20.2692 4.97631 20.4645 5.17157L23.2929 8L20.4645 10.8284C20.2692 11.0237 20.2692 11.3403 20.4645 11.5355C20.6597 11.7308 20.9763 11.7308 21.1716 11.5355L24.3536 8.35355ZM0 8.5H24V7.5H0V8.5Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};