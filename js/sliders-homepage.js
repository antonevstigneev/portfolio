
function changeBlur (e) {
  console.log(e.target.value)
  const imgs = document.querySelectorAll('.adaptivity-preview-blur')
  imgs.forEach((div) => {
    div.setAttribute("style", `filter: blur(${e.target.value}px)`);
  });
}

function changeSize (e) {
  console.log(e.target.value)
  const imgs = document.querySelectorAll('.adaptivity-preview-size img')
  imgs.forEach((img) => {
    img.setAttribute("style", `width:${e.target.value}px`)
  })
}

function changeRotateY (e) {
  console.log(e.target.value)
  const imgs = document.querySelectorAll('.adaptivity-preview-blur img')
  imgs.forEach((img) => {
    img.setAttribute("style", `transform: rotateY(${e.target.value}deg)`)
  })
}

function changeRotateX (e) {
  console.log(e.target.value)
  const imgs = document.querySelectorAll('.adaptivity-preview-blur img')
  imgs.forEach((img) => {
    img.setAttribute("style", `transform: rotateX(${e.target.value}deg)`)
  })
}

/*
function changeBlur (e) {
  const sliderBlur = ;
  console.log(document.getElementById("slider-blur").target.value),
  const imgs = document.querySelectorAll('.adaptivity-preview img')
  imgs.forEach((div) => {
    div.setAttribute("style", `filter: blur(${e.target.value}px)`);
  });
}

function changeDistort (e) {
  console.log(document.getElementById("slider-distort").target.value),
  const imgs = document.querySelectorAll('.adaptivity-preview img')
  imgs.forEach((div) => {
    div.setAttribute("style", `transform: rotateY(${e.target.value}deg)`);
  });
}
*/
