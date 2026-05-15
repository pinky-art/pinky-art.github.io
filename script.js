const joinForm = document.querySelector(".join-form");
const formNote = document.querySelector(".form-note");
const videoButton = document.querySelector(".play-action");
const eventDialog = document.querySelector(".event-dialog");
const eventTitle = document.querySelector("#event-dialog-title");
const eventDate = document.querySelector("[data-event-date-output]");
const eventLocation = document.querySelector("[data-event-location-output]");
const eventDetails = document.querySelector("[data-event-details-output]");
const eventButtons = document.querySelectorAll(".event-card button");
const closeDialog = document.querySelector(".dialog-close");

joinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(joinForm);
  const name = formData.get("name")?.toString().trim();
  formNote.textContent = name
    ? `${name}, you are on the list. Welcome to the movement.`
    : "Add your name and we will get your community invite ready.";
});

videoButton.addEventListener("click", () => {
  window.open(videoButton.dataset.videoUrl, "_blank", "noopener");
});

eventButtons.forEach((button) => {
  button.addEventListener("click", () => {
    eventTitle.textContent = button.dataset.eventTitle;
    eventDate.textContent = button.dataset.eventDate;
    eventLocation.textContent = button.dataset.eventLocation;
    eventDetails.textContent = button.dataset.eventDetails;
    eventDialog.showModal();
  });
});

closeDialog.addEventListener("click", () => {
  eventDialog.close();
});
