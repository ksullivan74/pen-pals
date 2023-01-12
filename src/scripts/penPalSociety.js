import { topicsList } from "./topics.js"
import { authorList } from "./authors.js"
import { submitButton } from "./submitLetter.js"
import { letterForm } from "./letter.js"
import { recipientList } from "./recipients.js"


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

    <h3>Submit</h3>
        <section>
        ${submitButton()}
        </section>

    `
}