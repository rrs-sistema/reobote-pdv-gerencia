export const environment = {
  production: true,
  apiUrl: 'https://ec2-52-87-219-196.compute-1.amazonaws.com:8080/reobote',
  //apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [new RegExp('https://ec2-52-87-219-196.compute-1.amazonaws.com:8080/reobote')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
