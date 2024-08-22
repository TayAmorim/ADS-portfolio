const btnBgc = document.querySelector('.bgc');
const btnMenina = document.querySelector('.menina');
const skills = document.querySelectorAll('.skill');

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

btnBgc.addEventListener('click', handleActiveClass);
btnMenina.addEventListener('click', handleActiveClass);
