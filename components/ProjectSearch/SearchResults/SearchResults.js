import { ProjectCard } from "./ProjectCard";

export const SearchResults = ({ projects }) => {
    return (
    <div className="max-w-[1340px] mx-auto grid md:grid-cols-3 gap-5 mb-10 ">
        {projects.map(project => 
            <ProjectCard 
            key={project.databaseId} 
            title={project.title} 
            destination={project.uri}
            branding={project.projectFeatures.branding}
            graphicDesign={project.projectFeatures.graphicDesign}
            motionDesign={project.projectFeatures.motionDesign}
            webDesign={project.projectFeatures.webDesign}
            webDev={project.projectFeatures.webDev}
            image={project.featuredImage?.node?.sourceUrl}
            />
        )}
    </div>
    );
};