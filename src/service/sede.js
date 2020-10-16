const baseUrl = 'http://localhost:3000/'
const token = localStorage.getItem('token')

export async function getSedes() {
    try {
        const sedesJSON = await fetch(`${baseUrl}sedes`, { 
            method: 'GET',
            headers: { "x-auth-token": token } 
        });
        const sedesList = JSON.parse(await sedesJSON.text());
        return sedesList
    } catch (error) {
        console.log(error)
    }
}

export async function addSede(sede) {
    try {
        const sedesJSON = await fetch(`${baseUrl}sedes/crear`, { 
            method: 'POST',
            headers: {
                "x-auth-token": token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sede) 
        });
        const sedesList = JSON.parse(await sedesJSON.text());
        return sedesList
    } catch (error) {
        console.log(error)
    }
}

export async function deleteSede(id) {
    try {
        const sedesJSON = await fetch(`${baseUrl}sedes/delete/${id}`, { 
            method: 'DELETE', 
            headers: { "x-auth-token": token }
        });
        const resp = JSON.parse(await sedesJSON.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}

export async function getSede(id) {
    try {
        const sedeJSON = await fetch(`${baseUrl}sedes/obtener/${id}`, { 
            method: 'GET',
            headers: { "x-auth-token": token }
        });
        const sede = JSON.parse(await sedeJSON.text());
        return sede
    } catch (error) {
        console.log(error)
    }
}

export async function editSede(id, sede) {
    try {
        const sedeJSON = await fetch(`${baseUrl}sedes/actualizar/${id}`, { 
            method: 'PUT', 
            headers: {
                "x-auth-token": token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sede) 
        });
        const resp = JSON.parse(await sedeJSON.text());
        return resp
    } catch (error) {
        console.log(error)
    }
}