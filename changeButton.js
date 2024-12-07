function changeButton(event) {
  event.preventDefault();
  // Get the submit button by its ID
  const submitButton = document.getElementById("email-submit");

  // Change the button label
  submitButton.innerHTML = "<i class='bx bx-check'></i>";

  // Change the button color
  submitButton.style.backgroundColor = "green";
  submitButton.style.color = "white"; // Optional: Adjust text color
}
