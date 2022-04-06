input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
