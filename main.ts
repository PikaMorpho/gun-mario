namespace SpriteKind {
    export const Boss = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(luigi, effects.disintegrate, 1000)
    luigi = sprites.createProjectileFromSprite(assets.image`luigi`, mario, 0, 0)
    animation.runImageAnimation(
    luigi,
    assets.animation`luigi blink`,
    500,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 200, 0)
})
info.onLifeZero(function () {
    mario.destroy(effects.halo, 1000)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 2000)
    info.changeScoreBy(1)
    otherSprite.setVelocity(0, 50)
    otherSprite.setBounceOnWall(false)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    goomba.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let koopa: Sprite = null
let enemy_bullet: Sprite = null
let red_koopa: Sprite = null
let galoomba: Sprite = null
let Mickey_mouse: Sprite = null
let blue_koopa: Sprite = null
let goomba: Sprite = null
let bullet: Sprite = null
let luigi: Sprite = null
let mario: Sprite = null
mario = sprites.create(assets.image`mario`, SpriteKind.Player)
controller.moveSprite(mario, 200, 200)
mario.setStayInScreen(true)
info.setLife(3)
scene.setBackgroundImage(assets.image`sky`)
animation.runImageAnimation(
mario,
assets.animation`mario blink`,
500,
true
)
game.onUpdateInterval(5000, function () {
    blue_koopa = sprites.create(assets.image`koopa`, SpriteKind.Enemy)
    blue_koopa.setPosition(160, randint(0, 115))
    blue_koopa.setFlag(SpriteFlag.AutoDestroy, true)
    blue_koopa.follow(mario, 150)
    animation.runImageAnimation(
    blue_koopa,
    assets.animation`blue koopa walk`,
    200,
    true
    )
})
game.onUpdateInterval(15000, function () {
    Mickey_mouse = sprites.create(assets.image`why are there two`, SpriteKind.Boss)
    Mickey_mouse.setPosition(0, randint(0, 115))
    Mickey_mouse.setVelocity(50, 0)
})
game.onUpdateInterval(2500, function () {
    galoomba = sprites.create(assets.image`galoomba`, SpriteKind.Enemy)
    galoomba.setPosition(160, randint(0, 115))
    galoomba.setVelocity(-100, 0)
    galoomba.setFlag(SpriteFlag.AutoDestroy, true)
    galoomba.setBounceOnWall(true)
    animation.runImageAnimation(
    galoomba,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 f f 4 4 4 4 4 4 f f 4 . . 
        . 4 4 4 1 f 4 4 4 4 f 1 4 4 4 . 
        . 4 4 4 1 f f f f f f 1 4 4 4 . 
        4 4 4 4 1 f 1 4 4 1 f 1 4 4 4 4 
        4 4 4 4 1 1 1 4 4 1 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 7 7 7 7 7 7 4 4 4 4 . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . e e 7 7 7 7 7 7 7 7 . . . . 
        . e e e e e 7 7 7 7 7 e e . . . 
        . e e e e e e 7 7 7 e e e . . . 
        . . e e e e e . . e e e . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 f f 4 4 4 4 4 4 f f 4 . . 
        . 4 4 4 1 f 4 4 4 4 f 1 4 4 4 . 
        . 4 4 4 1 f f f f f f 1 4 4 4 . 
        4 4 4 4 1 f 1 4 4 1 f 1 4 4 4 4 
        4 4 4 4 1 1 1 4 4 1 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 7 7 7 7 7 7 4 4 4 4 . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 7 e e . . 
        . . . e e 7 7 7 7 7 e e e e e . 
        . . . e e e 7 7 7 e e e e e e . 
        . . . . e e e . . e e e e e . . 
        `],
    150,
    true
    )
})
game.onUpdateInterval(2000, function () {
    red_koopa = sprites.create(assets.image`koopa`, SpriteKind.Enemy)
    red_koopa.setPosition(160, randint(0, 115))
    red_koopa.setVelocity(-150, 0)
    red_koopa.setFlag(SpriteFlag.AutoDestroy, true)
    animation.runImageAnimation(
    red_koopa,
    assets.animation`red koopa walk`,
    100,
    true
    )
})
game.onUpdateInterval(1000, function () {
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet right`, Mickey_mouse, 125, 0)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet left`, Mickey_mouse, -100, 0)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet down`, Mickey_mouse, 0, 100)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet up`, Mickey_mouse, 0, -100)
})
game.onUpdateInterval(1000, function () {
    koopa = sprites.create(assets.image`koopa`, SpriteKind.Enemy)
    koopa.setPosition(160, randint(0, 115))
    koopa.setVelocity(-50, 0)
    koopa.setFlag(SpriteFlag.AutoDestroy, true)
    animation.runImageAnimation(
    koopa,
    assets.animation`koopa walk`,
    200,
    true
    )
})
forever(function () {
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet up`, luigi, 100, -100)
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet`, luigi, 100, 0)
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet down`, luigi, 100, 100)
    pause(2000)
})
forever(function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
forever(function () {
    scroller.scrollBackgroundWithSpeed(-112.5, 0)
})
game.onUpdateInterval(500, function () {
    goomba = sprites.create(assets.image`goomba`, SpriteKind.Enemy)
    goomba.setPosition(160, randint(0, 115))
    goomba.setVelocity(-100, 0)
    goomba.setFlag(SpriteFlag.AutoDestroy, true)
    animation.runImageAnimation(
    goomba,
    assets.animation`goomba walk`,
    150,
    true
    )
})
game.onUpdateInterval(0, function () {
    sprites.destroy(mario)
    mario = sprites.create(assets.image`Morpho`, SpriteKind.Player)
    info.setLife(2018)
    info.setScore(2018)
    controller.moveSprite(mario)
})
