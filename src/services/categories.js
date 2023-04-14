import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/category'

const getById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

export default { getById }