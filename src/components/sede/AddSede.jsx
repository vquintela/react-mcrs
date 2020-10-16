import React from "react";

const AddSede = ({ handleChange, handleSubmit, sede, errors }) => {
    return (
        <form onSubmit={handleSubmit} noValidate>
            <span name="id" value={sede.id}></span>
            <h1 className="text-center">{sede.id ? `Editar Sede` : `Registrar Sede`}</h1>
            <div className="form-group">
                <input className="form-control" placeholder="Domicilio" name="domicilio" value={sede.domicilio} onChange={handleChange} />
                {errors.domicilio && <span className="text-danger">{errors.domicilio}</span>}
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Codigo Postal" name="codigoPostal" value={sede.codigoPostal} onChange={handleChange} />
                {errors.codigoPostal && <span className="text-danger">{errors.codigoPostal}</span>}
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Ciudad" name="ciudad" value={sede.ciudad} onChange={handleChange} />
                {errors.ciudad && <span className="text-danger">{errors.ciudad}</span>}
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Provincia" name="provincia" value={sede.provincia} onChange={handleChange} />
                {errors.provincia && <span className="text-danger">{errors.provincia}</span>}
            </div>
            <div className="form-group">
                <button className="btn btn-block btn-success" type="submit" >
                    {sede.id ? `Editar` : `Registrar`}
                </button>
            </div>
        </form>
    )
}

export default AddSede