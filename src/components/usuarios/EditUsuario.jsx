import React, { useEffect } from 'react'
import useUsuarios from './useUsuarios'
import { useParams, withRouter } from 'react-router-dom'

const EditUsuario = (props) => {
    const { errors, user, obtenUser, handleChange, editSubmit } = useUsuarios()
    const { id } = useParams()

    useEffect(() => {
        const datos = async () => {
            await obtenUser(id)
        }
        datos()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const editar = async (id) => {
        await editSubmit(id)
        props.history.push('/usuarios')
    }

    return (
        <div className="row justify-content-md-center">
            <form>
                <h1 className="text-center">Editar Usuario</h1>
                <div className="form-group">
                    <input type="type" name="nombre" placeholder="Nombre" className="form-control" value={user.nombre} onChange={handleChange} />
                    {errors.nombre && <span className="text-danger">{errors.nombre}</span>}
                </div>
                <div className="form-group">
                    <input type="type" name="apellido" placeholder="Apellido" className="form-control" value={user.apellido} onChange={handleChange} />
                    {errors.apellido && <span className="text-danger">{errors.apellido}</span>}
                </div>
                <div className="form-group">
                    <input type="type" name="telefono" placeholder="Telefono" className="form-control" value={user.telefono} onChange={handleChange} />
                    {errors.telefono && <span className="text-danger">{errors.telefono}</span>}
                </div>
                <div className="form-group">
                    <input type="text" name="email" value={user.email} className="form-control" readOnly />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success btn-block" onClick={() => editar(user._id)}>Editar</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(EditUsuario)
