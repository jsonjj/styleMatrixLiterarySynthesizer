function getFullSummary(summaries) {
  return 'I am about to give you an array that is full of summaries of the best publications related to a certain topic. based on these summaries, can you write a full report on the topic based on the information presented by each summary. try to make this report at least 500 words. only print the report. this is the array with the summaries: ' + JSON.stringify(summaries);
}

module.exports = { getFullSummary };

