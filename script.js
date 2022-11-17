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
    
    //emaplaadi ruut
    mb_sqr.rect(30, 70, 500, 580)
    context.fillStyle = "lightblue";
    context.stroke(mb_sqr);
    context.fill(mb_sqr);

    //cpu ruut
    c_sqr.rect(326, 221, 70,70);
    context.fillStyle = "pink";
    context.stroke(c_sqr);
    context.fill(c_sqr);
    
    //gpu ruut
    g_sqr.rect(119,400,500,70)
    context.fillStyle = "black";
    context.stroke(g_sqr)
    context.fill(g_sqr)

    r_sqr.rect(456,108,70,300)
    context.fillStyle = "pink";
    context.stroke(r_sqr)
    context.fill(r_sqr)

    psu_sqr.rect(59,687,350,200)
    context.fillStyle = "red";
    context.stroke(psu_sqr)
    context.fill(psu_sqr)

    hd_sqr.rect(544,595,300,70)
    context.fillStyle = "black";
    context.stroke(hd_sqr)
    context.fill(hd_sqr)

    co_sqr.rect(262,158,200,200)
    context.fillStyle = "black";
    context.stroke(co_sqr)
    context.fill(co_sqr)
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
      image.style.left = 30 + "px";
      image.style.top = 75 + "px";
      document.getElementById("mb1").click;
    }

    if (context.isPointInPath(c_sqr, newX, newY) && e.path[0].className == "c1")  {
      console.log("cpu is in the right place")
      moving = !moving //326, 221
      image.style.left = 326 + "px";
      image.style.top = 221 + "px";
      document.getElementById("mb1").click;
    }

    if (context.isPointInPath(g_sqr, newX, newY) && e.path[0].className == "g1")  {
      console.log("gpu is in the right place")
      moving = !moving //119,400
      image.style.left = 119 + "px";
      image.style.top = 400 + "px";
      document.getElementById("mb1").click;
    }

    if (context.isPointInPath(r_sqr, newX, newY) && e.path[0].className == "r1")  {
      console.log("ram is in the right place")
      moving = !moving //456,108
      image.style.left = 456 + "px";
      image.style.top = 108 + "px";
      document.getElementById("mb1").click;
    }

    if (context.isPointInPath(psu_sqr, newX, newY) && e.path[0].className == "po1")  {
      console.log("psu is in the right place")
      moving = !moving //59,687
      image.style.left = 59 + "px";
      image.style.top = 687 + "px";
      document.getElementById("mb1").click;
    }

    if (context.isPointInPath(hd_sqr, newX, newY) && e.path[0].className == "hd1")  {
      console.log("hard drive is in the right place")
      moving = !moving //544,595
      image.style.left = 544 + "px";
      image.style.top = 595 + "px";
      document.getElementById("mb1").click;
    }

    if (context.isPointInPath(co_sqr, newX, newY) && e.path[0].className == "co1")  {
      console.log("cooling is in the right place")
      moving = !moving //262,158
      image.style.left = 262 + "px";
      image.style.top = 158 + "px";
      document.getElementById("mb1").click;
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