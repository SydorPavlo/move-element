let x = 0
let y = 0
const speed = 10
const speedD = Math.sqrt(speed ** 2 / 2 )
let right, down, left, up

onkeydown = handleKeys
onkeyup = handleRelease

function handleRelease(e) {
  if (e.key === "ArrowRight") {
    right = false
  } else if (e.key === "ArrowDown") {
    down = false
  
    left = false
  } else if (e.key === "ArrowUp") {
    up = false
  }
}

function handleKeys(e) {
  if (e.key === "ArrowRight") {
    right = true
    if (down) {
      y += speedD
      x += speedD
      element.className = "down-right"
    } else if (up) {
      y -= speedD
      x += speedD
      element.className = "up-right"
    } else {
      x += speed
      element.className = "right"
    }
  } else if (e.key === "ArrowDown") {
    down = true
    if (left) {
      y += speedD
      x -= speedD
      element.className = "down-left"
    } else if (right) {
      y += speedD
      x += speedD
      element.className = "down-right"
    } else {
      y += speed
      element.className = "down"
    }
  } else if (e.key === "ArrowLeft") {
    left = true
    if (down) {
      y += speedD
      x -= speedD
      element.className = "down-left"
    } else if (up) {
      y -= speedD
      x -= speedD
      element.className = "up-left"
    } else {
      x -= speed
      element.className = "left"
    }
  } else if (e.key === "ArrowUp") {
    up = true
    if (left) {
      y -= speedD
      x -= speedD
      element.className = "up-left"
    } else if (right) {
      y -= speedD
      x += speedD
      element.className = "up-right"
    } else {
      y -= speed
      element.className = "up"
    }
  }

  element.style.transform = `translate(${x}px, ${y}px)`
}