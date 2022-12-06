// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: `${process.env.REACT_APP_CLIENT_ID}`,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}/`,
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me",
};
