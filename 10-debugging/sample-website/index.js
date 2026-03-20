const moreInfoButtons = document.querySelectorAll(".more-info-button");

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener("click", (event) => {
    const popupSection =
      event.currentTarget.closest(".card").nextElementSibling;
    popupSection.style.display = "block";
  });
}

const closePopupButtons = document.querySelectorAll(".close-popup-button");

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    const popupSection = event.currentTarget.closest(
      ".popup-section-container",
    );
    popupSection.style.display = "none";
  });
}
