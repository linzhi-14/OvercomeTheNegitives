const weapon_functions_list = [
    ["savage_and_ravage:wand_of_freezing", "out", "l2complements:frozen", 150, 0, 1],
    ["divinerpg:eden_shickaxe", "out", "minecraft:poison", 300, 10, 1],
    ["infinite_abyss:violet_diamond_sword", "in", "minecraft:absorption", 50, 1, 1],
    ["iter_rpg:earth_sword", "in", "l2complements:emerald_splash", 50, 1, 3],
    ["divinerpg:divine_sword", "out", "eeeabsmobs:vertigo_effect", 50, 1, 2],
    ["divinerpg:eden_blade", "in", "farmersdelight:nourishment", 50, 0, 2],
    ["iter_rpg:golden_spear", "in", "eeeabsmobs:frenzy_effect", 400, 1, 1],
    ["minecraft:netherite_sword", "in", "ars_nouveau:shielding", 75, 1, 2],
    ["l2complements:sculkium_sword", "in", "attributeslib:knowledge", 100, 2, 1],
    ["enigmaticaddons:dragon_bow", "out", "ars_nouveau:blasting", 25, 4, 1],
    ["divinerpg:ender_sword", "out", "minecraft:wither", 100, 1, 2],
    ["aether:zanite_sword", "out", "minecraft:levitation", 100, 0, 1],
    ["aether:zanite_sword", "out", "minecraft:poison", 150, 10, 1],
    ["iter_rpg:elemental_sword", "in", "attributeslib:vitality", 50, 1, 1],
    ["iter_rpg:elemental_sword", "in", "l2complements:emerald_splash", 50, 2, 3],
    ["iter_rpg:void_sword", "out", "l2complements:stone_cage", 50, 1, 1],
    ["l2complements:shulkerate_sword", "out", "minecraft:weakness", 50, 2, 1],
    ["iceandfire:dread_queen_sword", "in", "minecraft:luck", 1000, 4, 1],
    ["iceandfire:dragonsteel_fire_sword", "in", "ars_nouveau:recovery", 500, 2, 1],
    ["iceandfire:dragonsteel_ice_sword", "in", "ars_nouveau:recovery", 500, 2, 1],
    ["iceandfire:dragonsteel_lightning_sword", "in", "ars_nouveau:recovery", 500, 2, 1],
    ["goety:dark_scythe", "out", "attributeslib:sundering", 50, 1, 1],
    ["goety:dark_metal_scythe", "out", "attributeslib:sundering", 100, 3, 1]
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

EntityEvents.hurt(event => {
    if(event.source.actual && event.source.actual.isPlayer() == true){
        let hurted_entity = event.getEntity()
        let source_type = event.source.getType()

        let player = event.source.player
        let main_hand_weapon = player.getMainHandItem().getId()

        //特殊武器效果的实施
        for(const [weapon_name, effect_on, effect_name, duration, amplifier, max_probability_number] of weapon_functions_list){
            if(main_hand_weapon == weapon_name){
                let random_number = getRandomInt(max_probability_number) //最大可能数越大，概率越小，当为1时，必定触发
                if (random_number == 0){
                    if (effect_on == "out"){//对攻击对象
                        hurted_entity.potionEffects.add(effect_name, duration, amplifier)
                    }
                    if (effect_on == "in"){//对攻击者
                        player.potionEffects.add(effect_name, duration, amplifier)
                    }
                }
            }
        }
        //加强魔法伤害
        if (source_type == "indirectMagic"){
            let entity_health = hurted_entity.getHealth()
            let entity_max_health = hurted_entity.getMaxHealth()
            hurted_entity.setHealth(entity_health - entity_max_health * 0.15)
        }
        
    }
})