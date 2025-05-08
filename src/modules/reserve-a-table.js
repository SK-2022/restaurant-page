
export function createReservationForms() {
    
    const mainContainer = document.getElementById("content")

    const bookTableTitleContainer = document.createElement('div')
    bookTableTitleContainer.classList.add('book-table-title-container')
    mainContainer.appendChild(bookTableTitleContainer)
    
    const bookTableTitleText = document.createElement('p')
    bookTableTitleText.classList.add('book-table-title-text')
    bookTableTitleText.textContent = 'Reserve a table'
    bookTableTitleContainer.appendChild(bookTableTitleText)

}
