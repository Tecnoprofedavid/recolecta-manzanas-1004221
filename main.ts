input.onButtonPressed(Button.A, function () {
    Cesta.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Cesta.change(LedSpriteProperty.X, 1)
})
let Cesta: game.LedSprite = null
let Fresa1 = game.createSprite(2, 0)
Cesta = game.createSprite(2, 4)
let Fresa2 = game.createSprite(2, 2)
let Velocidad = 1000
basic.forever(function () {
    Fresa1.change(LedSpriteProperty.Y, 1)
    if (Fresa1.get(LedSpriteProperty.Y) == 4) {
        if (Fresa1.isTouching(Cesta)) {
            Fresa1.set(LedSpriteProperty.Y, 0)
            Fresa1.set(LedSpriteProperty.X, randint(0, 4))
            game.addScore(1)
        } else {
            game.gameOver()
        }
    }
    basic.pause(Velocidad)
    if (game.score() > 20) {
        Fresa2.change(LedSpriteProperty.Y, 1)
        if (Fresa2.get(LedSpriteProperty.Y) == 4) {
            if (Fresa2.isTouching(Cesta)) {
                Fresa2.set(LedSpriteProperty.Y, 0)
                Fresa2.set(LedSpriteProperty.X, randint(0, 4))
                game.addScore(1)
            } else {
                game.gameOver()
            }
        }
        basic.pause(Velocidad)
    }
    if (game.score() < 10) {
        Velocidad = 1000
    } else {
        if (game.score() < 20) {
            Velocidad = 900
        } else {
            if (game.score() < 30) {
                Velocidad = 800
            } else {
                Velocidad = 700
            }
        }
    }
})
