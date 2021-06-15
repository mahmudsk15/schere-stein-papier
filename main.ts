let zahl = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    zahl = 0
})
input.onGesture(Gesture.Shake, function () {
    zahl = randint(1, 3)
    if (zahl == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (zahl == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            `)
    } else if (zahl == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
