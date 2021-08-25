const enterButton = document.querySelector('#enter-button');
const checkbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

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

enterButton.addEventListener('click', loginValidade);
checkbox.addEventListener('click', validadeSubmitButton);
