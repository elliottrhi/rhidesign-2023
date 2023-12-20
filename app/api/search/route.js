import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const filters = await request.json();

    let brandingFilter = ``;
    let webDevFilter = ``;
    let webDesignFilter = ``;
    let graphicDesignFilter = ``;
    let motionDesignFilter = ``;

    if (filters.branding) {
      brandingFilter = `
      {
        key: "branding"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.webDev) {
        webDevFilter = `
        {
          key: "web_dev"
          compare: EQUAL_TO
          value: "1"
        },
        `;
    }

    if (filters.webDesign) {
      webDesignFilter = `
      {
        key: "web_design"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.graphicDesign) {
        graphicDesignFilter = `
        {
          key: "graphic_design"
          compare: EQUAL_TO
          value: "1"
        },
        `;
    }

    if (filters.motionDesign) {
        motionDesignFilter = `
        {
          key: "motion_design"
          compare: EQUAL_TO
          value: "1"
        },
        `;
    }

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            query: `
            query AllProjectsQuery {
              projects(where: { 
                offsetPagination: { size: 3, offset: ${
                  ((filters.page || 1) - 1) * 3
                } }
              metaQuery: {
                relation: AND
                metaArray: [
                    ${brandingFilter}
                    ${webDevFilter}
                    ${webDesignFilter}
                    ${graphicDesignFilter}
                    ${motionDesignFilter}
                ]
              }
            }) {
                pageInfo {
                  offsetPagination {
                    total
                  }
                }
                nodes {
                  databaseId
                  title
                  uri
                  featuredImage {
                    node {
                      uri
                      sourceUrl
                    }
                  }
                  projectFeatures {
                    branding
                    webDev
                    webDesign
                    graphicDesign
                    motionDesign
                  }
                }
              }
            }
          `
        })
    });

    const {data} = await response.json();
    return NextResponse.json({
      total: data.projects.pageInfo.offsetPagination.total,
      projects: data.projects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};