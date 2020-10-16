import React from 'react'
import useVehiculos from './useVehiculos'

const AddVehiculo = () => {
    const { auto, imagen, handleChangeImg, handleSubmit, handleChange, errors } = useVehiculos()

    return (
        <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} noValidate>
                        <span name="id" value={auto.id}></span>
                        <h1 className="text-center">{auto.id ? `Editar Automovil` : `Registrar Automovil`}</h1>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Patente" name="patente" value={auto.patente} onChange={handleChange} />
                            {errors.patente && <span className="text-danger">{errors.patente}</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Pasajeros" name="pasajeros" value={auto.pasajeros} onChange={handleChange} />
                            {errors.pasajeros && <span className="text-danger">{errors.pasajeros}</span>}
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Puertas" name="puertas" value={auto.puertas} onChange={handleChange} />
                            {errors.puertas && <span className="text-danger">{errors.puertas}</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Precio" name="precio" value={auto.precio} onChange={handleChange} />
                            {errors.precio && <span className="text-danger">{errors.precio}</span>}
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="transmicion" value={auto.transmicion} onChange={handleChange}>
                                <option>Transmicion</option>
                                <option>manual</option>
                                <option>automatica</option>
                            </select>
                            {errors.transmicion && <span className="text-danger">{errors.transmicion}</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Descripcion" name="descripcion" value={auto.descripcion} onChange={handleChange} />
                            {errors.descripcion && <span className="text-danger">{errors.descripcion}</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Modelo" name="modelo" value={auto.modelo} onChange={handleChange} />
                            {errors.modelo && <span className="text-danger">{errors.modelo}</span>}
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="marca" value={auto.marca} onChange={handleChange}>
                                <option>Marca</option>
                                <option>fiat</option>
                                <option>chevrolet</option>
                                <option>ford</option>
                            </select>
                            {errors.marca && <span className="text-danger">{errors.marca}</span>}
                        </div>
                        <div className="form-group">
                            <input type="file" name="imagen" className="form-control-file" onChange={handleChangeImg} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-block btn-success" type="submit">
                                {auto.id ? `Editar` : `Registrar`}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    {/* {
                        imagen != null ? <img src={imagen} alt="" className="img-fluid"/> : 'Inserte una imagen'
                    }    */}
                    <div className="card">
                        {
                            imagen ? <img className="card-img-top" src={imagen} alt="" /> : 'Inserte una imagen'
                        }
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVehiculo