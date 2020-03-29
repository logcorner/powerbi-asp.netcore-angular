import { UserManagerSettings } from 'oidc-client';
export function getClientSettings(): UserManagerSettings {
  return {
    // client_id: 'angular_spa',
    // authority: 'https://logcorner-identity-provider.azurewebsites.net',
    // redirect_uri: 'https://angular-power-bi-workshop.azurewebsites.net/auth-callback',
    // post_logout_redirect_uri: 'https://angular-power-bi-workshop.azurewebsites.net/signout-callback',
    // response_type: 'id_token token',
    // scope: 'openid profile email api.read',
    // filterProtocolClaims: false,
    // loadUserInfo: true,
    // automaticSilentRenew: true,
    // silent_redirect_uri: 'https://angular-power-bi-workshop.azurewebsites.net/silent-refresh.html'


    client_id: 'angular_spa',
    authority: 'https://logcorner-identity-provider.azurewebsites.net',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/signout-callback',
    response_type: 'id_token token',
    scope: 'openid profile email api.read',
    filterProtocolClaims: false,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
  };
}
