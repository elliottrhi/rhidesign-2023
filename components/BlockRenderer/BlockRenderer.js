import { Gallery } from "components/Gallery";
import { FormspreeForm } from "components/FormspreeForm/formspreeForm";
import { ProjectSearch } from "components/ProjectSearch";
import { ProjectFeatures } from "components/ProjectFeatures";
import { ServicesTable } from "components/ServicesTable";
import { ServicesTech } from "components/ServicesTech";
import { CallToActionButton } from "components/CallToActionButton";
import { SmallSpacer } from "components/SmallSpacer";
import { LargeSpacer } from "components/LargeSpacer";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { TickItem } from "components/TickItem";
import { Wrapper } from "components/Wrapper";
import { theme } from "theme";
import Image from "next/image";



export const BlockRenderer = ({blocks}) => {
    return blocks.map(block => {
        switch(block.name){
            case "acf/wrapper": {
                return (
                    <Wrapper key={block.id}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Wrapper>
                )
            }
            case "acf/tickitem": {
                return (
                    <TickItem key={block.id}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </TickItem>
                )
            }
            case "core/gallery": {
                return ( 
                    <Gallery 
                    key={block.id}
                    columns={block.attributes.columns || 3}
                    cropImages={block.attributes.imageCrop}
                    items={block.innerBlocks}
                    /> 
                );
            }
            case "acf/formspreeform": {
                return ( <FormspreeForm key={block.id} formId={block.attributes.data.form_id}/> );
            }
            case "acf/projectsearch": {
                return ( <ProjectSearch key={block.id} /> );
            }
            case "acf/projectfeatures": {
                return ( 
                    <ProjectFeatures 
                    key={block.id}
                    projectName={block.attributes.project_name}
                    projectDate={block.attributes.project_date} 
                    technologies={block.attributes.technologies}
                    branding={block.attributes.branding}
                    webDev={block.attributes.web_dev}
                    webDesign={block.attributes.web_design}
                    graphicDesign={block.attributes.graphic_design}
                    motionDesign={block.attributes.motion_design}
                    /> );
            }
            case "acf/servicestable": {
                return (
                <ServicesTable key={block.id} />
                );
            }
            case "acf/servicestech": {
                return (
                <ServicesTech key={block.id} />
                );
            }
            case "acf/ctabutton": {
                return ( 
                    <CallToActionButton 
                    key={block.id} 
                    buttonLabel={block.attributes.data.label} 
                    destination={block.attributes.data.destination || "/"}
                    align={block.attributes.data.align } 
                    /> 
                );
            }
            case "acf/smallspacer": {
                return (
                    <SmallSpacer key={block.id} />
                )
            }
            case "acf/largespacer": {
                return (
                    <LargeSpacer key={block.id} />
                )
            }
            case "core/paragraph": {
                return (
                    <Paragraph 
                    key={block.id}
                    content={block.attributes.content}
                    textAlign={block.attributes.align}
                    textColor={
                            theme[block.attributes.textColor] ||
                            block.attributes.style?.color?.text
                        }
                    />
                );
            }
            case "core/post-title":
            case "core/heading": {
                return (
                <Heading 
                key={block.id} 
                level={block.attributes.level}
                content={block.attributes.content}
                textAlign={block.attributes.align}
                />
                );
            }
            case "core/cover": {
                return (
                <Cover key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks} />
                </Cover>
                );
            }
            case "core/columns": {
                return (
                    <Columns 
                    key={block.id} 
                    isStackedOnMobile={block.attributes.isStackedOnMobile}
                    textColor={
                        theme[block.attributes.textColor] ||
                        block.attributes.style?.color?.text
                      }
                    backgroundColor={
                        theme[block.attributes.backgroundColor] ||
                        block.attributes.style?.color?.background
                      }
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Columns>
                )
            }
            case "core/column": {
                return (
                    <Column 
                    key={block.id} 
                    width={block.attributes.width}
                    textColor={
                        theme[block.attributes.textColor] ||
                        block.attributes.style?.color?.text
                      }
                    backgroundColor={
                        theme[block.attributes.backgroundColor] ||
                        block.attributes.style?.color?.background }
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Column>
                )
            }
            case "core/group": 
            case "core/block": {
                return (
                    <BlockRenderer key={block.id} blocks={block.innerBlocks} />
                )
            }
            case "core/image": {
                return ( 
                    <Image 
                    key={block.id} 
                    src={block.attributes.url} 
                    height={block.attributes.height}
                    width={block.attributes.width}
                    alt={block.attributes.alt || ""}
                    />
                )
            }
            default:
                return null;
        }
    })
}