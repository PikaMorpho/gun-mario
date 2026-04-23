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
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const ParagoombaProjectile = SpriteKind.create()
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
    if (info.score() >= 20) {
        sprites.destroy(minniemouse, effects.disintegrate, 1000)
        minniemouse = sprites.createProjectileFromSprite(assets.image`Minnie Mouse`, mario, 25, 0)
        minniemouse.setKind(SpriteKind.Turret)
    }
})
sprites.onCreated(SpriteKind.Morpho, function (sprite) {
    EX = sprites.create(assets.image`EX`, SpriteKind.EX)
    EX.setPosition(140, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    EX_Bullet_1.destroy(effects.ashes, 500)
    EX_Bullet_2.destroy(effects.ashes, 500)
    EX_Bullet_3.destroy(effects.ashes, 500)
    EX_Bullet_4.destroy(effects.ashes, 500)
    EX_Bullet_5.destroy(effects.ashes, 500)
    EX_Bullet_6.destroy(effects.ashes, 500)
    EX_Bullet_7.destroy(effects.ashes, 500)
    EX_Bullet_8.destroy(effects.ashes, 500)
    EX_Bullet_9.destroy(effects.ashes, 500)
    EX_Bullet_10.destroy(effects.ashes, 500)
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
    if (info.score() >= 3) {
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 200, 30)
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 200, -30)
    }
    if (info.score() >= 6) {
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 400, 15)
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 400, 15)
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 400, 40)
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 400, -40)
    }
    if (info.score() >= 10) {
        bullet = sprites.createProjectileFromSprite(assets.image`Big Bullet`, mario, 100, 0)
    }
    if (info.score() >= 20) {
    	
    }
    if (info.score() >= 50) {
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 200, 30)
        bullet = sprites.createProjectileFromSprite(assets.image`mario bullet`, mario, 200, -30)
    }
})
sprites.onOverlap(SpriteKind.Mickey, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 2000)
    info.changeScoreBy(1)
    otherSprite.setVelocity(0, 50)
    otherSprite.setBounceOnWall(false)
    scene.cameraShake(4, 500)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    if (Timer >= 5) {
        info.changeScoreBy(1)
        Paragoomba_Health2 += -1
        scene.cameraShake(4, 500)
        sprite.destroy(effects.fire, 2000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ParagoombaProjectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    if (Timer >= 5) {
        info.changeScoreBy(1)
        Paragoomba_Health += -1
        scene.cameraShake(4, 500)
        sprite.destroy(effects.fire, 2000)
    }
})
info.onLifeZero(function () {
    mario.destroy(effects.halo, 1000)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    pause(5000)
})
sprites.onOverlap(SpriteKind.Turret, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ParagoombaProjectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 2000)
    info.changeScoreBy(1)
    otherSprite.setVelocity(0, 50)
    otherSprite.setBounceOnWall(false)
    scene.cameraShake(4, 500)
    pause(5000)
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
let Mini_Goomba: Sprite = null
let Paragoomba2: Sprite = null
let Paragoomba: Sprite = null
let Paragoomba_Spawn_Decider = 0
let enemy_bullet: Sprite = null
let Morpho2: Sprite = null
let Butterfly: Sprite = null
let MorphoTrigger = 0
let blue_koopa: Sprite = null
let koopa: Sprite = null
let red_koopa: Sprite = null
let galoomba: Sprite = null
let Mickey_mouse: Sprite = null
let Paragoomba_Health = 0
let Paragoomba_Health2 = 0
let Timer = 0
let bullet: Sprite = null
let EX_Bullet_10: Sprite = null
let EX_Bullet_9: Sprite = null
let EX_Bullet_8: Sprite = null
let EX_Bullet_7: Sprite = null
let EX_Bullet_6: Sprite = null
let EX_Bullet_5: Sprite = null
let EX_Bullet_4: Sprite = null
let EX_Bullet_3: Sprite = null
let EX_Bullet_2: Sprite = null
let EX_Bullet_1: Sprite = null
let EX: Sprite = null
let minniemouse: Sprite = null
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
game.onUpdateInterval(375, function () {
	
})
game.onUpdateInterval(2500, function () {
	
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
    Timer += 1
})
// MORPHO SPAWNER DOES NOT WORK, PLS FIX
game.onUpdateInterval(1000, function () {
	
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
    if (EX_Health < 1999) {
        EX.setPosition(75, 55)
        EX_Bullet_1 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 50)
        EX_Bullet_2 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, 0)
        EX_Bullet_3 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, -50, -50)
        EX_Bullet_4 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 50, -50)
        EX_Bullet_5 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 50, 50)
        EX_Bullet_6 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 50, 0)
        EX_Bullet_7 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, 50)
        EX_Bullet_8 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, -50)
        EX_Bullet_9 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, -50)
        EX_Bullet_10 = sprites.createProjectileFromSprite(assets.image`EX Attack`, EX, 0, -50)
        EX_Bullet_1.setKind(SpriteKind.BossProjectile)
        EX_Bullet_2.setKind(SpriteKind.BossProjectile)
        EX_Bullet_3.setKind(SpriteKind.BossProjectile)
        EX_Bullet_4.setKind(SpriteKind.BossProjectile)
        EX_Bullet_5.setKind(SpriteKind.BossProjectile)
        EX_Bullet_6.setKind(SpriteKind.BossProjectile)
        EX_Bullet_7.setKind(SpriteKind.BossProjectile)
        EX_Bullet_8.setKind(SpriteKind.BossProjectile)
        EX_Bullet_9.setKind(SpriteKind.BossProjectile)
        EX_Bullet_10.setKind(SpriteKind.BossProjectile)
        pause(2000)
    }
    if (EX_Health >= 1999) {
        pause(10000000000000000)
    }
})
forever(function () {
    if (EX_Health >= 1999) {
        pause(10000000000000000)
    }
    if (EX_Health < 1999) {
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
    scroller.scrollBackgroundWithSpeed(-112.5, 0)
})
forever(function () {
    if (MorphoTrigger == 1) {
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
    if (info.score() < 40) {
        pause(375)
    }
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet right`, minniemouse, 150, 0)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet left`, minniemouse, -150, 0)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet down`, minniemouse, 0, 150)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet up`, minniemouse, 0, -150)
    if (info.score() >= 40) {
        pause(187.5)
        enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet right`, minniemouse, 150, 0)
        enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet right`, minniemouse, 150, 0)
        enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet down`, minniemouse, 0, 150)
        enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet up`, minniemouse, 0, -150)
    }
})
forever(function () {
    if (info.score() < 10) {
        pause(1000)
    }
    if (info.score() >= 10) {
        pause(250)
    }
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet right`, Mickey_mouse, 125, 0)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet left`, Mickey_mouse, -100, 0)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet down`, Mickey_mouse, 0, 100)
    enemy_bullet = sprites.createProjectileFromSprite(assets.image`mickey bullet up`, Mickey_mouse, 0, -100)
})
forever(function () {
    if (true) {
    	
    }
})
forever(function () {
    if (MorphoTrigger == 1) {
        pause(1000)
        Morpho2 = sprites.create(assets.image`Morpho`, SpriteKind.Morpho)
        Morpho2.follow(mario)
        pause(100000000000000000)
    }
})
forever(function () {
    pause(4500)
    Paragoomba_Spawn_Decider = randint(1, 2)
})
forever(function () {
    if (Paragoomba_Health <= 0) {
        sprites.destroy(Paragoomba, effects.fire, 2000)
    }
})
forever(function () {
    if (Timer >= 5) {
        if (Paragoomba_Spawn_Decider == 1) {
            pauseUntil(() => Paragoomba_Health <= 0)
            Paragoomba_Health = 5
            Paragoomba = sprites.create(assets.image`Paragoomba`, SpriteKind.Enemy2)
            animation.runImageAnimation(
            Paragoomba,
            [img`
                .....dd.......eeee.......dd.....
                ....dd1ddd...eeeeee...ddd1dd....
                ....d1d111d.eeeeeeee.d111d1d....
                ....d11d111eeeeeeeeee111d11d....
                .....d1111effeeeeeeffe1111d.....
                ......d11eee1feeeef1eee11d......
                ....dd111eee1ffffff1eee111dd....
                ...dd111eeee1f1ee1f1eeee111dd...
                ...d1d11eeee111ee111eeee11d1d...
                ....d1d1eeeeeeeeeeeeeeee1d1d....
                .....d111eeeeddddddeeee111d.....
                ......dddd..dddddddd..dddd......
                ..........ffdddddddd............
                .........fffffdddddff...........
                .........ffffffdddfff...........
                ..........fffff..fff............
                `,img`
                .....dd.......eeee.......dd.....
                ....dd1ddd...eeeeee...ddd1dd....
                ....d1d111d.eeeeeeee.d111d1d....
                ....d11d111eeeeeeeeee111d11d....
                .....d1111effeeeeeeffe1111d.....
                ......d11eee1feeeef1eee11d......
                ....dd111eee1ffffff1eee111dd....
                ...dd111eeee1f1ee1f1eeee111dd...
                ...d1d11eeee111ee111eeee11d1d...
                ....d1d1eeeeeeeeeeeeeeee1d1d....
                .....d111eeeeddddddeeee111d.....
                ......dddd..dddddddd..dddd......
                ............ddddddddff..........
                ...........ffdddddfffff.........
                ...........fffdddffffff.........
                ............fff..fffff..........
                `],
            150,
            true
            )
            Paragoomba.setPosition(133, 16)
            Paragoomba_Spawn_Decider = 0
        }
    }
})
forever(function () {
    if (info.score() >= 60) {
        sprites.destroy(minniemouse, effects.disintegrate, 1000)
        minniemouse = sprites.createProjectileFromSprite(assets.image`Minnie Mouse`, luigi, 25, 0)
        minniemouse.setKind(SpriteKind.Turret)
        pause(7500)
    }
})
forever(function () {
    if (Paragoomba_Health2 <= 0) {
        sprites.destroy(Paragoomba2, effects.fire, 2000)
    }
})
forever(function () {
    if (Paragoomba_Health > 0) {
        if (Paragoomba_Health <= 5) {
            Mini_Goomba = sprites.createProjectileFromSprite(assets.image`Mini Goomba`, Paragoomba, 50, 50)
            Mini_Goomba.setKind(SpriteKind.ParagoombaProjectile)
            Mini_Goomba.follow(mario)
        }
    }
    pause(500)
})
forever(function () {
    if (Paragoomba_Spawn_Decider == 2) {
        pauseUntil(() => Paragoomba_Health2 <= 0)
        Paragoomba_Health2 = 5
        Paragoomba2 = sprites.create(assets.image`Paragoomba`, SpriteKind.Enemy3)
        animation.runImageAnimation(
        Paragoomba2,
        [img`
            .....dd.......eeee.......dd.....
            ....dd1ddd...eeeeee...ddd1dd....
            ....d1d111d.eeeeeeee.d111d1d....
            ....d11d111eeeeeeeeee111d11d....
            .....d1111effeeeeeeffe1111d.....
            ......d11eee1feeeef1eee11d......
            ....dd111eee1ffffff1eee111dd....
            ...dd111eeee1f1ee1f1eeee111dd...
            ...d1d11eeee111ee111eeee11d1d...
            ....d1d1eeeeeeeeeeeeeeee1d1d....
            .....d111eeeeddddddeeee111d.....
            ......dddd..dddddddd..dddd......
            ..........ffdddddddd............
            .........fffffdddddff...........
            .........ffffffdddfff...........
            ..........fffff..fff............
            `,img`
            .....dd.......eeee.......dd.....
            ....dd1ddd...eeeeee...ddd1dd....
            ....d1d111d.eeeeeeee.d111d1d....
            ....d11d111eeeeeeeeee111d11d....
            .....d1111effeeeeeeffe1111d.....
            ......d11eee1feeeef1eee11d......
            ....dd111eee1ffffff1eee111dd....
            ...dd111eeee1f1ee1f1eeee111dd...
            ...d1d11eeee111ee111eeee11d1d...
            ....d1d1eeeeeeeeeeeeeeee1d1d....
            .....d111eeeeddddddeeee111d.....
            ......dddd..dddddddd..dddd......
            ............ddddddddff..........
            ...........ffdddddfffff.........
            ...........fffdddffffff.........
            ............fff..fffff..........
            `],
        150,
        true
        )
        Paragoomba2.setPosition(133, 99)
        Paragoomba_Spawn_Decider = 0
    }
})
forever(function () {
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet up`, luigi, 100, -100)
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet`, luigi, 100, 0)
    bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet down`, luigi, 100, 100)
    if (info.score() >= 1.5) {
        bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet down`, luigi, 100, 50)
        bullet = sprites.createProjectileFromSprite(assets.image`luigi bullet up`, luigi, 100, -50)
    }
    if (info.score() >= 4.5) {
        if (info.score() < 18) {
            pause(1000)
        }
    } else {
        pause(2000)
    }
    if (info.score() >= 18) {
        pause(375)
    }
})
forever(function () {
    if (Paragoomba_Health2 > 0) {
        if (Paragoomba_Health2 <= 5) {
            Mini_Goomba = sprites.createProjectileFromSprite(assets.image`Mini Goomba`, Paragoomba2, 50, 50)
            Mini_Goomba.setKind(SpriteKind.ParagoombaProjectile)
            Mini_Goomba.follow(mario)
        }
    }
    pause(500)
})
forever(function () {
	
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
