const buttonElement = document.querySelector('.btn');
const inputElement = document.querySelector('#input-password')
const copyIconElement = document.querySelector(".fa-copy");
const alertBox = document.querySelector('.alert-box');

buttonElement.addEventListener('click', () => {
    createPassword();
});

copyIconElement.addEventListener("click", () => {
    copyPassword();
});

function createPassword() {
    const characters = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'h', 'w', 'x', 'z',
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '?', '/', '>', '<',
        '{', '}', '[', ']', 'A', 'B', 'C', 'D', 'F', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
    const passwordLength = 14;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];

    }
    inputElement.value = password;
}

function copyPassword() {
    if (inputElement.value) {
        inputElement.select();
        // document.execCommand('copy') // another way to copy the input
        navigator.clipboard.writeText(inputElement.value);

        alertBox.innerHTML = inputElement.value + ' Copied!';
        alertBox.classList.remove('hide');
        setTimeout(() => {
            alertBox.classList.add('hide')
        }, 2000);
    }
}