import axios from "axios";

const baseUrl = 'http://localhost:4000/api/test';

const api = axios.create({
    baseURL:baseUrl
});

// calling a apis
const fetchData = async ()=>{
 const data = await api.get('/user');
 return data;
};

export {
    fetchData
}
