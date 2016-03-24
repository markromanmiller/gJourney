/**
 * Emails the journaler the daily entry request she or he provided.
 */
function sendJournalRequest() {
  var text = buildJournalRequestText();
  var subject = buildSubjectLine();
  GmailApp.sendEmail(JOURNALERS_EMAIL, subject, text);
}

/**
 * Modifies the proper placeholder values in the template email document.
 * @return the body of the message that applies to today
 */
function buildJournalRequestText() {
  var doc = DocumentApp.openById(TEMPLATE_DOC_ID);
  var text = doc.getBody().getText();
  text = text.replace(/<day_of_the_week>/g, getDayName(new Date().getDay()));
  return text;
}

/**
 * @return the subject line, with today's date
 */
function buildSubjectLine() {
  return 'Journal Entry for ' + new Date().toDateString();
}
