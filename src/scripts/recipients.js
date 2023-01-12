import { getAuthors, setRecipient } from "./dataAccess.js";

export const recipientList = () => {
    const recipient = getAuthors()

    return`
    <select class = "recipient" name="recipient" id = "recipient">
    <option value="0">Choose Recipient</option>
        ${recipient.map(
            (recipient) => {
                return`
                <option value="${recipient.id}">${recipient.name}</option>
                `
            }    
            )
        }
    </select>
    `
}


// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "recipient") {
//             const[,recipientId] = event.target.value.split("--")
//             setRecipient(recipientId)
//         }
//     }
// )