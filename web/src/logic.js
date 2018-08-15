var x = window.innerWidth/2, y = window.innerHeight/2
const width = 400, height = 400
const wallX = x-width/2, wallY = y-height/2
const speed = 0.5

var mouseData = []

const getDirection = () => {
    var x = Math.random()*2-1
    var y
    if(x >= 0) y = 1-x
    else y = 1+x
    return { x: x, y: y }
}

var direction = getDirection();

/* Randomize Ball Direction */
setInterval(() => {
    direction = getDirection()
}, 4000)

/* Collect Mouse Data */
const collectMouseData = (mouseX, mouseY) => {
    mouseData.push([
        x - mouseX,
        y - mouseY
    ])
}

const getX = () => {
    if(x >= wallX + width){
        x = wallX + width
        direction.x *= -1
    }
    else if(x <= wallX){
        x = wallX
        direction.x *= -1
    }
    x += direction.x * speed
    return x
}

const getY = () => {
    if(y >= wallY + height){
        y = wallY + height
        direction.y *= -1
    }
    else if(y <= wallY){
        y = wallY
        direction.y *= -1
    }
    y += direction.y * speed
    return y
}

module.exports = {
    getX: getX,
    getY: getY,
    getWidth: () => {return width},
    getHeight: () => {return height},
    collectMouseData: collectMouseData
}