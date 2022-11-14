function handleSubmit(event) {
  event.preventDefault();
  let submitEmail = document.querySelector("input").value;
  if (submitEmail.length > 0) {
    alert("Thank you for subscribing in our newletter! 🏛");
  } else {
    alert("Please type your email!");
  }
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", handleSubmit);
