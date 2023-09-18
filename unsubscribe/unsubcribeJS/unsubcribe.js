document.getElementById('bajaACdatatech').addEventListener('click', () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const { token } = params
  console.log(token)
  fechingUnsubcribe(token)
})

const API_AC = 'http://localhost:3003/admin/client/unsubcribe'

const fechingUnsubcribe = (token) => {
  fetch(API_AC, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      console.log('Response 👍🏽', response)
    })
    .catch((error) => {
      console.log('Error ❌ ', error)
    })
}
