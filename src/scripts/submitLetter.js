import { sendLetter } from "./dataAccess.js"


export const submitButton = () => {
    return`
    <button class="button" id="submitLetter">Submit Letter</button>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitLetter") {
        const userAuthorId = document.querySelector("select[name='author']").value
        const userRecipientId = document.querySelector("select[name='recipient']").value
        const userTopicId = document.querySelector("input[name='topic']:checked").id
        const letterContent = document.querySelector("textarea[name='letterContent']").value
        const dateSent = Date.now()

        const letter = {
            authorId: userAuthorId,
            recipientId: userRecipientId,
            topicId: userTopicId,
            topicBody: letterContent,
            dateStamp: dateSent
        }

        sendLetter(letter)

    }
}
)