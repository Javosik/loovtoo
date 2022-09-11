var motherboard = document.getElementById("motherboard");
var cpu = document.getElementById("cpu");
var gpu = document.getElementById("gpu");
var hard_drive = document.getElementById("hard-drive");
var ram = document.getElementById("ram");
var psu = document.getElementById("psu");
var cooling = document.getElementById("cooling");
var mbdesc = document.getElementById("mb-desc")
var moving = false;

function move(e) {

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";


}

function initialClick(e) {

  if (moving) {
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }

  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}

window.onload = function() {
  motherboard.addEventListener("mousedown", initialClick, false);
  cpu.addEventListener("mousedown", initialClick, false);
  gpu.addEventListener("mousedown", initialClick, false);
  hard_drive.addEventListener("mousedown", initialClick, false);
  ram.addEventListener("mousedown", initialClick, false);
  psu.addEventListener("mousedown", initialClick, false);
  cooling.addEventListener("mousedown", initialClick, false);

}