function rgb() {
const body = document.querySelector('body');
let red = 255, green = 0, blue = 0;

setInterval(() => {
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
  if (red === 255 && green === 0) {
      if (blue <= 255 && blue >= 0) {
        blue++
      }
  }
  if (blue === 255 && green === 0) {
    if (red <= 255 && red >= 0) {
      red--
    }
  }
  if (blue === 255 && red === 0) {
    if (green <= 255 && green >= 0) {
      green++
    }
  }
  if (green === 255 && red === 0) {
      if (blue <= 255 && blue >= 0) {
        blue--
      }
  }
  if (green === 255 && blue === 0) {
      if (red <= 255 && red >= 0) {
        red++
      }
  }
  if (red === 255 && blue == 0) {
    if (green <= 255 && green >= 0) {
      green--
    }
  }
}, 1)

}