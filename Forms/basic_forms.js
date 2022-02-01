const username = document.querySelector("#user-input");
const displayButton = document.querySelector("#display-button");
const displayOutput = document.querySelector("#display");

displayButton.addEventListener('click', (e) => {
    displayOutput.innerText = `${username.value}`;
})