import React from 'react'
import useAuth from './useAuth';

const Signup = () => {
    const { handleSubmit, handleChange, user, errors} = useAuth()

    return (
        <div className="container mt-4">
            <div className="row justify-content-md-center">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>Registro</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="type" name="nombre" placeholder="Nombre" className="form-control" value={user.nombre} onChange={handleChange}/>
                                    {errors.nombre && <span className="text-danger">{errors.nombre}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="type" name="apellido" placeholder="Apellido" className="form-control" value={user.apellido} onChange={handleChange}/>
                                    {errors.apellido && <span className="text-danger">{errors.apellido}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="type" name="telefono" placeholder="Telefono" className="form-control" value={user.telefono} onChange={handleChange}/>
                                    {errors.telefono && <span className="text-danger">{errors.telefono}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Email" className="form-control" value={user.email} onChange={handleChange}/>
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" placeholder="Password" className="form-control" value={user.password} onChange={handleChange}/>
                                    {errors.password && <span className="text-danger">{errors.password}</span>}
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-block">Registrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup
