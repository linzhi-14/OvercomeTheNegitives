let curios_buy = [
    "charm",
    "necklace",
    "hands",
    "body",
    "feet",
    "ring",
    "back",
    "head",
    "belt",
    "hostility_curse"
]

PlayerEvents.tick(event => {
    const player = event.player
    curios_buy.forEach(curios => {
        if (event.hasGameStage(curios) == true){
            let name = player.name.getString()
            event.server.runCommandSilent("curios add " + curios + " "+ name +" 1")
            event.removeGameStage(curios)
        }
    })
})