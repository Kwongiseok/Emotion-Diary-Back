async function sentimentAnalysis(text) {
  try {
    const language = require("@google-cloud/language");
    const client = new language.LanguageServiceClient();
    // Prepares a document, representing the provided text
    const document = {
      content: text,
      type: "PLAIN_TEXT",
    };
    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({ document });
    const sentiment = result.documentSentiment;
    const score = sentiment.score;

    return score;
  } catch (err) {
    console.log(err);
    throw new Error(`Error`);
  }
}

module.exports = {
  sentimentAnalysis,
};
