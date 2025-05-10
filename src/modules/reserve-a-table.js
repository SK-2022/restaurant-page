
export function createReservationForms() {
    
    const mainContainer = document.getElementById("content")

    const bookTableTitleContainer = document.createElement('div')
    bookTableTitleContainer.classList.add('book-table-title-container')
    mainContainer.appendChild(bookTableTitleContainer)
    
    const bookTableTitleText = document.createElement('p')
    bookTableTitleText.classList.add('book-table-title-text')
    bookTableTitleText.textContent = 'Reserve a table'
    bookTableTitleContainer.appendChild(bookTableTitleText)

    const reservationForm = document.createElement('form')
    reservationForm.classList.add('reservationForm')
    reservationForm.setAttribute('action' , '/submit-reservation') // the '/submit-reservation' can be any endpoint you want.
    reservationForm.setAttribute('method', 'POST') //Could also be 'GET'
    reservationForm.classList.add('reservation-form-style')
}
