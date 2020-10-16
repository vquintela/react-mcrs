import { useEffect, useState} from 'react'
import { getAutos, addAuto, delAuto, stateAuto, getAuto } from '../../service/automovil'
import { alertSimple, alertBotones } from '../../service/alert'

const useVehiculos = (props) => {
    const [change, setChange] = useState(false)
    const [errors, setErrors] = useState({})
    const [autos, setAutos] = useState([])
    const [imgAuto, setImgAuto] = useState(null)
    const [imagen, setImagen] = useState(null)
    const [auto, setAuto] = useState({
        id: '',
        patente: '',
        pasajeros: '',
        puertas: '',
        precio: '',
        transmicion: '',
        descripcion: '',
        modelo: '',
        marca: ''
    })

    useEffect(() =>{
        const obtenerAutos = async () => {
            const autos = await getAutos()
            setAutos(autos)
        }
        obtenerAutos()
    }, [change])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await addAuto(auto, imgAuto)
        if(res.type) {
            alertSimple(res.message)
        } else {
            return setErrors(res.message)
        }
        setAuto({
            id: '',
            patente: '',
            pasajeros: '',
            puertas: '',
            precio: '',
            transmicion: '',
            descripcion: '',
            modelo: '',
            marca: ''
        });
        setErrors({})
        setChange(!change)
        setImgAuto(null)
        setImagen(null)
    }

    const handleChange = event => {
        const { name, value } = event.target
        setAuto({
            ...auto,
            [name]: value
        })
    }

    const handleChangeImg = event => {
        setImagen(URL.createObjectURL(event.target.files[0]))
        setImgAuto(event.target.files[0])
    }

    const handleEdit = async (id) => {
        const accion = await alertBotones('¿Desea editar este auto?', 'Editar Auto')
        if(accion) {
            const res = await getAuto(id)
            console.log(res)
            setAuto(res)
        }
    }

    const handleState = async (id, estado) => {
        const accion = await alertBotones('¿Desea cambiar el estado?', 'Cambiar estado')
        if(accion) {
            const res = await stateAuto(id, estado)
            alertSimple(res.message)
            setChange(!change)
        }
    }

    const handleDelete = async (id) => {
        const accion = await alertBotones('¿Desea eliminar el vehiculo?', 'Eliminar')
        if(accion) {
            const res = await delAuto(id)
            alertSimple(res.message)
            setChange(!change)
        }
    }

    return {
        auto,
        imagen,
        autos,
        errors,
        handleSubmit,
        handleChange,
        handleChangeImg,
        handleState,
        handleDelete,
        handleEdit
    }
}

export default useVehiculos
