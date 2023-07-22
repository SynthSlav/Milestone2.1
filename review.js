const reviewForm = document.getElementById("review-form");
const reviewList = document.getElementById("review-list");
const starRating = document.querySelectorAll(".star-rating i");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const rating = getSelectedRating();
  const comment = document.getElementById("comment").value;

  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <p class="name">Name: ${name}</p>
    <p>Email: ${email}</p>
    <div class="rating">
      Rating: ${getStarRating(rating)}
    </div>
    <p class="comment">${comment}</p>
  `;

  reviewList.appendChild(reviewElement);

  reviewForm.reset();
  removeActiveStars();
});

starRating.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-rating");
    removeActiveStars();
    setActiveStars(rating);
    document.getElementById("rating").value = rating;
  });
});

function removeActiveStars() {
  starRating.forEach((star) => {
    star.classList.remove("active");
  });
}

function setActiveStars(rating) {
  starRating.forEach((star) => {
    if (star.getAttribute("data-rating") <= rating) {
      star.classList.add("active");
    }
  });
}

function getSelectedRating() {
  let selectedRating = 0;
  starRating.forEach((star) => {
    if (star.classList.contains("active")) {
      selectedRating = star.getAttribute("data-rating");
    }
  });
  return selectedRating;
}

function getStarRating(rating) {
  const starIcon = '<i class="fas fa-star"></i>';
  const emptyStarIcon = '<i class="far fa-star"></i>';
  const starRating = parseInt(rating);

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= starRating) {
      stars += starIcon;
    } else {
      stars += emptyStarIcon;
    }
  }

  return stars;
}

const fakeReviews = [
  { name: "John Doe", email: "johndoe@example.com", rating: 4, comment: "Great service! Will definitely come back." },
  { name: "Jane Smith", email: "janesmith@example.com", rating: 5, comment: "Amazing food and friendly staff!" },
  { name: "Mike Johnson", email: "mikejohnson@example.com", rating: 3, comment: "Decent place, but the prices are a bit high." }
];

fakeReviews.forEach((review) => {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <p class="name">Name: ${review.name}</p>
    <p>Email: ${review.email}</p>
    <div class="rating">
      Rating: ${getStarRating(review.rating)}
    </div>
    <p class="comment">${review.comment}</p>
  `;
  reviewList.appendChild(reviewElement);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuSection = document.querySelector(".menu");

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
