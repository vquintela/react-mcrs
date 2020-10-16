import React from "react";

const Sedes = ({sedes, handleDelete, obtenSede}) => {
    return (
        < >
            <h1 className="text-center">Listado de sedes</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Codigo Postal</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sedes.map((sede, index) => (
                            <tr key={sede._id}>
                                <td>{index + 1}</td>
                                <td>{sede.domicilio}</td>
                                <td>{sede.codigoPostal}</td>
                                <td>{sede.ciudad}</td>
                                <td>{sede.provincia}</td>
                                <td>
                                    <button className="btn btn-outline-danger border-0 btn-sm" onClick={() => handleDelete(sede._id)}>
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                    <button className="btn btn-outline-success border-0 btn-sm" onClick={() => obtenSede(sede._id)}>
                                        <i className="fas fa-pen-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </ >
    )
}
 
export default Sedes;