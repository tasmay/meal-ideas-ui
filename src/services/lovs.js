import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/lovs'

const getMealsList = () => {
    const request = axios.get(baseUrl + '/meals')
    return request.then(response => response.data)
}

const getCuisinesList = () => {
    const request = axios.get(baseUrl + '/cuisines')
    return request.then(response => response.data)
}

const getIngredientsList = () => {
    const request = axios.get(baseUrl + '/ingredients')
    return request.then(response => response.data)
}

export default { getMealsList, getCuisinesList, getIngredientsList }