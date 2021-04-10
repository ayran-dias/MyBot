import * as BlipSdk from 'blip-sdk';
import * as WebSocketTransport from 'lime-transport-websocket'

// Put your identifier and access key here
let IDENTIFIER = 'chatparadesafio';
let ACCESS_KEY = 'dG9vNW81UVVxcEZCWWs0Q0pwRVY=';

// Create a client instance passing the identifier and accessKey of your chatbot
let client = new BlipSdk.ClientBuilder()
    .withIdentifier(IDENTIFIER)
    .withAccessKey(ACCESS_KEY)
    .withTransportFactory(() => new WebSocketTransport())
    .build();

// Connect with server asynchronously
// Connection will occurr via websocket on 8081 port.
client.connect() // This method return a 'promise'.
    .then(function(session) {
        // Connection success. Now is possible send and receive envelopes from server. */
        console.log('Application started. Press Ctrl + c to stop.')
    })
    .catch(function(err) { /* Connection failed. */ });