let y = 0
let x = 0
input.onGesture(Gesture.LogoUp, function () {
    basic.clearScreen()
    if (y < 4) {
        y += 1
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    if (x > 0) {
        x += -1
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    if (y > 0) {
        y += -1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    if (x < 4) {
        x += 1
    }
})
basic.forever(function () {
    led.plot(x, y)
})
