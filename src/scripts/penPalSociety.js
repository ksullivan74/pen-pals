import { topicsList } from "./topics.js"
import { authorList } from "./authors.js"
import { submitButton } from "./submitLetter.js"
import { letterForm } from "./letter.js"
import { recipientList } from "./recipients.js"
import { letters } from "./submittedLetters.js"


export const penPalSociety = () => {
    return `
    <h1>Pen Pals Society</h1>

    <h2>Author</h2>
        <section>
        ${authorList()}
        </section>

    <h2>Letter</h2>
        <section>
        ${letterForm()}
        </section>

    <h2>Topics</h2>
        <section>
        ${topicsList()}
        </section>

    <h2>Recipient</h2>
        <section>
        ${recipientList()}
        </section>
        <br>
    
        <section>
        ${submitButton()}
        </section>

    <h3>Sent Letters</h3>
        <section>
        ${letters()}
        </section>    

    `
}