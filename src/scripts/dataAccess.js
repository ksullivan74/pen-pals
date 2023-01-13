const applicationState = {
    authors: [],
    topics: [],
    letters: []
}


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

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then (response => response.json())
    .then(
        (letters) => {
            applicationState.letters = letters
        }
    )
}

export const getLetters = () => {
    return applicationState.letters.map(letters => ({...letters}))
}

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

