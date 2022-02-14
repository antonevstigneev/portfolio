
function changeBlur (e) {
  console.log(e.target.value)
  const imgs = document.querySelectorAll('#render')
  imgs.forEach((div) => {
    div.setAttribute("style", `filter: blur(${e.target.value}px)`);
  });
}

function changeSize (e) {
  console.log(e.target.value)
  var zoomDistance = e.target.value,
  currDistance = Camara.position.length(),
  factor = zoomDistance/currDistance;

  Camara.position.x *= factor;
  Camara.position.y *= factor;
  Camara.position.z *= factor;

}
