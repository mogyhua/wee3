const btnSubmit = document.querySelector('button');
const userNameInputField = document.querySelector('#userName');
const userAgeInputField = document.querySelector("#age");
const loginMessageText = document.querySelector(".login-message");

btnSubmit.addEventListener("click", () => {
    const userNameInput = userNameInputField.value.toLowerCase();
    const userAgeInput = userAgeInputField.value;

    /* if (userNameInput === "harry" && userAgeInput === '11') {
        loginMessageText.textContent = "Hello, Harry!";
        loginMessageText.style.color = 'green';
    } else {
        loginMessageText.textContent = "Go away!";
        loginMessageText.style.color = 'red';
    } */

    if(userNameInput !== "harry" || userAgeInput !== '11') {
        loginMessageText.textContent = "Go away"
        loginMessageText.style.color = 'red';
    } else {
        loginMessageText.textContent = "Hello, Harry!";
        loginMessageText.style.color = 'green';
    }
});