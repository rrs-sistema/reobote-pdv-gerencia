export const environment = {
  production: true,
  apiUrl: 'http://127.0.0.1:8080/reobote',

  tokenWhitelistedDomains: [new RegExp('127.0.0.1:8080')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
