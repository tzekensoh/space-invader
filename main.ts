input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Shoot: game.LedSprite = null
let Player: game.LedSprite = null
let EnemyFire = 0
Player = game.createSprite(2, 4)
let Enemy = game.createSprite(0, -4)
basic.forever(function () {
	
})
