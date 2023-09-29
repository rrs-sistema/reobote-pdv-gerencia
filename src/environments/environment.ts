export const environment = {
  production: false,
  //apiUrl: 'http://127.0.0.1:8080',//Para local
  apiUrl: 'http://ec2-52-87-219-196.compute-1.amazonaws.com:8080/reobote',//Para Produção

  tokenWhitelistedDomains: [new RegExp('http://ec2-52-87-219-196.compute-1.amazonaws.com:8080')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
