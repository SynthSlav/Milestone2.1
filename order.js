document.addEventListener("DOMContentLoaded", () => {
    const menuSection = document.querySelector(".main");
  
    menuSection.style.opacity = "0";
  
    function fadeIn(element) {
      let opacity = 0;
      const interval = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(interval);
        }
      }, 50);
    }
  
    fadeIn(menuSection);
  });
  
  const bookingForm = document.getElementById("booking-form");
  const bookingConfirmation = document.getElementById("booking-confirmation");
  
  bookingForm.style.maxWidth = "600px";
  bookingForm.style.margin = "0 auto";
  bookingForm.style.padding = "2rem";
  bookingForm.style.backgroundColor = "var(--clr-grey-10)";
  bookingForm.style.borderRadius = "var(--radius)";
  bookingForm.style.boxShadow = "var(--light-shadow)";
  
  const formElements = bookingForm.querySelectorAll("input, button");
  formElements.forEach((element) => {
    element.style.padding = "0.5rem";
  });
  const submitButton = bookingForm.querySelector("button");
  submitButton.style.backgroundColor = "var(--clr-primary-5)";
  submitButton.style.color = "var(--clr-white)";
  submitButton.style.border = "none";
  submitButton.style.borderRadius = "4px";
  submitButton.style.cursor = "pointer";
  
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
  
    const confirmationMessage = `Booking for ${name} on ${date}, at ${time} for ${people} confirmed.</br> An email has been sent to ${email}`;
  
    bookingConfirmation.textContent = confirmationMessage;
  
    bookingForm.reset();
  });
  
  function initMap() {
  
    var macc = {lat: 52.69082, lng: -2.02252};
  
    var map = new google.maps.Map(
  
        document.getElementById('map'), {zoom: 15, center: macc});
  
    var marker = new google.maps.Marker({position: macc, map: map});
  }