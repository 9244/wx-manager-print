import axios from  'axios'

const service = axios.create({
    baseURL: 'http:localhost:8081',
    timeout: 50000
})

export default service