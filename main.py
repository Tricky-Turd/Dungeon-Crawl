music.play(music.string_playable("G B A G C5 B A B ", 120),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
    sprites.create(img("""
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 1 f d d f 1 4 e e f .
            . . f e e d d d d d d e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            """),
        SpriteKind.player))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
    sprites.create(img("""
            . . . . . . f f f f . . . . . .
            . . . . f f f 8 8 f f f . . . .
            . . . f f f 8 8 8 8 f f f . . .
            . . f f f 9 9 9 9 9 9 f f f . .
            . . f f 9 8 8 8 8 8 8 9 9 f . .
            . . f 9 8 f f f f f f 8 9 f . .
            . . f f f f 9 9 9 9 f f f f . .
            . f f 9 f b f 4 4 f b f 9 f f .
            . f 9 9 4 1 f d d f 1 4 9 9 f .
            . . f 9 9 d d d d d d 9 9 f . .
            . . . f 9 9 4 4 4 4 9 9 f . . .
            . . e 4 f 8 8 8 8 8 8 f 4 e . .
            . . 4 d f 8 8 8 8 8 8 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            """),
        SpriteKind.player))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.THREE),
    sprites.create(img("""
            . . . . . . f f f f . . . . . .
            . . . . f f f 5 5 f f f . . . .
            . . . f f f 5 5 5 5 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 5 5 5 5 5 5 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 1 f d d f 1 4 e e f .
            . . f e e d d d d d d e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 5 5 5 5 5 5 f 4 e . .
            . . 4 d f 5 5 5 5 5 5 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            """),
        SpriteKind.player))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.THREE))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.FOUR),
    sprites.create(img("""
            . . . . . . f f f f . . . . . .
            . . . . f f f 7 7 f f f . . . .
            . . . f f f 7 7 7 7 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 7 7 7 7 7 7 e e f . .
            . . f e 7 f f f f f f 7 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 1 f d d f 1 4 e e f .
            . . f e e d d d d d d e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 7 7 7 7 7 7 f 4 e . .
            . . 4 d f 7 7 7 7 7 7 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            """),
        SpriteKind.player))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.FOUR))