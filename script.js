var canvas = document.getElementById('viewport'),
context = canvas.getContext('2d');
var mb_sqr = new Path2D
var c_sqr = new Path2D
var g_sqr = new Path2D
var hd_sqr = new Path2D
var r_sqr = new Path2D
var psu_sqr = new Path2D
var co_sqr = new Path2D

class Component {
  constructor(x, y, isInPlace, element) {
    this.x = x
    this.y = y
    this.isInPlace = isInPlace
    this.element = element
  }


  setPlace() {
    this.element.style.left = this.x+'px',
    this.element.style.top = this.y+'px'
  }

  getStatus() {
    return this.Status();
  }

  Status() {
    return isInPlace
  }
}

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
   // context.fill(mb_sqr);

    //cpu ruut
    c_sqr.rect(225, 210, 120,120);
    context.fillStyle = "pink";
    context.stroke(c_sqr);
    //context.fill(c_sqr);
    
    //gpu ruut
    g_sqr.rect(5,480,500,70)
    context.fillStyle = "black";
    context.stroke(g_sqr)
   // context.fill(g_sqr)

    r_sqr.rect(456,108,70,300)
    context.fillStyle = "green";
    context.stroke(r_sqr)
    //context.fill(r_sqr)

    psu_sqr.rect(59,687,350,200)
    context.fillStyle = "red";
    context.stroke(psu_sqr)
   // context.fill(psu_sqr)

    hd_sqr.rect(544,595,300,70)
    context.fillStyle = "cyan";
    context.stroke(hd_sqr)
    //context.fill(hd_sqr)

    co_sqr.rect(185,168,200,200)
    context.fillStyle = "yellow";
    context.stroke(co_sqr)
    //context.fill(co_sqr)
  }

  var motherboard = new Component(996, 19, false, document.getElementById("motherboard"))
  motherboard.setPlace()

  var cpu = new Component(1508, 434, false, document.getElementById("cpu"))
  cpu.setPlace()

  var gpu =  new Component(1503, 605, false, document.getElementById("gpu")
    cpu.setPlace();
  var hard_drive = new Component(1007, 948, false, document.getElementById("hard-drive")
  cpu.setPlace();
  var ram = new Component(1514, , false, document.getElementById("ram"))
  cpu.setPlace();
  var psu =new Component(1010, 719, false, document.getElementById("psu"))
  cpu.setPlace();
  var cooling =new Component(1414, 719, false, document.getElementById("cooling")
  cpu.setPlace();

  function move(e) {

    var newX = e.clientX-15;
    var newY = e.clientY-15;

    image.style.left = newX + "px";
    image.style.top = newY + "px";

    if (context.isPointInPath(mb_sqr, newX, newY) && e.path[0].className == "m1" && mb_sqr_place == false)  {
      console.log("motherboard is in the right place")
      image.style.left = 30 + "px";
      image.style.top = 75 + "px";
      motherboard.isInPlace = true
      if (motherboard.isInPlace) {
        moving = !moving
      }
    } else if (context.isPointInPath(c_sqr, newX, newY) && e.path[0].className == "c1")  {
      console.log("cpu is in the right place")
      moving = !moving //225, 210
      image.style.left = 230 + "px";
      image.style.top = 220 + "px";
      //document.getElementById("mb1").click;
    } else if (context.isPointInPath(g_sqr, newX, newY) && e.path[0].className == "g1")  {
      console.log("gpu is in the right place")
      moving = !moving //5,480
      image.style.left = 5 + "px";
      image.style.top = 480 + "px";
      //document.getElementById("mb1").click;
    } else if (context.isPointInPath(r_sqr, newX, newY) && e.path[0].className == "r1")  {
      console.log("ram is in the right place")
      moving = !moving //456,108
      image.style.left = 456 + "px";
      image.style.top = 108 + "px";
      //document.getElementById("mb1").click;
    } else if (context.isPointInPath(psu_sqr, newX, newY) && e.path[0].className == "po1")  {
      console.log("psu is in the right place")
      moving = !moving //59,687
      image.style.left = 59 + "px";
      image.style.top = 687 + "px";
      //document.getElementById("mb1").click;
    } else if (context.isPointInPath(hd_sqr, newX, newY) && e.path[0].className == "hd1")  {
      console.log("hard drive is in the right place")
      moving = !moving //544,595
      image.style.left = 544 + "px";
      image.style.top = 595 + "px";
      //document.getElementById("mb1").click;
    } else if (context.isPointInPath(co_sqr, newX, newY) && e.path[0].className == "co1")  {
      console.log("cooling is in the right place")
      moving = !moving //185,168
      image.style.left = 194 + "px";
      image.style.top = 175 + "px";
      //document.getElementById("mb1").click;
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
    motherboard.element.addEventListener("mousedown", initialClick, false);
    cpu.element.addEventListener("mousedown", initialClick, false);
    gpu.element.addEventListener("mousedown", initialClick, false);
    hard_drive.element.addEventListener("mousedown", initialClick, false);
    ram.element.addEventListener("mousedown", initialClick, false);
    psu.element.addEventListener("mousedown", initialClick, false);
    cooling.element.addEventListener("mousedown", initialClick, false);
  }
}