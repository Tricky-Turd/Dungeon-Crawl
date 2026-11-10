namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
music.play(music.stringPlayable("E B C5 A B G A F ", 247), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`space`)
splitScreen.setSplitScreenEnabled(false)
let CameraAnchor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Camera)
scene.cameraFollowSprite(CameraAnchor)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
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
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
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
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
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
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(randint(10, 151), randint(13, 107))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(randint(10, 151), randint(13, 107))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(randint(10, 151), randint(13, 107))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(randint(10, 151), randint(13, 107))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 3)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 3)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Three), MultiplayerState.life, 3)
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Four), MultiplayerState.life, 3)
game.onUpdate(function () {
    CameraAnchor.x = (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x + mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x) / 2
    CameraAnchor.y = (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y + mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y) / 2
})
