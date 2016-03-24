# gJourney

gJourney is a short tool written in Google Script designed to effortlessly build your journal. By sending you an email each day, you have a reminder to write your experiences in your journal.

### Audience & Platform

The language for gJourney is GoogleScript, a language very similar to Javascript. Currently, gJourney doesn't have an interface that doesn't involve some code, but once you get it up and working, you don't have to change it at all. You are certainly welcome to, though. I built gJourney because I wanted extensibility I couldn't see in any other program.

If you don't want to deal with the code at all, there are simple instructions.

### Instructions

1. Create a new Gmail account for your journal. It will be helpful to stay logged in to this account for the entire process.
2. Copy the contents of my [gJourney Supplies](https://drive.google.com/drive/folders/0B-u_h3jqt0IUYk1uNzFVbXNpNkE) folder to "My Drive."
3. Modify the "Entry Request Template" file to your heart's content. This is the message that the journal program sends to you each day. If you want to add more form-fill items (like the date, or weather, or most popular song on the Billboard Top 40), edit the buildJournalRequestText() in EntryRequester.gs.
4. Create a new document for your journal. This will hold all your responses.
5. Modify "config.gs" in gJourney Scripts with different configuration settings.
  - "JOURNAL_PROGRAM_EMAIL" is the email you've just created. This is the email address that sends the emails requesting a journal entry.
  - "JOURNALERS_EMAIL" is the email you use on a daily basis. This is the email address that will be sent the journal entry requests.
  - "TEMPLATE_DOC_ID" is the unique identification tag for your email template document. You can find this by looking at the URL of the document. My URL is https://docs.google.com/document/d/13z4_0Tm-Y9oJ63EkAn88vSq-e1CVMg574k15pm2ARAc/edit - the ID is the alphanumeric part in the middle, from 13z to RAc.
  - "JOURNAL_DOC_ID" is the unique identification tag for your Google Docs journal. Look at the URL of the journal document you created in step 4 and find its tag. Set its value the same way you set the TEMPLATE_DOC_ID.
6. Create the timed triggers. Your emails won't send or process unless you set this up. Ensure you complete this step with your journaling program email, not the address you normally use.
  - In the Google Script toolbar, select the button that looks like a cross between a speech bubble and a clock. The popup dialog should say "Current project's triggers." Set up a new trigger for sending journaling requests by selecting the function as "sendJournalRequest" and the event as once per day. I send my journal requests at 11PM at night. Usually I don't answer them the same day; instead I answer them in the morning.
  - Create a second trigger for cleaning up all the emails you've sent. The function is handleNewEmails and I set it on a frequency of once an hour.
7. Respond to the emails as they come in.
8. Read your journal!

If you have problems, file an issue in the issue tracker. Because nothing else on my Github is "famous" yet, I'll be happy to help just because I know my code is helping someone else!
