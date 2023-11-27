

function getFinalReport(topic, analysis, summary) {
  return 'I am about to give you an array that is full of objects. each object has a rhetorical analysis of the best publications related to a certain topic. based on these rhetorical analyses, can you improve my report on ' + topic + ', using all of the parts of the rhetorical analysis that make the publications some of the best. use these parts of rhetorical analysis to learn how these author write and try to make this report at least 500 words in their writing style. just make one big paragraph that explains the topic. it would be great if you could also quote the sources in certain places. only print the report. this is the array with the rhetorical analyses: ' + JSON.stringify(analysis) + '  this is my current report: ' + summary;
}

module.exports = { getFinalReport };

