let button2 = document.querySelector("button2");

button2.addEventListener("click", updateStatus);

function updateStatus() {
  const status = prompt("Enter a new status");
  button2.textContent = `Player 1: ${status}`;
}