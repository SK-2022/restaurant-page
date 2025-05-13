
export function createReservationForms() {
    
    const mainContainer = document.getElementById("content")
    const reservePageButton = document.getElementById('reserve')

    reservePageButton.addEventListener('click', function() {

        const formHTML = `  
        
        <form action="/submit-reservation" method="POST">

        <label for="restaurant">Choose a restaurant:</label>
        <select id="restaurant" name="restaurant" required>
          <option value="">--Select--</option>
          <option value="A">Restaurant A</option>
          <option value="B">Restaurant B</option>
        </select>
      
       
        <label for="date">Reservation Date:</label>
        <input type="date" id="date" name="date" required>
      
        <label for="time">Reservation Time:</label>
        <select id="time" name="time" required>
          <option value="">--Select Time--</option>
          <option value="12:00">12:00 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
        </select>
      

        <label for="people">Number of People:</label>
        <input type="number" id="people" name="people" min="1" max="20" required>
      

        <button type="submit">Book Table</button>
      </form>`;

      mainContainer.innerHTML = formHTML
    })
}
