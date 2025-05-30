// Simulate Room Availability Check
// Simulate Room Availability Check
function checkRoomAvailability(roomType) {
    const statusElement = document.getElementById(`${roomType}-status`);
    const isAvailable = Math.random() > 0.5;

    if (isAvailable) {
        statusElement.textContent = "Available";
        statusElement.style.color = "green";
        enableBooking(roomType);
    } else {
        statusElement.textContent = "Not Available";
        statusElement.style.color = "red";
        disableBooking(roomType);
    }
}

// Enable booking for the selected room
function enableBooking(roomType) {
    const roomSelection = document.getElementById("room-selection");
    const bookNowButton = document.querySelector("#booking-form button");

    if (roomSelection.value === roomType) {
        bookNowButton.disabled = false;
    }
}

// Disable booking if no room is available
function disableBooking(roomType) {
    const roomSelection = document.getElementById("room-selection");
    const bookNowButton = document.querySelector("#booking-form button");

    if (roomSelection.value === roomType) {
        bookNowButton.disabled = true;
    }
}

// Monitor room selection to enable/disable the "Book Now" button
document.getElementById("room-selection").addEventListener("change", function() {
    const selectedRoom = this.value;
    const bookNowButton = document.querySelector("#booking-form button");
    const selectedRoomStatus = document.getElementById(`${selectedRoom}-status`);

    if (selectedRoomStatus && selectedRoomStatus.textContent === "Available") {
        bookNowButton.disabled = false;
    } else {
        bookNowButton.disabled = true;
    }
});

// Booking Form Submission
document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const room = document.getElementById("room-selection").value;

    if (!room) {
        alert("Please select a room.");
        return;
    }

    const roomStatus = document.getElementById(`${room}-status`).textContent;

    if (roomStatus !== "Available") {
        alert("The selected room is not available. Please choose another room.");
        return;
    }

    alert(`Thank you, ${name}! You have booked a ${room} from ${checkin} to ${checkout}. We will contact you at ${phone}.`);
});
