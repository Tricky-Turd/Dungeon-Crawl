tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 4 4 4 4 4 2 2 . . . . 
    . 2 2 2 2 4 4 4 4 4 2 2 2 2 . . 
    2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . 
    2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . 
    2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . 
    2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . 
    2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 . 
    2 2 2 2 4 4 4 4 4 4 4 4 2 2 2 . 
    2 2 2 2 4 4 4 4 4 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
