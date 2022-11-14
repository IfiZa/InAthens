function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for subscribing in our newletter! 🏛");
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", handleSubmit);
