const enterButton = document.querySelector('#enter-button');
const checkbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const length = textArea.getAttribute('maxlength');

counter.innerHTML = length;

function loginValidade() {
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');

  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function validadeSubmitButton() {
  if (checkbox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function caracterCounter() {
  counter.innerHTML = length - textArea.value.length;
}

enterButton.addEventListener('click', loginValidade);
checkbox.addEventListener('click', validadeSubmitButton);
textArea.addEventListener('keyup', caracterCounter);
