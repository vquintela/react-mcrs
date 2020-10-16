import { useState, useEffect } from "react";
import { getUsers, deleteUser, stateUser, getUser, editUser } from '../../service/usuario';
import { alertSimple, alertBotones } from '../../service/alert';

const useUsuarios = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [change, setChange] = useState(true)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        async function obtenerUsers() {
            const usersList = await getUsers()
            setUsers(usersList)
        }
        obtenerUsers()
    }, [change])

    const handleChange = event => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleDelete = async (id) => {
        const res = await alertBotones('¿Desea eliminar este Usuario?', 'Eliminar')
        if(res) {
            const resp = await deleteUser(id)
            alertSimple(resp.message)
            setChange(!change)
        }
    }

    const obtenUser = async (id) => {
        const resp = await getUser(id)
        setUser(resp)
    }

    const editSubmit = async (id) => {
        const resp = await editUser(id, user)
        if(resp.type) {
            alertSimple(resp.message)
        } else {
            return setErrors(resp.message)
        }
    }

    const handleState = async (id, userState) => {
        const res = await alertBotones('¿Desea cambiar el estado?', 'Cambiar')
        if(res) {
            const resp = await stateUser(id, userState)
            alertSimple(resp.message)
            setChange(!change)
        }
    }

    return {
        user,
        users,
        errors,
        handleChange,
        handleDelete,
        obtenUser,
        handleState,
        editSubmit
    }
}

export default useUsuarios;