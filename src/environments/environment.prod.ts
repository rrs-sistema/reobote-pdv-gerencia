export const environment = {
  production: true,
  apiUrl: 'http://ec2-54-157-174-140.compute-1.amazonaws.com:8080/reobote',
  //apiUrl: 'http://localhost:8080',

  tokenWhitelistedDomains: [new RegExp('http://ec2-54-157-174-140.compute-1.amazonaws.com:8080')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
