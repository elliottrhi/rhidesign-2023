import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
    console.log("CONTEXT: ", context);
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

    const {data} = await client.query({
        query: gql`
        query PageQuery($uri: String!) {
            nodeByUri(uri: $uri) {
              ... on Page {
                id
                title
                blocks
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                seo {
                  metaDesc
                  title
                }
              }
              ... on Project {
                id
                title
                blocks
                seo {
                  metaDesc
                  title
                }
                projectFeatures {
                  branding
                  webDev
                  webDesign
                  graphicDesign
                  motionDesign
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            acfOptionsMainMenu {
              mainMenu {
                callToActionButton {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                menuItems {
                  items {
                    destination {
                      ... on Page {
                        uri
                      }
                    }
                    label
                  }
                  menuItem {
                    label
                    destination {
                      ... on Page {
                        uri
                      }
                    }
                  }
                }
              }
            }
          }
          `,
          variables: {
            uri,
        },
    });
    return {
        props: {
          seo: data.nodeByUri.seo,
          title: data.nodeByUri.title,
          projectFeatures: data.nodeByUri.projectFeatures || null,
          featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
          mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
          callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
          callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
          blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
        },
    };
};