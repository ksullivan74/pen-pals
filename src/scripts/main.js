import { penPalSociety } from "./penPalSociety.js"
import { fetchAuthors, fetchTopics, fetchLetters } from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchTopics()
    .then(
        () => fetchAuthors()
    )
    .then (
        () => fetchLetters()
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