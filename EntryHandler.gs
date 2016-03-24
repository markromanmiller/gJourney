/**
 * Handle all the new email in the inbox.
 */
function handleNewEmails() {
  var regExp = new RegExp("[^<\\s]+@[^>\\s]+");
  var threads = GmailApp.getInboxThreads()
  for (var t = 0; t < threads.length; t++) {
    var messages = threads[t].getMessages()
    for (var m = 0; m < messages.length; m++) {
      var from = regExp.exec(messages[m].getFrom())[0]
      if (from == JOURNAL_PROGRAM_EMAIL) { // if it's something the program sent, ignore it.
        // do nothing
      } else if (from == JOURNALERS_EMAIL) { // if it's from your own email, add it as an entry.
        threads[t].addLabel(GmailApp.getUserLabelByName("Journal"));
        handleJournalEntry(messages[m]);
      } else {
        handleUnwantedEmail(messages[m]);
      }
    }
    threads[t].markRead()
    threads[t].moveToArchive()
  }
}

/**
 * Handle other mail coming to your journal-specific email account.
 * @param message the Gmail message being processed. 
 * You may want to forward it to your main account.
 */
function handleUnwantedEmail(message) {
  // pass
}

/**
 * We know this email is a journal entry, now add it to the document.
 * @param message the entry message.
 */
function handleJournalEntry(message) {
  var doc = DocumentApp.openById(JOURNAL_DOC_ID);
  var date = parseEntryDate(message.getSubject());
  addHeaders(doc, date);
  var body = message.getPlainBody();
  var trimmed = body.replace(/\r\n/g, "\n");
  addEntry(doc, date, trimmed);
}

/**
 * Use the subject line to get the day I'm writing about
 * @param subject The subject line.
 * Right now, this just parses the last four words of the subject line
 * for the date. This works well with my default subject line.
 */
function parseEntryDate(subject) {
  return new Date(subject.split(' ').slice(-4).join(' '));
}

/**
 * We've extracted all the data; now, add it to the Google Doc
 * @param doc Handle to the journal Google Document
 * @param date Date of the entry, as a Date() element
 * @param body The text of the entry to be added to the journal.
 */
function addEntry(doc, date, body) {
  var dateTitle = doc.appendParagraph(date.toDateString());
  dateTitle.setHeading(DocumentApp.ParagraphHeading.HEADING4)
  doc.appendParagraph(body);
}
