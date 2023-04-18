import axios from 'axios'
const baseUrl = `${window.env.API_BASE_URL}/category`

const getById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

export default { getById }