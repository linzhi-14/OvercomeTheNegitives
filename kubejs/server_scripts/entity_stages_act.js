var summon_ravaged_player_name = undefined

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}

EntityEvents.spawned(event => {
    let e = event.entity
    let e_name = e.getType()

    //蹂躏者
    if (e_name == "goety:ravaged") {
        let players = event.server.getPlayerList().players // 获取玩家列表
        let e_pos = e.getPosition(1.0)
        
        players.forEach(player => {
            let dist = player.getPosition(1.0).distanceTo(e_pos)
            if (dist <= 5.0){
                if (player.name.getString()){
                    summon_ravaged_player_name = player.name.getString()
                }
            }
        })
        
    }
})

PlayerEvents.tick(event => {
    if (summon_ravaged_player_name != undefined) {
        let player = event.player
        if (event.hasGameStage("event_spawned_ravaged") != true) {
            event.addGameStage("event_spawned_ravaged")
            player.tell("你成功生成了蹂躏者！")
            summon_ravaged_player_name = undefined
        }
    }
})