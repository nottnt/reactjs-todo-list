import axios from 'axios';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

const config = {
    apiUrl: 'http://localhost:3000'
}

export const getToDoList = async () => {
    const result = await axios.get(`${config.apiUrl}/to-do-list`);

    return result
}

export const createToDoList = async (body) => {
    const result = await axios.post(`${config.apiUrl}/to-do-list`, body);

    return result
}

export const updateToDoList = async (body) => {
    const result = await axios.put(`${config.apiUrl}/to-do-list`, body);

    return result
}

export const deleteToDoList = async (id) => {
    const result = await axios.delete(`${config.apiUrl}/to-do-list/${id}`);

    return result
}