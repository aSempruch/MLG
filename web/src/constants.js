// Play Area
const width = 400
const height = 400
const wallX = window.innerWidth/2-width/2
const wallY = window.innerHeight/2-height/2

// Game Behavior
const speed = 0.9
const totalGameTime = 10
const RANDOM_INTERVAL = 5000

// Target Size
const TARGET_OUTER_SIZE = 60
const TARGET_INNER_SIZE = 25

// Colors
const TARGET_INNER_COLOR = "#FFB04A"
const TARGET_OUTER_COLOR = "#FF9000"

export {
    width,
    height,
    wallX,
    wallY,
    speed,
    totalGameTime,
    TARGET_INNER_COLOR,
    TARGET_OUTER_COLOR,
    TARGET_INNER_SIZE,
    TARGET_OUTER_SIZE,
    RANDOM_INTERVAL
}