function allowDrop(ev) {
  ev.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("color", e.srcElement.style.backgroundColor);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("color");
  e.target.style.backgroundColor = data;
}