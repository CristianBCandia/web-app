import axios from 'axios'

export const doGet = async (url) => {
    const response = await axios.get(url)
    return response.data
}

export const doPost = async (url, body) => {
    const response = await axios.post(url, body)
    return response
}

export const doDelete = async (url) => {
    const response = await axios.delete(url)
    return response
}