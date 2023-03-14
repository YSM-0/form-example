const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')

firstName.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.name-error')

    if (firstName.validity.patternMismatch) {
        errorMessage.textContent = 'First Name should be only letters.'
    } else {
        errorMessage.textContent = ''
    }
})

lastName.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.name-error')

    if (lastName.validity.patternMismatch) {
        errorMessage.textContent = 'Last Name should be only letters.'
    } else {
        errorMessage.textContent = ''
    }
})

email.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.mail-error')

    if (email.validity.typeMismatch) {
        errorMessage.textContent = 'Please, let us an e-mail.'
    } else {
        errorMessage.textContent = ''
    }
})

country.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.adress-error')

    if (country.validity.patternMismatch) {
        errorMessage.textContent = 'Please, enter a real country.'
    } else {
        errorMessage.textContent = ''
    }
})

zip.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.adress-error')

    if (zip.validity.patternMismatch) {
        errorMessage.textContent = 'Enter a ZIP, 5 digits.'
    } else {
        errorMessage.textContent = ''
    }
})

password.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.password-error')

    if (password.validity.patternMismatch) {
        errorMessage.textContent = '10 characters min, one MAJ, one symbol.'
    } else {
        errorMessage.textContent = ''
    }
})

passwordConfirm.addEventListener('input', (event) => {
    const errorMessage = document.querySelector('.password-error')

    if (passwordConfirm.value !== password.value) {
        errorMessage.textContent = 'The passwords must be the same.'
    } else {
        errorMessage.textContent = ''
    }
})