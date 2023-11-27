function getSummary(publicationInfo) {
  return 'Can you provide an in depth summary of this writing. Here is an object that has the name, author, year, and publisher of the publication that i want a summary of. Try to make the summary at least 200 words. Only print the summary to the screen. Also, can you print the whole summary as one paragraph. Write "SUMMARY:" at the beginning of your summary. Here is the object with the info: ' + JSON.stringify(publicationInfo);
}

module.exports = { getSummary };