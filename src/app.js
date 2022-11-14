function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for subscribing in our newletter! 🏛");
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("submit", handleSubmit);
