class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
@namespace
class SpriteKind:
    EX = SpriteKind.create()
    Morpho = SpriteKind.create()
    Mickey = SpriteKind.create()
    BossProjectile = SpriteKind.create()
    Turret = SpriteKind.create()

def on_b_pressed():
    global luigi
    sprites.destroy(luigi, effects.disintegrate, 1000)
    luigi = sprites.create_projectile_from_sprite(assets.image("""
        luigi
        """), mario, 0, 0)
    luigi.set_kind(SpriteKind.Turret)
    animation.run_image_animation(luigi,
        assets.animation("""
            luigi blink
            """),
        500,
        True)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_created(sprite):
    global EX2, bossHealth
    EX2 = sprites.create(assets.image("""
        EX
        """), SpriteKind.EX)
    EX2.set_position(140, 55)
    bossHealth = 100
sprites.on_created(SpriteKind.Morpho, on_on_created)

def on_on_overlap(sprite2, otherSprite):
    EX_Bullet: Sprite = None
    EX_Bullet.destroy(effects.ashes, 500)
    scene.camera_shake(4, 500)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.BossProjectile, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    sprite3.destroy(effects.disintegrate, 500)
    info.change_score_by(1)
    scene.camera_shake(4, 500)
    animation.run_image_animation(EX2,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        False)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.EX, on_on_overlap2)

def on_a_pressed():
    global bullet
    bullet = sprites.create_projectile_from_sprite(assets.image("""
        mario bullet
        """), mario, 200, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_life_zero():
    mario.destroy(effects.halo, 1000)
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap3(sprite4, otherSprite3):
    sprite4.destroy(effects.ashes, 500)
    otherSprite3.destroy(effects.ashes, 500)
    scene.camera_shake(4, 500)
sprites.on_overlap(SpriteKind.Turret, SpriteKind.BossProjectile, on_on_overlap3)

def on_on_created2(sprite5):
    pass
sprites.on_created(SpriteKind.EX, on_on_created2)

def on_on_overlap4(sprite6, otherSprite4):
    otherSprite4.destroy(effects.fire, 2000)
    info.change_score_by(1)
    otherSprite4.set_velocity(0, 50)
    otherSprite4.set_bounce_on_wall(False)
    scene.camera_shake(4, 500)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap4)

def on_on_overlap5(sprite7, otherSprite5):
    otherSprite5.destroy(effects.fire, 500)
    scene.camera_shake(4, 500)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap5)

goomba: Sprite = None
Morpho2: Sprite = None
Butterfly: Sprite = None
blue_koopa: Sprite = None
koopa: Sprite = None
enemy_bullet: Sprite = None
red_koopa: Sprite = None
galoomba: Sprite = None
Mickey_mouse: Sprite = None
randomNumber = 0
bullet: Sprite = None
bossHealth = 0
EX2: Sprite = None
luigi: Sprite = None
mario: Sprite = None
mario = sprites.create(assets.image("""
    mario
    """), SpriteKind.player)
controller.move_sprite(mario, 200, 200)
mario.set_stay_in_screen(True)
info.set_life(3)
scene.set_background_image(assets.image("""
    sky
    """))
animation.run_image_animation(mario,
    assets.animation("""
        mario blink
        """),
    500,
    True)

def on_update_interval():
    global randomNumber
    randomNumber = Math.random_range(0, 5000)
game.on_update_interval(5000, on_update_interval)

def on_update_interval2():
    global Mickey_mouse
    Mickey_mouse = sprites.create(assets.image("""
            why are there two
            """),
        SpriteKind.Mickey)
    Mickey_mouse.set_position(0, randint(0, 115))
    Mickey_mouse.set_velocity(50, 0)
game.on_update_interval(15000, on_update_interval2)

def on_update_interval3():
    global galoomba
    galoomba = sprites.create(assets.image("""
        galoomba
        """), SpriteKind.enemy)
    galoomba.set_position(160, randint(0, 115))
    galoomba.set_velocity(-100, 0)
    galoomba.set_flag(SpriteFlag.AUTO_DESTROY, True)
    galoomba.set_bounce_on_wall(True)
    animation.run_image_animation(galoomba,
        [img("""
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
                """),
            img("""
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
                """)],
        150,
        True)
game.on_update_interval(2500, on_update_interval3)

def on_update_interval4():
    global red_koopa
    red_koopa = sprites.create(assets.image("""
        koopa
        """), SpriteKind.enemy)
    red_koopa.set_position(160, randint(0, 115))
    red_koopa.set_velocity(-150, 0)
    red_koopa.set_flag(SpriteFlag.AUTO_DESTROY, True)
    animation.run_image_animation(red_koopa,
        assets.animation("""
            red koopa walk
            """),
        100,
        True)
game.on_update_interval(2000, on_update_interval4)

def on_update_interval5():
    global enemy_bullet
    enemy_bullet = sprites.create_projectile_from_sprite(assets.image("""
            mickey bullet right
            """),
        Mickey_mouse,
        125,
        0)
    enemy_bullet = sprites.create_projectile_from_sprite(assets.image("""
            mickey bullet left
            """),
        Mickey_mouse,
        -100,
        0)
    enemy_bullet = sprites.create_projectile_from_sprite(assets.image("""
            mickey bullet down
            """),
        Mickey_mouse,
        0,
        100)
    enemy_bullet = sprites.create_projectile_from_sprite(assets.image("""
            mickey bullet up
            """),
        Mickey_mouse,
        0,
        -100)
game.on_update_interval(1000, on_update_interval5)

def on_update_interval6():
    global koopa
    koopa = sprites.create(assets.image("""
        koopa
        """), SpriteKind.enemy)
    koopa.set_position(160, randint(0, 115))
    koopa.set_velocity(-50, 0)
    koopa.set_flag(SpriteFlag.AUTO_DESTROY, True)
    animation.run_image_animation(koopa,
        assets.animation("""
            koopa walk
            """),
        200,
        True)
game.on_update_interval(1000, on_update_interval6)

def on_forever():
    global blue_koopa
    pause(5000)
    blue_koopa = sprites.create(assets.image("""
        koopa
        """), SpriteKind.enemy)
    blue_koopa.set_position(160, randint(0, 115))
    blue_koopa.set_flag(SpriteFlag.AUTO_DESTROY, True)
    blue_koopa.follow(mario, 150)
    animation.run_image_animation(blue_koopa,
        assets.animation("""
            blue koopa walk
            """),
        200,
        True)
forever(on_forever)

def on_forever2():
    global bullet
    bullet = sprites.create_projectile_from_sprite(assets.image("""
            luigi bullet up
            """),
        luigi,
        100,
        -100)
    bullet = sprites.create_projectile_from_sprite(assets.image("""
        luigi bullet
        """), luigi, 100, 0)
    bullet = sprites.create_projectile_from_sprite(assets.image("""
            luigi bullet down
            """),
        luigi,
        100,
        100)
    pause(2000)
forever(on_forever2)

def on_forever3():
    if True:
        pass
forever(on_forever3)

def on_forever4():
    game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
forever(on_forever4)

def on_forever5():
    scroller.scroll_background_with_speed(-112.5, 0)
forever(on_forever5)

def on_forever6():
    global Butterfly
    Butterfly = sprites.create_projectile_from_sprite(assets.image("""
        Butterfly
        """), Morpho2, 50, 0)
    animation.run_image_animation(Butterfly,
        assets.animation("""
            butter fly
            """),
        150,
        True)
    pause(5000)
forever(on_forever6)

def on_forever7():
    global Morpho2
    if randomNumber == 2018:
        pause(1000)
        Morpho2 = sprites.create(assets.image("""
            Morpho
            """), SpriteKind.Morpho)
        info.set_life(2018)
        info.set_score(2018)
        Morpho2.follow(mario)
forever(on_forever7)

def on_update_interval7():
    global goomba
    goomba = sprites.create(assets.image("""
        goomba
        """), SpriteKind.enemy)
    goomba.set_position(160, randint(0, 115))
    goomba.set_velocity(-100, 0)
    goomba.set_flag(SpriteFlag.AUTO_DESTROY, True)
    animation.run_image_animation(goomba,
        assets.animation("""
            goomba walk
            """),
        150,
        True)
game.on_update_interval(500, on_update_interval7)
