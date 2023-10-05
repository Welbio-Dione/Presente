let contQues = 1

function start() {
  const home = document.querySelector('.home')
  const questions = document.querySelector('.questions')
  const ques = document.querySelectorAll('.ques')

  home.classList.add("remove")
  questions.classList.remove("remove")
  ques.forEach( elem => {
    elem.classList.add('remove')
  })

  document.querySelector(`.ques${contQues}`).classList.remove('remove')
}

function err(elem) {
  elem.style.backgroundColor = "red";
  elem.style.color = "aliceblue"

  if (elem.classList[1] === 'chama-mae') {
    showMae()
  }
  if (elem.classList[1] === 'show-aside') {
    console.log(this);
    document.querySelector('.patada').classList.remove('remove')
  }
  if (elem.classList[1] === 'play-animate') {
    elem.style.backgroundColor = "aliceblue"
    elem.style.color = "black"
    animate(elem)
  }

}

function right(elem) {
  elem.style.backgroundColor = "green";
  elem.style.color = "aliceblue"

  setTimeout(() => {

    next()
  
  }, 1000);
}

function showMae() {
  const mae = document.querySelector('.mae')
  mae.classList.remove('hidden-mae')
}

function next() {
  const audioAtumalaka = document.querySelector('.atumalaka')
  const ol = document.querySelector('.questions')
  
  audioAtumalaka.pause()
  document.querySelector(`.ques${contQues}`).classList.add("remove")
  contQues++
  ol.start = contQues
  document.querySelector(`.ques${contQues}`).classList.remove("remove")

  if (contQues === 3) {
    skip()
  }
}

function skip() {

    setTimeout(() => {
      document.querySelector('.skip').classList.remove('remove')
    }, 15000);

}

function animate(elem) {
  const maxX = -100;
  const maxY = -300;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  elem.style.left = `${newX}px`;
  elem.style.top = `${newY}px`;
}