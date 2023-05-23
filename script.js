const botaoEntrar = document.querySelector('.botaoEntrar');
const main1 = document.getElementById('main1');
const evaluationForm = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const familyOptions = document.getElementById('family-options').children;
let whatYourFamily;
const contentsChoosen = [];
const contentOption = document.getElementsByClassName('content-option');
const rateOptions = document.getElementById('label-rate').children;
let rate;
const textArea = document.getElementById('textarea');
const botaoEnviar = document.getElementById('submit-btn');
const newForm = document.createElement('form');
newForm.id = 'form-data';
const newParagraph = document.createElement('p');

botaoEntrar.addEventListener('click', () => {
  const checaEmail = document.getElementById('email').value;
  const checaSenha = document.getElementById('senha').value;

  if (checaEmail === 'tryber@teste.com' && checaSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

document.querySelector('#textarea').addEventListener('keyup', () => {
  const text = document.getElementById('textarea').value;
  document.getElementById('counter').innerText = 500 - text.length;
});

// https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
// desabilita o botão no início
botaoEnviar.disabled = true;

// https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado
const checa = document.getElementsByName('toggle');
const bt = document.getElementById('submit-btn');

checa[0].onclick = function checkbox() {
  // "input[name='toggle']:checked" conta os checkbox checados
  const cont = document.querySelectorAll('input[name=\'toggle\']:checked').length;
  // ternário que verifica se há algum checado.
  // se não há, retorna 0 (false), logo desabilita o botão
  bt.disabled = !cont;
};

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  for (let i = 0; i < familyOptions.length; i += 1) {
    const e = familyOptions[i].children[0];
    if (e.checked) {
      whatYourFamily = e.value;
      console.log(whatYourFamily);
    }
  }
});

botaoEnviar.addEventListener('click', () => {
  for (let i = 0; i < contentOption.length; i += 1) {
    const e = contentOption[i].children[0];
    if (e.checked) {
      contentsChoosen.push(` ${e.value}`);
    }
  }
  console.log(contentsChoosen);
});

botaoEnviar.addEventListener('click', () => {
  for (let i = 1; i < rateOptions.length; i += 1) {
    const e = rateOptions[i].children[0];
    if (e.checked) {
      rate = e.value;
    }
  }
  newParagraph.innerText = `Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputEmail.value}
  Casa: ${inputHouse.value}
  Família: ${whatYourFamily}
  Matérias:${contentsChoosen}
  Avaliação: ${rate}
  Observações: ${textArea.value}`;
  newForm.appendChild(newParagraph);
  main1.appendChild(newForm);
});
