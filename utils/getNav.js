import { mapMainMenuItems } from "./mapMainMenuItems";

export const getNav = async () => {
    const params = {
        query: `
        query NavQuery {
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
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(params),
    });
    const {data} = await response.json();
    return {
        mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
    };
};