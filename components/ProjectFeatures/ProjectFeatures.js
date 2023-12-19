export const ProjectFeatures = ({projectName, projectDate, technologies, branding, webDev, webDesign, graphicDesign, motionDesign }) => {
    return (
        <div className="h-screen max-w-xl mx-auto">
            <section className="project-carousel | grid select-none overflow-hidden images | lg:h-3/4 lg:-translate-y-5 lg:self-end lg-down:w-full">
            images
            </section>
            <div className="project-name">
                <header className="header">
                    <h1 className="display uppercase font-secondary strong | col-start-1 row-start-2 lg:row-start-1 flex flex-col items-start">
                        {projectName}
                    </h1>
                </header>
            </div>
            <div className="flex-1 mt-5">
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
            <div className="grid grid-cols-2 mt-2 my-auto p-1">
                <div className="detail-heading">
                    <span className="detail-dot"></span>
                    <span className="detail-title font-secondary font-xs uppercase strong">Year</span>
                </div>
                <div className="detail-heading">
                    <span className="detail-dot"></span>
                    <span className="detail-title font-secondary font-xs uppercase strong">Technologies</span>
                </div>
            </div>
            <div className="grid grid-cols-2 my-auto mt-1 align-middle items-center">
                <div className="project-date font-secondary text-left">
                    {projectDate}
                </div>
                <div className="detail-content flex flex-col items-start font-xs uppercase">
                    //&nbsp; Created with {technologies}
                </div>
            </div>
        </div>
    );
};