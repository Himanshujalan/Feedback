const ratingsEl = document.querySelectorAll(".rating");
const ratings1El = document.querySelectorAll(".rating1");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

ratingsEl.forEach((el) => {
  el.addEventListener("click", () => {
    ratingsEl.forEach((innerEl) => {
      innerEl.classList.remove("active");
    });

    el.classList.add("active");
  });
});
ratings1El.forEach((el) => {
  el.addEventListener("click", () => {
    ratings1El.forEach((innerEl) => {
      innerEl.classList.remove("active");
    });

    el.classList.add("active");
  });
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
		<i class="fas fa-heart"></i>
		<strong>Thank you</strong>
		<p>We'll use your feedback to improve our services.</p>
		<button class="btn">Done</button>
	`;
});
