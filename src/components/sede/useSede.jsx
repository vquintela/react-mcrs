import { useState, useEffect } from "react";
import { addSede, getSedes, deleteSede, getSede, editSede } from '../../service/sede';
import { alertSimple, alertBotones } from '../../service/alert'

const useSede = () => {
    const [sede, setSede] = useState({id: '', domicilio: '', codigoPostal: '', ciudad: '', provincia: ''});
    const [errors, setErrors] = useState({})
    const [sedes, setSedes] = useState([]);
    const [change, setChange] = useState(true)

    const handleChange = event => {
        const { name, value } = event.target;
        setSede({
          ...sede,
          [name]: value
        });
    };

    useEffect(() => {
        async function obtenerSedes() {
            const sedesList = await getSedes()
            setSedes(sedesList)
        }
        obtenerSedes()
    }, [change])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(sede.id === '') {
            const resp = await addSede(sede)
            if(resp.type) {
                alertSimple(resp.message)
            } else {
                return setErrors(resp.message)
            }
        } else {
            const resp = await editSede(sede.id, sede)
            alertSimple(resp.message)
        }
        setSede({id: '', domicilio: '', codigoPostal: '', ciudad: '', provincia: ''});
        setErrors({})
        setChange(!change)
    };

    const handleDelete = async (id) => {
        const res = await alertBotones('¿Desea eliminar esta sede?', 'Eliminar')
        if(res) {
            const resp = await deleteSede(id)
            alertSimple(resp.message)
            setChange(!change)
        }
    }

    const obtenSede = async (id) => {
        const res = await alertBotones('¿Desea editar esta sede?', 'Editar')
        if(res) {
            const editSede = await getSede(id)
            const {_id, domicilio, codigoPostal, ciudad, provincia} = editSede
            setSede({id: _id, domicilio, codigoPostal, ciudad, provincia});
        }
    }

    return {
        obtenSede,
        handleDelete,
        handleChange,
        handleSubmit,
        sede,
        sedes,
        errors
    }
}

export default useSede;