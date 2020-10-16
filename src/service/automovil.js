const baseUrl = 'http://localhost:3000/'

export const getAutos = async () => {
    try {
        const autosJSON = await fetch(`${baseUrl}cars`, { 
            method: 'GET',
            // headers: { "x-auth-token": token } 
        });
        const autos = JSON.parse(await autosJSON.text());
        return autos
    } catch (error) {
        console.log(error)
    }
}

export const addAuto = async (auto, imgAuto) => {
    try {
        const data = new FormData()
        data.append('patente', auto.patente)
        data.append('pasajeros', auto.pasajeros)
        data.append('puertas', auto.puertas)
        data.append('precio', auto.precio)
        data.append('transmicion', auto.transmicion)
        data.append('descripcion', auto.descripcion)
        data.append('modelo', auto.modelo)
        data.append('marca', auto.marca)
        if(imgAuto) data.append('imagen', imgAuto)
        const text = await fetch(`${baseUrl}cars/addCar`, {
            method: 'POST',
            body: data
        })
        const mensaje = JSON.parse(await text.text());
        return mensaje
    } catch (error) {
        console.log(error)
    }
}

export const delAuto = async (id) => {
    try {
        const res = await fetch(`${baseUrl}cars/delete/${id}`, {
            method: 'DELETE'
        })
        const mensaje = JSON.parse(await res.text())
        return mensaje
    } catch (error) {
        console.log(error)
    }
}

export const stateAuto = async (id, estado) => {
    try {
        const res = await fetch(`${baseUrl}cars/state/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({estado})
        })
        return JSON.parse(await res.text())
    } catch (error) {
        console.log(error)
    }
}

export const getAuto = async (id) => {
    try {
        const res = await fetch(`${baseUrl}cars/getCar/${id}`, {
            method: 'GET'
        })
        return JSON.parse(await res.text())
    } catch (error) {
        console.log(error)
    }
}