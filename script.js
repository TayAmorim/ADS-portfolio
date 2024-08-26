const btnBgc = document.querySelector('.bgc');
const btnMenina = document.querySelector('.menina');
const skills = document.querySelectorAll('.skill');
const btnForm = document.querySelector('.formSubmit');
const form = document.querySelector('form');
const message = document.querySelector('.mensage');
const inputName = document.querySelector('.inputName');

function handleActiveClass(e) {
  const nameBtn = e.target.classList[1];
  skills.forEach((skill) => {
    const isContain = skill.classList.contains(nameBtn);
    if (isContain) {
      skill.classList.add('active');
    } else {
      skill.classList.remove('active');
    }
  });
}

function handleSendForm(e) {
  e.preventDefault();

  message.innerHTML = `Mensagem Enviada ${inputName.value}`;
  message.classList.add('show');
}

btnBgc.addEventListener('click', handleActiveClass);
btnMenina.addEventListener('click', handleActiveClass);
form.addEventListener('submit', handleSendForm);
