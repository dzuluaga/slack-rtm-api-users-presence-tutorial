var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var token = process.env.SLACK_API_TOKEN || '';

var rtm = new RtmClient(token);
//var rtm = new RtmClient(token, {logLevel: 'debug'});

rtm.on(RTM_EVENTS.PRESENCE_CHANGE, function (event) {

    //presence changed either by the user or by the client when the user becomes idle
    console.log(event.user + ': ' + event.presence);
});

rtm.on(RTM_EVENTS.MANUAL_PRESENCE_CHANGE, function (event) {

  // presence manually changed by the user
    console.log('manual presence change: ' + JSON.stringify(event) + ': ' + event.presence);
});

rtm.start();