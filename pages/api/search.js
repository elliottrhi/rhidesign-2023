import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

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

    const { data } = await client.query({
      query: gql`
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
      `,
    });
    console.log("SERVER SIDE: ", data.projects.nodes);
    return res.status(200).json({
      total: data.projects.pageInfo.offsetPagination.total,
      projects: data.projects.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;