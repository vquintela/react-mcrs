import Swal from 'sweetalert2'

export const alertSimple = titulo => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: titulo,
        showConfirmButton: false,
        timer: 1500
    })
}

export const alertBotones = async (texto, accion) => {
    const res = await Swal.fire({
        title: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: accion
    })
    return res.value
}