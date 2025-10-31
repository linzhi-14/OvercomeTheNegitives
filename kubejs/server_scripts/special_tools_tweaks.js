let tick = 0

const tools = {
    "wand_of_freezing":55,
    "dark_scythe":60,
    "dark_metal_scythe":64,
    "death_scythe":72,
    "ceraunus":100,
    "the_incinerator":121,
    "soul_render":144
}
const tools_keys = Object.keys(tools) //物品键列表

//针对没有属性的特殊工具进行修改
PlayerEvents.tick(event => {
    if (tick <= 60){
        tick += 1
    }
    else{
        tick = 0
    }
    const player = event.player
    if (tick == 1){
        let Item = String(player.mainHandItem).substring(2) //获取主手物品id
        if(tools_keys.includes(Item)){
            if(player.getAttributeBaseValue("minecraft:generic.attack_damage") != tools[Item])
            {
                for(const [id, damage] of Object.entries(tools)){
                    if(Item == id){
                        player.setAttributeBaseValue("minecraft:generic.attack_damage", damage)
                    }
                }
            }
        }
        else if(player.getAttributeBaseValue("minecraft:generic.attack_damage") != 1){
            if (event.hasGameStage("e_weakness_a") == false && event.hasGameStage("e_weakness_b") == false  && event.hasGameStage("e_weakness_c") == false )
            (player.setAttributeBaseValue("minecraft:generic.attack_damage", 1))
        }
    }
})
