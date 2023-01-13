import { getLetters } from "./dataAccess.js";
import { getAuthors } from "./dataAccess.js";
import { getTopics } from "./dataAccess.js";

const letterBuilder = (letter) => {
   
    const authors = getAuthors()
    const topics = getTopics()

    const matchingAuthor = authors.find(
        (author) => {
            return author.id === parseInt(letter.authorId)
        }
    )

    const matchingRecipient = authors.find(
        (recipient) => {
            return recipient.id === parseInt(letter.recipientId)
        }
    )

    const matchingTopic = topics.find(
        (topic) => {
            return topic.id === parseInt(letter.topicId)
        }
    )

    //const dateString = letter.dateStamp.toLocaleDateString()

   return `<p>Dear,<br> 
            ${matchingRecipient.name}  (${matchingRecipient.email})<br><br>
            ${letter.topicBody}<br><br>
            Tpoic = ${matchingTopic.topic}<br><br>
            Sincerely,${matchingAuthor.name} (${matchingAuthor.email})<br>
            Sent on ${letter.dateStamp}
            </P>`

}

export const letters = () => {
    const letter = getLetters()

    let html = "<section>"

    const submittedLetter = letter.map(letterBuilder).join("")

    html += submittedLetter
    html += "</section>"
    return html

}