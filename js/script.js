const form = document.getElementById('form');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const allInputs = document.querySelectorAll('input');

const error = (input) => {
    const icon = document.getElementById(`${input.id}-icon`);
    const errorMsg = document.getElementById(`${input.id}-errorMsg`);
    icon.classList.remove('hidden');
    errorMsg.classList.remove('hidden');
    input.style.color = 'var(--Red)';
    input.style.border = '2px solid var(--Red)';
}

const resetInputs = (input) => {
    const icon = document.getElementById(`${input.id}-icon`);
    const errorMsg = document.getElementById(`${input.id}-errorMsg`);
    icon.classList.add('hidden');
    errorMsg.classList.add('hidden');
    input.style.color = 'var(--Dark-Blue)';
    input.style.border = '1px solid var(--Grayish-Blue)';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (firstNameInput.value !== '' && lastNameInput.value !== '' && emailRegex.test(emailInput.value) && passwordInput.value !== '') {
        form.submit();

    } else {
        if (firstNameInput.value === '') {
            error(firstNameInput);
        } 
        if (lastNameInput.value === '') {
            error(lastNameInput);
        }
        if (!emailRegex.test(emailInput.value)) {
            error(emailInput);
        }
        if (passwordInput.value === '') {
            error(passwordInput);
        }
    }   
})

document.addEventListener('click', () => {
    allInputs.forEach(input => resetInputs(input));
});