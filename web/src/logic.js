var x = window.innerWidth/2, y = window.innerHeight/2
const width = 400, height = 400
const wallX = x-width/2, wallY = y-height/2
const speed = 0.5

var mouseData = []

/* Collect Mouse Data */
const collectMouseData = (mouseX, mouseY) => {
    mouseData.push([
        Math.round((x - mouseX)*100),
        Math.round((y - mouseY)*100)
    ])
}

/* Submit Mouse Data to Backend Server */
const submitData = () => {
    fetch('http://localhost:4000/classify', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mouseData)
    })
}

module.exports = {
    getWidth: () => {return width},
    getHeight: () => {return height},
    collectMouseData: collectMouseData,
    submitData: submitData
}