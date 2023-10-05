const accept = document.querySelector("#term"),
btnInit = document.querySelector(".btn-init")

accept.addEventListener('click', () => {

  if (accept.checked) {
    btnInit.disabled = false
  } else {
    btnInit.disabled = true
  }

})