import React from 'react'
import useUsuarios from './useUsuarios'
import { withRouter } from 'react-router-dom'
import { alertBotones } from '../../service/alert'

const Usuarios = (props) => {
    const {  users, handleDelete, handleState } = useUsuarios()

    const handleEdit = async (id) => {
        const res = await alertBotones('¿Desea editar este usuario?', 'Editar')
        if(res) {
            props.history.push(`/usuarios/${id}`)
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Listado de Usuarios</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.email}</td>
                                <td>{user.telefono}</td>
                                <td>{user.rol}</td>
                                <td>
                                    <button className={user.state ? "btn btn-outline-success border-0 btn-sm" : "btn btn-outline-danger border-0 btn-sm"} onClick={() => handleState(user._id, user.state)}>
                                        {user.state ? <i className="fas fa-user-slash"> Bloquear</i> : <i className="far fa-user"> Activar</i>}
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger border-0 btn-sm" onClick={() => handleDelete(user._id)}>
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                    <button className="btn btn-outline-success border-0 btn-sm" onClick={() => handleEdit(user._id)}>
                                        <i className="fas fa-pen-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(Usuarios)
