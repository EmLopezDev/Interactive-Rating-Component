const card = document.getElementById("card");
const ratingOptions = document.querySelectorAll(".card__rating--option-input");
const submitButton = document.getElementById("submit");

let selectedRating = 0;

const setUserRating = (evt) => {
    selectedRating = evt.target.value;

    if (selectedRating) {
        submitButton.removeAttribute("disabled");
    }
};

const showThanksView = () => {
    card.innerHTML = `
    <div class="card__thanks">
        <img
            class="card__thanks--img"
            src="./images/illustration-thank-you.svg"
            alt="thank you receipt"
        />
        <span class="card__thanks--rating">
            You selected ${selectedRating} out of 5
        </span>
        <span class="card__thanks--text">Thank you!</span>
        <p class="card__thanks--details">
            We appreciate you taking the time to give a rating. If you
            ever need more support, don’t hesitate to get in touch!
        </p>
    </div>
    `;
};

ratingOptions.forEach((option) => {
    option.addEventListener("click", setUserRating);
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    showThanksView();
});
