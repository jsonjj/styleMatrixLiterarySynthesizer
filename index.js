const { getTopFive } = require('./getTopFive.js');
const { getSummary } = require('./getSummary.js');
const { arrangeObj } = require('./arrangeObj.js');
const { getRA } = require('./getRA.js');
const { getFullSummary } = require('./getFullSummary.js');
const { getFinalReport } = require('./getFinalReport.js');
const prompt = require('prompt-sync')();
const topic = prompt("What is the topic: ");
const sourceType = prompt("What type of sources: ");

console.log(getTopFive(sourceType, topic));
var topFiveObj = {};
var topFiveRes = JSON.parse(prompt("What did you get: \n"));
var resPos = Object.keys(topFiveRes)[0];
topFiveObj[sourceType] = topFiveRes[resPos];
console.log("\n\n");
var summaries = [];
for (var i = 0; i < topFiveObj[sourceType].length; i++) {
  console.log(getSummary(topFiveObj[sourceType][i]));
  console.log("\n");
  var summaryRes = prompt("What did you get: \n");
  var newStr = summaryRes.substring(summaryRes.indexOf("SUMMARY: ") + "SUMMARY: ".length);
  summaries[i] = newStr;
}
topFiveObj.summaries = summaries;
console.log("\n\n");
var analysis = [];
for (var i = 0; i < topFiveObj[sourceType].length; i++) {
  console.log(getRA(topFiveObj[sourceType][i]));
  console.log("\n");
  var analysisRes = JSON.parse(prompt("What did you get: \n"));
    analysis[i] = analysisRes;
}
topFiveObj.analysis = analysis;
console.log("\n\n\n\n\n");
var arrangedInfo = arrangeObj(topFiveObj);
console.log(getFullSummary(topFiveObj.summaries));
console.log("\n");
var fullSummary = prompt("What did you get: \n");

console.log(getFinalReport(topic, topFiveObj.analysis, fullSummary));
console.log("\n");
var finalReport = prompt("What did you get: \n");
console.log(finalReport);

