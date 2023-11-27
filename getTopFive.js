function getTopFive(sourceType, topic) {
  return "Please perform a research review based on a topic specified below. Do not print it to the screen. Using the topic and literature review related to the topic, return a list of the top 5 " + sourceType + " on the topic. Just provide the title, author, publication date, and publisher for each. Only print out the list. Write in json format. TOPIC: " + topic;
}

module.exports = { getTopFive };