function getRA(publicationInfo) {
  return 'Can you provide an rhetorical analysis of this writing. Here is an object that has the name, author, year, and publisher of the publication that i want a rhetorical analysis of. Make sure your rhetorical analysis includes purpose, context, exigence, audience, tone, literary devices, appeals, mode, and style of writing. Write the result in JSON format, with each of the included parts of the rhetorical analysis as the key and the results as the value. Dont include the title, author, publication date, or publisher in the object. only print the object. Here is the object with the info: ' + JSON.stringify(publicationInfo);
}

module.exports = { getRA };

