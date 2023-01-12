import { getAuthors, setAuthor } from "./dataAccess.js";

export const authorList = () => {
    const authors = getAuthors()

    return`
    <select class = "author" name="author" id = "author">
    <option value="0">Choose Author</option>
        ${authors.map(
            (author) => {
                return`
                <option value="${author.id}" >${author.name}</option>
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
//         if (event.target.id === "author") {
//             const[,authorId] = event.target.value.split("--")
//             setAuthor(authorId)
//         }
//     }
// )