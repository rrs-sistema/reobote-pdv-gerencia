export const environment = {
  production: false,
  //apiUrl: 'http://127.0.0.1:8080',//Para local
  apiUrl: 'http://15.235.55.109:10180',//Para Produção

  tokenWhitelistedDomains: [new RegExp('http://15.235.55.109:10180')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
