import { Collapse } from "react-collapse";

export const ServicesAccordion = ({open, toggle, title, desc}) => {
    return (
        <div className="block my-2 p-8" onClick={toggle}>
                <div>
                    <div className="services-item">
                    <h6 className="services-item-title font-secondary uppercase font-bold text-[44px] flex">{open ? '-' : '+' } {title}  </h6> 
                    </div>
                </div>
                <div className="border-stone-950 dark:border-stone-300 border-b-2">
                <Collapse isOpened={open}>
                    <div className="services-description text-[24px]"><br/>{desc}<br/><br/></div>
                </Collapse>
                </div>
        </div>
    );
};