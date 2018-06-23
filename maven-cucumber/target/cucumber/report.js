$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/play.feature");
formatter.feature({
  "line": 1,
  "name": "Play cucumber Champ",
  "description": "As my first cucumber script\r\nI want to show my love for play\r\nPlay has become a part of my learning",
  "id": "play-cucumber-champ",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "About Play",
  "description": "",
  "id": "play-cucumber-champ;about-play",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Play a learning platform",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I want to learn",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I open Play to learn and earn",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});