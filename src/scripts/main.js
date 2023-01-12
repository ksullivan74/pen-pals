import { penPalSociety } from "./penPalSociety.js"
import { fetchAuthors, fetchTopics } from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchTopics()
    .then(
        () => fetchAuthors()
    )
    .then(
        () => {mainContainer.innerHTML = penPalSociety()}
    )
}

render()

document.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)