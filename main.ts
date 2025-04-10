enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const EX = SpriteKind.create()
    export const Morpho = SpriteKind.create()
    export const Mickey = SpriteKind.create()
    export const BossProjectile = SpriteKind.create()
    export const Turret = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(luigi, effects.disintegrate, 1000)
    luigi = sprites.createProjectileFromSprite(assets.image`luigi`, mario, 0, 0)
    luigi.setKind(SpriteKind.Turret)
    animation.runImageAnimation(
    luigi,
    assets.animation`luigi blink`,
    500,
    true
    )
})
sprites.onCreated(SpriteKind.Morpho, function (sprite) {
    EX = sprites.create(assets.image`EX`, SpriteKind.EX)
    EX.setPosition(140, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    EX_Bullet_1.destroy(effects.ashes, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EX, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
    EX_Health += -1
    scene.cameraShake(4, 500)
    animation.runImageAnimation(
    EX,
    [img`
        .........................
        .........ff....ff........
        ........fcf...fcf........
        .......fccf..fccf........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fcccfffcccff.......
        .ff...fcccfcfcccfcf...ff.
        f66fffcfcccfcfcccfcfff66f
        f66fcfcfcccfcfcccfcfcf66f
        f66fffcccccccccccccfff66f
        .fffafcc111f111ccccfafff.
        ...fafcc1f1f1f1ccccfaf...
        ....ffcc1f1f1f1ccccff....
        .....fcc111f111ccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        ..fffffcccfffcccccf......
        ..fccffffffffffffffff....
        ..fccccfffffffffffccf....
        ...fccf.........fcccf....
        ....ff..........fccf.....
        .................ff......
        .........................
        `,img`
        .........................
        .........ff....ff........
        ........fcf...fcf........
        .......fccf..fccf........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fcccfffcccff.......
        .ff...fcccfcfcccfcf...ff.
        f66fffcfcccfcfcccfcfff66f
        f66fcfcfcccfcfcccfcfcf66f
        f66fffcccccccccccccfff66f
        .fffafcc111f111ccccfafff.
        ...fafcc1f1f1f1ccccfaf...
        ....ffcc1f1f1f1ccccff....
        .....fcc111f111ccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        .....fccccfffcccccffff...
        ...ffffffffffffffffccf...
        ...fccfffffffffffccccf...
        ...fcccf.........fccf....
        ....fccf..........ff.....
        .....ff..................
        .........................
        `,img`
        .........................
        .........ff....ff........
        ........fcf...fcf........
        .......fccf..fccf........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fcccfffcccff.......
        .ff...fcccfcfcccfcf...ff.
        f66fffcfcccfcfcccfcfff66f
        f66fcfcfcccfcfcccfcfcf66f
        f66fffcccccccccccccfff66f
        .fffafcc111f111ccccfafff.
        ...fafcc1f1f1f1ccccfaf...
        ....ffcc1f1f1f1ccccff....
        .....fcc111f111ccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        ..fffffcccfffcccccf......
        ..fccffffffffffffffff....
        ..fccccfffffffffffccf....
        ...fccf.........fcccf....
        ....ff..........fccf.....
        .................ff......
        .........................
        `,img`
        .........................
        .........ff....ff........
        ........fcf...fcf........
        .......fccf..fccf........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fcccfffcccff.......
        .ff...fcccfcfcccfcf...ff.
        f66fffcfcccfcfcccfcfff66f
        f66fcfcfcccfcfcccfcfcf66f
        f66fffcccccccccccccfff66f
        .fffafcc111f111ccccfafff.
        ...fafcc1f1f1f1ccccfaf...
        ....ffcc1f1f1f1ccccff....
        .....fcc111f111ccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        .....fccccfffccccccf.....
        .....fccccfffcccccffff...
        ...ffffffffffffffffccf...
        ...fccfffffffffffccccf...
        ...fcccf.........fccf....
        ....fccf..........ff.....
        .....ff..................
        .........................
        `,img`
        .........................
        .........ff....ff........
        ........fcf...fcf........
        .......fccf..fccf........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fccf..fccf.........
        ......fcccfffcccff.......
        ......fcccfcfcccfcf......
        .....fcfcccfcfcccfcf.....
        .f...fcfcccfcfcccfcf..f..
        .fffffcccccccccccccffff..
        .fcccfcc1fff1fcccccfccf..
        ..fccfccf1f1fffccccfcf...
        ...fffccf1f1fffccccff....
        ...f8fcccfffffcccccff....
        ..ff8fccccfffccccccffff..
        .fddffccccfffccccccffddf.
        .fddffccccfffccccccffddf.
        ..ff..fcccfffcccccf..ff..
        .......fffffffffff.......
        ........ffffffff.........
        .........fccfccf.........
        .........fccfccf.........
        .........fccfccf.........
        ..........ff.ff..........
        `],
    500,
    false
    )
    pause(5000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 200, 0)
})
info.onLifeZero(function () {
    mario.destroy(effects.halo, 1000)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Turret, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 2000)
    info.changeScoreBy(1)
    otherSprite.setVelocity(0, 50)
    otherSprite.setBounceOnWall(false)
    scene.cameraShake(4, 500)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    pause(5000)
})
let goomba: Sprite = null
let Morpho2: Sprite = null
let Butterfly: Sprite = null
let blue_koopa: Sprite = null
let EX_Bullet_3: Sprite = null
let EX_Bullet_2: Sprite = null
let koopa: Sprite = null
let enemy_bullet: Sprite = null
let red_koopa: Sprite = null
let galoomba: Sprite = null
let randomNumber = 0
let Mickey_mouse: Sprite = null
let bullet: Sprite = null
let EX_Bullet_1: Sprite = null
let EX: Sprite = null
let luigi: Sprite = null
let mario: Sprite = null
let EX_Health = 2000
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
game.onUpdateInterval(15000, function () {
    Mickey_mouse = sprites.create(assets.image`why are there two`, SpriteKind.Mickey)
    Mickey_mouse.setPosition(0, randint(0, 115))
    Mickey_mouse.setVelocity(50, 0)
})
game.onUpdateInterval(2500, function () {
    randomNumber = 2018
    if (randomNumber != 2018) {
        pause(5000)
        randomNumber = Math.randomRange(0, 2500)
        pause(10000000000000000)
    }
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
    if (EX_Health <= 1999) {
        EX.setPosition(76, 55)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 0)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, -50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 50, -50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 50, 50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 50, 0)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, 50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, -50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, -50)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, -50)
        EX_Bullet_1.setKind(SpriteKind.BossProjectile)
        pause(2000)
    }
})
forever(function () {
    if (randomNumber == 2018) {
        if (EX_Health <= 1999) {
            pause(10000000000000000)
        }
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 50)
        EX_Bullet_2 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 0)
        EX_Bullet_3 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, -50)
        EX_Bullet_1.setKind(SpriteKind.BossProjectile)
        EX_Bullet_2.setKind(SpriteKind.BossProjectile)
        EX_Bullet_3.setKind(SpriteKind.BossProjectile)
        pause(500)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, -25)
        EX_Bullet_2 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 25)
        EX_Bullet_1.setKind(SpriteKind.BossProjectile)
        EX_Bullet_2.setKind(SpriteKind.BossProjectile)
        pause(750)
    }
})
forever(function () {
    pause(5000)
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
forever(function () {
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet up`, luigi, 100, -100)
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet`, luigi, 100, 0)
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet down`, luigi, 100, 100)
    pause(2000)
})
forever(function () {
    scroller.scrollBackgroundWithSpeed(-112.5, 0)
})
forever(function () {
    if (randomNumber == 2018) {
        Butterfly = sprites.createProjectileFromSprite(assets.image`Butterfly`, Morpho2, 50, 0)
        animation.runImageAnimation(
        Butterfly,
        assets.animation`butter fly`,
        150,
        true
        )
        pause(2000)
    }
})
forever(function () {
    if (randomNumber == 2018) {
        randomNumber = 2017
        pause(10000000000000000)
    }
})
forever(function () {
    if (randomNumber == 2018) {
        pause(1000)
        Morpho2 = sprites.create(assets.image`Morpho`, SpriteKind.Morpho)
        info.setLife(2018)
        info.setScore(2018)
        Morpho2.follow(mario)
        pause(10000000000000000)
    }
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
