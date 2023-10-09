import Swal from 'sweetalert2'

export const errorResponse = () => {
  return Swal.fire({
    icon: 'error',
    title: 'No se puedo enviar la solicitud',
    text: 'Por favor inténtalo nuevamente.',
    showConfirmButton: false
  })
}

export const doneResponse = () => {
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Solicitud enviada',
    text: 'Nos pondremos en contacto en breve.',
    showConfirmButton: false,
    timer: 2000
  })
}
