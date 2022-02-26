const axios = require('axios');

async function Login(name) {
    const response = await axios.get("/users", {name});
    return response.data;
}

async function Register(name) {
    const response = await axios.post("/users", {name});
    return response.data;
}