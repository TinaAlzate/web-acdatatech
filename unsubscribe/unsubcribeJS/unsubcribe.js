const conatinerMain = document.querySelector('.conatinerUnsubscribe')
const modalRequest = document.querySelector('.modalHidden')
const buttonModal = document.querySelector('.closeModal')
const spinnerModal = document.querySelector('.sppiner')

const unsubscribeCallback = (evento) => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const { token } = params
  fechingUnsubcribe(token)
  evento.target.setAttribute('disabled', '')
}

document.getElementById('bajaACdatatech').addEventListener('click', unsubscribeCallback)

const API_AC = 'http://localhost:3003/admin/client/unsubcribe'

const fechingUnsubcribe = (token) => {
  conatinerMain.classList.add('opacity-50')
  spinnerModal.classList.remove('hidden')
  fetch(API_AC, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      if (response.ok) {
        activeModal('Response ok usuario eliminado!!')
      }
    })
    .catch((error) => {
      console.log('Error ❌ ', error)
      activeModal('No encontrado!!')
    })
}

const activeModal = (text) => {
  conatinerMain.classList.add('opacity-50')
  modalRequest.classList.remove('hidden')
  const sectionModal = document.querySelectorAll('section')
  console.log(sectionModal)
  sectionModal[0].children[0].innerText = text
  spinnerModal.classList.add('hidden')
}

buttonModal.addEventListener('click', () => {
  conatinerMain.classList.remove('opacity-50')
  modalRequest.classList.add('hidden')
})
