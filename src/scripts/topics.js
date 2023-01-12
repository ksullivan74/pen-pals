import { getTopics } from "./dataAccess.js";

export const topicsList = () => {
    const topics = getTopics()

    return`
        <ul>
            ${
                topics.map(
                    (topic) => {
                        return`<li>
                        <input type ="radio" name = "topic" id="${topic.id}"/>${topic.topic}</li>`
                    }
                ).join("")
            }
    `
}

// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.name === "topic") {
//             setTopic(parseInt(event.target.id))
//         }
//     }
// )