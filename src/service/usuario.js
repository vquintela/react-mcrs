const baseUrl = 'http://localhost:3000/'
const token = localStorage.getItem('token')

export const addUser = async (user) => {
    try {
        const res = await fetch(`${baseUrl}users/signup`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) 
        });
        const resp = JSON.parse(await res.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = async () => {
    try {
        const res = await fetch(`${baseUrl}users/todos`, {
            method: 'GET',
            headers: { "x-auth-token": token }
        });
        const resp = JSON.parse(await res.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id) => {
    try {
        const userJSON = await fetch(`${baseUrl}users/delete/${id}`, {
            method: 'DELETE',
            headers: { "x-auth-token": token } 
        });
        const resp = JSON.parse(await userJSON.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const stateUser = async (id, state) => {
    try {
        const body = { state }
        const userJSON = JSON.stringify(body);
        const add = await fetch(`${baseUrl}users/estado/${id}`, {
            method: 'PUT',
            headers: { 
                "x-auth-token": token,
                'Content-Type': 'application/json'
            },
            body: userJSON
        });
        const resp = JSON.parse(await add.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (id) => {
    try {
        const res = await fetch(`${baseUrl}users/obtener/${id}`, {
            method: 'GET',
            headers: { "x-auth-token": token }
        });
        const resp = JSON.parse(await res.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const editUser = async (id, user) => {
    try {
        const res = await fetch(`${baseUrl}users/editar/${id}`, {
            method: 'POST',
            headers: { 
                "x-auth-token": token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const resp = JSON.parse(await res.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (user) => {
    try {
        const res = await fetch(`${baseUrl}users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const resp = JSON.parse(await res.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export const checkLoggedIn = async (tokenUser) => {
    const tokenRes = await fetch('http://localhost:3000/users/tokenIsValid', { 
        method: 'POST',
        headers: { "x-auth-token": tokenUser }
    }
    );
    const resp = JSON.parse(await tokenRes.text());
    console.log(resp)
    if (resp) {
        const userRes = await fetch("http://localhost:3000/users", {
            method: 'GET',
            headers: { "x-auth-token": token }
        });
        const res = JSON.parse(await userRes.text());
        return({ user: res });
    } 
    console.log(resp)
    return resp
};