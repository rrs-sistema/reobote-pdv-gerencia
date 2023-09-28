export const environment = {
  production: true,
  apiUrl: 'http://ec2-52-55-56-8.compute-1.amazonaws.com:8080/reobote',
  //apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [new RegExp('http://ec2-52-55-56-8.compute-1.amazonaws.com:8080/reobote')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
