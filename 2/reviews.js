const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      { id: "1", text: "Отличный телефон! Батарея держится долго." },
      { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [{ id: "3", text: "Интересный дизайн, но дорогой." }],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [{ id: "4", text: "Люблю играть на PS5, графика на высоте." }],
  },
];

const reviewsContainer = document.getElementById("reviewsContainer");
const reviewInput = document.getElementById("reviewInput");
const submitReviewButton = document.getElementById("submitReview");
const errorMessage = document.getElementById("errorMessage");

function initializeReviews(data) {
  data.forEach((product) => {
    product.reviews.forEach((review) => {
      addReviewToPage(review.text);
    });
  });
}

function addReviewToPage(reviewText) {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.textContent = reviewText;
  reviewsContainer.appendChild(reviewElement);
}

submitReviewButton.addEventListener("click", () => {
  const reviewText = reviewInput.value.trim();

  try {
    if (reviewText.length < 50 || reviewText.length > 500) {
      throw new Error("Отзыв должен содержать от 50 до 500 символов.");
    }

    addReviewToPage(reviewText);
    reviewInput.value = "";
    errorMessage.textContent = "";
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});

initializeReviews(initialData);
