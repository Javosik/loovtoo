var canvas = document.getElementById('viewport'),
  context = canvas.getContext('2d');
var saturated = false

class Hitbox {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  setBorder() {
    var border = new Path2D
    border.rect(this.x, this.y, this.width, this.height)
    return border
  }
}

class Component {
  constructor(x, y, isInPlace, element, moving) {
    this.x = x
    this.y = y
    this.isInPlace = isInPlace
    this.element = element
    this.moving = moving
  }

  setPlace(x, y) {
    this.x = x
    this.y = y
    this.element.style.left = this.x + 'px',
      this.element.style.top = this.y + 'px'
  }

  getStatus() {
    return this.Status();
  }

  Status() {
    return this.isInPlace
  }

  setStatus() {
    this.isInPlace = !this.isInPlace
    return this.isInPlace
  }

  setFlag() {
    this.flag = !this.flag
    return this.flag
  }
}

make_base();

var motherboard = new Component(996, 19, false, document.getElementById("motherboard"), false)
motherboard.setPlace(motherboard.x, motherboard.y)

var cpu = new Component(1508, 434, false, document.getElementById("cpu"), false)
cpu.setPlace(cpu.x, cpu.y)

var gpu = new Component(996, 605, false, document.getElementById("gpu"), false)
gpu.setPlace(gpu.x, gpu.y)

var hard_drive = new Component(1007, 948, false, document.getElementById("hard-drive"), false)
hard_drive.setPlace(hard_drive.x, hard_drive.y)

var ram = new Component(1514, 36, false, document.getElementById("ram"), false)
ram.setPlace(ram.x, ram.y)

var psu = new Component(1010, 719, false, document.getElementById("psu"), false)
psu.setPlace(psu.x, psu.y)

var cooling = new Component(1414, 719, false, document.getElementById("cooling"), false)
cooling.setPlace(cooling.x, cooling.y)

function make_base() {

  base_image = new Image();
  base_image.src = 'https://i.ibb.co/gm7S0Lc/Png-Item-3125635.png';
  base_image.onload = function () {
    context.drawImage(base_image, 0, 0, 1000, 1000);

    //emaplaadi ruut
    mb_sqr = new Hitbox(30, 70, 500, 580)
    mb_sqr_path = mb_sqr.setBorder()
    context.stroke(mb_sqr_path);

    //cpu ruut
    c_sqr = new Hitbox(225, 210, 120, 120)
    c_sqr_path = c_sqr.setBorder()
    context.stroke(c_sqr_path);

    //gpu ruut
    g_sqr = new Hitbox(5, 480, 500, 70)
    g_sqr_path = g_sqr.setBorder()
    context.stroke(g_sqr_path)

    //ram ruut
    r_sqr = new Hitbox(456, 108, 70, 300)
    r_sqr_path = r_sqr.setBorder()
    context.stroke(r_sqr_path)

    //psu ruut
    psu_sqr = new Hitbox(59, 687, 350, 200)
    psu_sqr_path = psu_sqr.setBorder()
    context.stroke(psu_sqr_path)

    //hard drive ruut
    hd_sqr = new Hitbox(544, 595, 300, 70)
    hd_sqr_path = hd_sqr.setBorder()
    context.stroke(hd_sqr_path)

    //cooler ruut
    co_sqr = new Hitbox(185, 168, 200, 200)
    co_sqr_path = co_sqr.setBorder()
    context.stroke(co_sqr_path)
  }
}

function move(e) {

  var newX = e.clientX - 15;
  var newY = e.clientY - 15;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  if (context.isPointInPath(mb_sqr_path, newX, newY) && e.path[0].className == "m1") {
    motherboard.setPlace(30, 75)
    motherboard.isInPlace = true
    return
  }

  if (context.isPointInPath(c_sqr_path, newX, newY) && e.path[0].className == "c1") {
    cpu.setPlace(230, 220)
    cpu.isInPlace = true
    return
  }

  if (context.isPointInPath(g_sqr_path, newX, newY) && e.path[0].className == "g1") {
    gpu.setPlace(5, 480)
    gpu.isInPlace = true
    return
  }

  if (context.isPointInPath(r_sqr_path, newX, newY) && e.path[0].className == "r1") {
    ram.setPlace(456, 108)
    ram.isInPlace = true
    return
  }

  if (context.isPointInPath(psu_sqr_path, newX, newY) && e.path[0].className == "po1") {
    psu.setPlace(59, 687)
    psu.isInPlace = true
    return
  }

  if (context.isPointInPath(hd_sqr_path, newX, newY) && e.path[0].className == "hd1") {
    hard_drive.setPlace(544, 595)
    hard_drive.isInPlace = true
    return
  }

  if (context.isPointInPath(co_sqr_path, newX, newY) && e.path[0].className == "co1") {
    cooling.setPlace(194, 175)
    cooling.isInPlace = true
    return
  }

}

function initialClick(e) {
  var text_area = document.querySelector("#text")
  var movable = find_element(e)
  var desc = get_description(e)
  var element = movable.element
  var img = element.getElementsByTagName('img')[0]
  image = this;

  if (movable.moving == true) {
    if (movable.isInPlace == true) {
      document.removeEventListener("mousemove", move);
      img.style.filter = "saturate(1)"
      saturated = false
      movable.moving = false
      return
    } else {
      document.removeEventListener("mousemove", move);
      img.style.filter = "saturate(1)"
      saturated = false
      movable.moving = false
    }
  }

  if (movable.moving == false && movable.isInPlace == false) {
    document.addEventListener("mousemove", move, false);
    img.style.filter = "saturate(3)"
    text_area.value = desc
    saturated = true
    movable.moving = true
  } else {
    return
  }
}

function find_element(e) {
  switch (e.path[0].className) {
    case 'm1':
      return motherboard
      break;
    case 'c1':
      return cpu
      break;
    case 'g1':
      return gpu
      break;
    case 'r1':
      return ram
      break;
    case 'po1':
      return psu
      break;
    case 'hd1':
      return hard_drive
      break;
    case 'co1':
      return cooling
      break;
    default:
      console.log("I don't work")
  }
}

function get_description(e) {
  switch (e.path[0].className) {
    case 'm1':
      return "Emplaadi kirjeldus tuleb siia"
      break;
    case 'c1':
      return ""
      break;
    case 'g1':
      return ""
      break;
    case 'r1':
      return ""
      break;
    case 'po1':
      return ""
      break;
    case 'hd1':
      return ""
      break;
    case 'co1':
      return ""
      break;
    default:
      console.log("I don't work")
  }
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