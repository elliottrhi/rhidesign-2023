import { BlockRenderer } from "components/BlockRenderer";
import { Navigation } from "components/Navigation";
import { Footer } from "components/Footer";

export const Page = (props) => {
    console.log("PAGE PROPS: ", props);
    return (
        <>
        <Navigation items={props.mainMenuItems} />
        <div className="grid"  value={{
            title: props.title,
            featuredImage: props.featuredImage,
          }}>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="lg:min-h-[1000px]">
        <BlockRenderer blocks={props.blocks} />
        </div>
        <Footer items={props.mainMenuItems} />
        </div>
        </>
    );
};