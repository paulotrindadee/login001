const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username === "admin" && password === "12345") {
    alert("Login successful!");
  } else {
    alert("Login failed. Please try again.");
  }
});
