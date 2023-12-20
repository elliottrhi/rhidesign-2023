"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Filters } from "./Filters/Filters";
import { SearchResults } from "./SearchResults";
import { Pagination } from "./Pagination";
import queryString from "query-string";

export const ProjectSearch = () => {
    const [projects, setProjects] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 3;
    const router = useRouter();
    const pathname = usePathname();

    const search = async () => {
        const { page, branding, webDesign, webDev, graphicDesign, motionDesign } = queryString.parse(window.location.search);
        const filters = {};
        if(branding === "true"){
            filters.branding = true;
        }
        if(webDesign === "true"){
            filters.webDesign = true;
        }
        if(webDev === "true"){
            filters.webDev = true;
        }
        if(graphicDesign === "true"){
            filters.graphicDesign = true;
        }
        if(motionDesign === "true"){
            filters.motionDesign = true;
        }
        
        const response = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1" ),
                ...filters,
            }),
        });
        const data = await response.json();
        console.log("SEARCH DATA: ", data);
        setProjects(data.projects);
        setTotalResults(data.total);
    };

    const handlePageClick = async (pageNumber) => {
        const {
            branding,
            webDesign,
            webDev,
            graphicDesign,
            motionDesign 
        } = queryString.parse(window.location.search);
        router.push(
            `${pathname}?page=${pageNumber}&branding=${branding === "true"}&webDesign=${webDesign === "true"}&webDev=${webDev === "true"}&graphicDesign=${graphicDesign === "true"}&motionDesign=${motionDesign === "true"}`
        );
    };

    useEffect(() => {
        search();
    }, []);

    const handleSearch = async ({branding, webDesign, webDev, graphicDesign, motionDesign}) => {
        // update our browser url
        // search
        console.log("FILTERS: ", branding, webDesign, webDev, graphicDesign, motionDesign);
        router.push(
            `${pathname}?page=1&branding=${!!branding}&webDesign=${!!webDesign}&webDev=${!!webDev}&graphicDesign=${!!graphicDesign}&motionDesign=${!!motionDesign}`
        );
    };

    return (
        <div> 
        <Filters onSearch={handleSearch} />
        <SearchResults projects={projects} />
        <Pagination 
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)} 
        />
        </div>
    );
};