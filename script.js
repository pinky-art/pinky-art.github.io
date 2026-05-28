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
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();

  if (!name) {
    formNote.textContent = "Add your name and we will get your community invite ready.";
    return;
  }

  const message = [
    "Hi NAYA MVMNT, I would like to join the community.",
    `Name: ${name}`,
    email ? `Email: ${email}` : "",
    phone ? `Phone: ${phone}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  formNote.textContent = `${name}, WhatsApp is opening with your message.`;
  window.open(`https://wa.me/254792501827?text=${encodeURIComponent(message)}`, "_blank", "noopener");
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
