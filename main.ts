input.onButtonPressed(Button.A, function () {
    if (level_5 > 0) {
        level_5 += -1
    } else if (level_6 > 0) {
        level_6 += -1
    } else if (level_4 > 0) {
        level_4 += -1
    } else if (level_3 > 0) {
        level_3 += -1
    } else if (level_7 > 0) {
        level_7 += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (level_5 == 1) {
        level_4 = 1
        level_5 = -1
    } else if (level_5 == 2) {
        level_4 = 2
        level_5 = -1
    } else if (level_5 == 3) {
        level_4 = 3
        level_5 = -1
    } else if (level_5 == 4) {
        level_4 = 4
        level_5 = -1
    } else if (level_5 == 5) {
        level_4 = 5
        level_5 = -1
    } else if (level_6 == 5) {
        level_5 = 5
        level_6 = -1
    } else if (level_6 == 4) {
        level_5 = 4
        level_6 = -1
    } else if (level_6 == 3) {
        level_5 = 3
        level_6 = -1
    } else if (level_6 == 2) {
        level_5 = 2
        level_6 = -1
    } else if (level_6 == 1) {
        level_5 = 1
        level_6 = -1
    } else if (level_7 == 1) {
        level_6 = 1
        level_7 = -1
    } else if (level_7 == 2) {
        level_6 = 2
        level_7 = -1
    } else if (level_7 == 3) {
        level_6 = 3
        level_7 = -1
    } else if (level_7 == 4) {
        level_6 = 4
        level_7 = -1
    } else if (level_7 == 5) {
        level_6 = 5
        level_7 = -1
    } else if (level_4 == 1) {
        level_3 = 1
        level_4 = -1
    } else if (level_4 == 2) {
        level_3 = 2
        level_4 = -1
    } else if (level_4 == 3) {
        level_3 = 3
        level_4 = -1
    } else if (level_4 == 4) {
        level_3 = 4
        level_4 = -1
    } else if (level_4 == 5) {
        level_3 = 5
        level_4 = -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (level_5 > 0) {
        level_5 += 1
    } else if (level_6 > 0) {
        level_6 += 1
    } else if (level_4 > 0) {
        level_4 += 1
    } else if (level_3 > 0) {
        level_3 += 1
    } else if (level_7 > 0) {
        level_7 += 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (level_5 == 1) {
        level_6 = 1
        level_5 = -1
    } else if (level_5 == 2) {
        level_6 = 2
        level_5 = -1
    } else if (level_5 == 3) {
        level_6 = 3
        level_5 = -1
    } else if (level_5 == 4) {
        level_6 = 4
        level_5 = -1
    } else if (level_5 == 5) {
        level_6 = 5
        level_5 = -1
    } else if (level_4 == 5) {
        level_5 = 5
        level_4 = -1
    } else if (level_4 == 4) {
        level_5 = 4
        level_4 = -1
    } else if (level_4 == 3) {
        level_5 = 3
        level_4 = -1
    } else if (level_4 == 2) {
        level_5 = 2
        level_4 = -1
    } else if (level_4 == 1) {
        level_5 = 1
        level_4 = -1
    } else if (level_6 == 1) {
        level_7 = 1
        level_6 = -1
    } else if (level_6 == 2) {
        level_7 = 2
        level_6 = -1
    } else if (level_6 == 3) {
        level_7 = 3
        level_6 = -1
    } else if (level_6 == 4) {
        level_7 = 4
        level_6 = -1
    } else if (level_6 == 5) {
        level_7 = 5
        level_6 = -1
    } else if (level_3 == 1) {
        level_4 = 1
        level_3 = -1
    } else if (level_3 == 2) {
        level_4 = 2
        level_3 = -1
    } else if (level_3 == 3) {
        level_4 = 3
        level_3 = -1
    } else if (level_3 == 4) {
        level_4 = 4
        level_3 = -1
    } else if (level_3 == 5) {
        level_4 = 5
        level_3 = -1
    }
})
// it's what happen at the start
// Made by : dastan lieonez
let level_7 = 0
let level_6 = 0
let level_5 = 0
let level_4 = 0
let level_3 = 0
level_3 = -1
level_4 = -1
level_5 = 3
level_6 = -1
level_7 = -1
basic.forever(function () {
    if (level_4 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
    } else if (level_4 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (level_4 == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else if (level_4 == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (level_4 == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
    }
    if (level_4 == 0) {
        level_4 = 1
    }
    if (level_4 == 6) {
        level_4 = 5
    }
})
basic.forever(function () {
    if (level_7 == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_7 == 2) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_7 == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_7 == 4) {
        basic.showLeds(`
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_7 == 5) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (level_7 == 0) {
        level_7 = 1
    }
    if (level_7 == 6) {
        level_7 = 5
    }
})
basic.forever(function () {
    if (level_6 == 1) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_6 == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_6 == 3) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_6 == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_6 == 5) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (level_6 == 0) {
        level_6 = 1
    }
    if (level_6 == 6) {
        level_6 = 5
    }
})
// the person's place
// made by dastan
basic.forever(function () {
    // made by dastan
    if (level_5 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else if (level_5 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
    } else if (level_5 == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (level_5 == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
    } else if (level_5 == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
    if (level_5 == 0) {
        level_5 = 1
    }
    if (level_5 == 6) {
        level_5 = 5
    }
})
basic.forever(function () {
    if (level_3 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (level_3 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
    } else if (level_3 == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (level_3 == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
    } else if (level_3 == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
    if (level_3 == 0) {
        level_3 = 1
    }
    if (level_3 == 6) {
        level_3 = 5
    }
})
