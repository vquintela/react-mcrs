import React from "react";
import AddSede from './AddSede'
import ListSedes from './ListSedes'
import useSede from './useSede';

const Sede = () => {
    const { sedes, handleChange, handleSubmit, sede, handleDelete, obtenSede, errors } = useSede();

    return (
        <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <AddSede handleChange={handleChange} handleSubmit={handleSubmit} sede={sede} errors={errors}/>
                </div>
                <div className="col-md-8">
                    <ListSedes sedes={sedes} handleDelete={handleDelete} obtenSede={obtenSede} />
                </div>
            </div>
        </div>
    )
}
 
export default Sede;