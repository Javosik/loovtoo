var canvas = document.getElementById('viewport'),
  context = canvas.getContext('2d');
var mb_sqr = new Path2D;
var c_sqr = new Path2D;
var g_sqr = new Path2D
var hd_sqr = new Path2D
var r_sqr = new Path2D
var psu_sqr = new Path2D
var co_sqr = new Path2D
make_base();

function make_base() {

  base_image = new Image();
  base_image.src = 'https://i.ibb.co/gm7S0Lc/Png-Item-3125635.png';
  base_image.onload = function () {
    context.drawImage(base_image, 0, 0, 1000, 1000);
    mb_sqr.rect(50, 70, 500, 600)
    context.fillStyle = "lightblue";
    context.stroke(mb_sqr);
    context.fill(mb_sqr);

    c_sqr.rect(350, 210, 50, 50);
    context.fillStyle = "pink";
    context.stroke(cpu_sqr);
    context.fill(cpu_sqr);
  }

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

    //console.log(e.path[0].className);

    if (context.isPointInPath(mb_sqr, newX, newY) && e.path[0].className == "m1")  {
      console.log("motherboard is in the right place")
      moving = !moving
      image.style.left = 50 + "px";
      image.style.top = 70 + "px";

    }
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

  window.onload = function () {
    motherboard.addEventListener("mousedown", initialClick, false);
    cpu.addEventListener("mousedown", initialClick, false);
    gpu.addEventListener("mousedown", initialClick, false);
    hard_drive.addEventListener("mousedown", initialClick, false);
    ram.addEventListener("mousedown", initialClick, false);
    psu.addEventListener("mousedown", initialClick, false);
    cooling.addEventListener("mousedown", initialClick, false);
  }
}