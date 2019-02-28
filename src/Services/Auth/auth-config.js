const appConfig = {
  oauth2: {
    authority: "http://192.168.99.100:8080/auth/realms/app1",
    client_id: "js-client",
    redirect_uri: "http://localhost:3000/auth-callback",
    post_logout_redirect_uri: "http://localhost:3000/",
    response_type: "token id_token",
    scope: "openid profile",
    silent_redirect_uri: "http://localhost:3000/cilent-renew.html",
    automaticSilentRenew: true
  }
};

export default appConfig;
