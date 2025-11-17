//实体清理列表
const entity_to_kill = [
    "minecraft:arrow",
    "aether:ice_crystal",
    "iceandfire:ice_dragon_charge",
    "iceandfire:fire_dragon_charge",
    "iceandfire:lightning_dragon_charge",
    "abstract_summoned_sword",
    "cataclysm:coral_spear",
    "enigmaticlegacy:permanent_item_entity",
    "minecraft:skeleton",
    "minecraft:creeper",
    "minecraft:zombie",
    "minecraft:trident",
    "goety:web_shot",
    "minecraft:potion",
    "iter_rpg:droplet_projectile_projectile",
    "insanelib:area_effect_cloud_3d",
    "cataclysm:sandstorm_projectile",
    "l2hostility:hostility_charge",
    "l2hostility:hostility_bullet",
    "minecraft:shulker_bullet",
    "minecraft:experience_orb",
    "iceandfire:ghost_sword",
    "minecraft:snowball",
    "minecraft:falling_block",
    "enhancedai:thrown_web",
    "goety:snap_fungus",
    "enhancedai:fishing_hook",
    "minecraft:marker",
    "item"
]

//清除周期，以分钟为单位，可自行配置，30分钟一次则为30，两个小时则为120
const CLEAR_CYCLE_MINUTE = 30  //只能设置大于1的整数

let server_tick = 0
let server_second = 0
let server_minute = 0
ServerEvents.tick(event => {
    //计时器
    server_tick += 1
    if (server_tick % 20 == 0){
        server_second += 1
    }
    if (server_second == 60){
        server_second = 0
        server_minute += 1
    }
    if (server_minute == CLEAR_CYCLE_MINUTE){
        server_minute = 0
    }
    if (server_tick == 200){
        server_tick = 0
    }


    //服务器废物清理提醒
    if(server_minute == CLEAR_CYCLE_MINUTE / 2) {
        if (server_tick % 20 == 0){
            if(server_second == 0) {
                event.server.runCommandSilent('say 还有15秒扫地妈妈到达现场！')
            }
            else if(server_second == 15) {
                event.server.runCommandSilent('say 还有5秒就要清除掉落物了喵')
            }
            else if(server_second == 17) {
                event.server.runCommandSilent('say 3！')
            }
            else if(server_second == 18) {
                event.server.runCommandSilent('say 2！')
            }
            else if(server_second == 19) {
                event.server.runCommandSilent('say 1！')
            }
            else if(server_second == 20) {
                entity_to_kill.forEach(entity => {
                    event.server.runCommandSilent("kill @e[type=" + entity + "]")
                })
                event.server.runCommandSilent('say 没用的掉落物和实体全部吃掉了喵')
            }
        }
    }
})