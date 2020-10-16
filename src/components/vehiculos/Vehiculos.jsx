import React from 'react'
import useVehiculos from './useVehiculos'
import { withRouter } from 'react-router-dom'

const Vehiculos = (props) => {
    const { autos, handleState, handleDelete, handleEdit } = useVehiculos()

    const editar = async (id) => {
        await handleEdit(id)
        props.history.push('/addCar')
    }

    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div>
                    <h1 className="text-center">Listado de Vehiculos</h1>
                </div>
                <div className="ml-auto">
                    <button className="btn btn-success btn-sm" onClick={() => props.history.push('/addCar')}>
                        Ingresar Automovil
                    </button>
                </div>
            </div>
            <table className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Patente</th>
                        <th scope="col">Pasajeros</th>
                        <th scope="col">Puertas</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Transmicion</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autos.map((auto, index) => (
                            <tr key={auto._id}>
                                <td>{index + 1}</td>
                                <td>{auto.patente}</td>
                                <td>{auto.pasajeros}</td>
                                <td>{auto.puertas}</td>
                                <td>{auto.precio}</td>
                                <td>{auto.transmicion}</td>
                                <td>{auto.modelo}</td>
                                <td>{auto.marca}</td>
                                <td>
                                    <button className={auto.estado ? "btn btn-outline-success border-0 btn-sm" : "btn btn-outline-danger border-0 btn-sm"} onClick={() => handleState(auto._id, auto.estado)}>
                                        {auto.estado ? <i className="fas fa-user-slash"> Bloquear</i> : <i className="far fa-user"> Activar</i>}
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger border-0 btn-sm" onClick={() => handleDelete(auto._id)}>
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                    <button className="btn btn-outline-primary border-0 btn-sm" onClick={() => editar(auto._id)}>
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

export default withRouter(Vehiculos)
