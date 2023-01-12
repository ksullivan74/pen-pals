const applicationState = {
    authors: [],
    topics: [],
    letters: []
}

// const letterBuilder = {}
// const letter = {
//     id: 1,
//     topicBody: "",
//     dateSent: 1673392596256,
//     authorId: "",
//     recipientId: ""
// }

const API = "http://localhost:8088"

// TOPICS

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then (response => response.json())
    .then(
        (topics) => {
            applicationState.topics = topics
        }
    )
}

export const getTopics = () => {
    return applicationState.topics.map(topics => ({...topics}))
}

// AUTHORS

export const fetchAuthors = () => {
    return fetch (`${API}/authors`)
    .then (response => response.json())
    .then(
        (authors) => {
            applicationState.authors = authors
        }
    )
}


export const getAuthors = () => {
    return applicationState.authors.map(authors => ({...authors}))
}

// LETTERS

export const sendLetter = (letter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body :JSON.stringify(letter)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then (response => response.json())
    .then (
        (letters) => {
            applicationState.letters = letters
        }
    )
    .then(
        () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

// LETTER BUILDER

// sets the temporary state for the author chosen
export const setAuthor = (id) => {
     const authorId = id
     return authorId
}

export const setRecipient = (id) => {
    const recipientId = id
    return recipientId
}

export const setTopic = (id) => {
    const topicId = id
    return topicId
}

// export const addLetter = () => {
//     // Copy the current state of user choices
//      const newLetter = {letterBuilder}
//     // Add a new primary key to the object
//      const lastIndex = letter.length -1
//      newLetter.id = letter[lastIndex].id +1
//     // Add a timestamp to the letter
//     newLetter.timeStamp = Date.now()
//     // Add the new letter object to custom orders state
//     letter.push(newLetter)
//     // Reset the temporary state for user choices
//     letter = {}
//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChnaged"))
// }