document.addEventListener("DOMContentLoaded", () => {
    const fadeinElement = document.querySelector(".fadein");
  
    fadeinElement.style.opacity = "0";
  
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
  
    fadeIn(fadeinElement);
  });
  const imageLinks = document.querySelectorAll(".image-link");
  
  imageLinks.forEach((link) => {
    link.addEventListener("mouseenter", addAnimation);
    link.addEventListener("mouseleave", removeAnimation);
  });
  
  function addAnimation(event) {
    const image = event.target.querySelector("img");
    image.style.transform = "scale(1.1)";
  }
  
  function removeAnimation(event) {
    const image = event.target.querySelector("img");
    image.style.transform = "scale(1)";
  }
  