import api from "./api"

export const getWords = async () => {
    const response = await api.get('words')
    return response.data
}

export const updateWord = async (word) => {
    const response = await api.put(`words/${word.id}`, word)
    return response.data
}

export const addWord = async (word) => {
    const response = await api.post('wors', word)
    return response.data
}

export const deleteWord = async (id) => {
    const response = await api.delete(`words/${id}`, id)
    return response.data
}