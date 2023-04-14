import axios from 'axios'
 const baseUrl = 'http://localhost:3002/api/recipes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getFeatured = () => {
    const request = axios.get(baseUrl + '/featured')
    return request.then(response => response.data)
}

const getById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const getByCategory = async (id) => {
    const response = await axios.get(`${baseUrl}/category/${id}`)
    return response.data
}

const search = (query) => {
    let q = {}
    if (query.m > 0 && query.m !== 'undefined')
        q["m"] = query.m

    if (query.c > 0 && query.c !== 'undefined')
        q["c"] = query.c

    if (query.ingredients !== null && query.ingredients !== undefined)
        q["ingredients"] = query.ingredients

    if (query.time > 0 && query.time < 90)
        q["time"] = query.time
        
    if (query.v === 'true')
        q["v"] = query.v

    if (query.g === 'true')
        q["g"] = query.g

    if (query.veg === 'true')
        q["veg"] = query.veg

    if (query.a === 'true')
        q["a"] = query.a

    const request = axios.get(baseUrl + '/search', { params: q })
    return request.then(response => response.data)
}

export default { getAll, getFeatured, getById, search, getByCategory }