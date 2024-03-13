// HERO INPUT
const heroInput = document.getElementById('hero-input');
const heroEmailError = document.getElementById('hero-email-error')
const heroBtn = document.getElementById('hero-button')
let inputValue;
let emailCheck;

heroBtn.addEventListener('click', function (event) {
    event.preventDefault();
    inputValue = heroInput.value;
    emailCheck = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (inputValue.match(emailCheck)) {
        heroInput.classList.remove('outline-error');
        heroEmailError.classList.add('remove');
        alert('Email successfully submitted!');
    } else {
        event.preventDefault();
        heroInput.classList.add('outline-error');
        heroEmailError.classList.remove('remove');
    }
});

// MAIN BOTTOM INPUT

const mainInput = document.getElementById('main-input');
const mainBtn = document.getElementById('main-btn');
const mainEmailError = document.getElementById('main-email-error');

mainBtn.addEventListener('click', function (event) {
    event.preventDefault();
    inputValue = mainInput.value;
    emailCheck = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (inputValue.match(emailCheck)) {
        mainInput.classList.remove('outline-error');
        mainEmailError.classList.add('remove');
        alert('Email successfully submitted!');
    } else {
        event.preventDefault();
        mainEmailError.style.color = 'white';
        mainInput.classList.add('outline-error');
        mainEmailError.classList.remove('remove');
    }
});