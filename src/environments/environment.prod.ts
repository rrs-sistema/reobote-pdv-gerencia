export const environment = {
  production: true,
  apiUrl: 'http://15.235.55.109:10180',
  //apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [new RegExp('http://15.235.55.109:10180')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
