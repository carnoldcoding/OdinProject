const username = document.querySelector("#user-input");
const displayButton = document.querySelector("#display-button");
const displayOutput = document.querySelector("#display");

const usernameTest = document.getElementById("user-input");

displayButton.addEventListener('click', (e) => {
    displayOutput.innerText = `Hello ${username.value}`;
})