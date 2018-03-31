
// Client ID and API key for the account that will
// send messsages to Code4Good official email.
var clientID = '1069758544058-kap3oht1i8qeskhmfejesmbf7b6fm0kp.apps.googleusercontent.com';
var apiKey = 'AIzaSyCRl1sQd6XozzsijDOJuQAliZn3Wnn5DbY	';
// Limit the permissions as much as possible. Only permission to send email.
var scopes = 'https://www.googleapis.com/auth/gmail.send';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function checkAuth() {
  gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: true
  }, handleAuthResult);
}


