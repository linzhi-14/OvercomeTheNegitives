let chests_remove_items = [
    "divinerpg:frost_sword",
    "enigmaticlegacy:lore_inscriber",
    "divinerpg:eden_axe",
    "enigmaticaddons:forgotten_ice",
    "nameless_trinkets:creeper_sense",
    "nameless_trinkets:explosion_proof_jacket",
    "enigmaticaddons:hell_blade_charm",
    "nameless_trinkets:vampire_blood",
    "nameless_trinkets:gods_crown",
    "nameless_trinkets:cracked_crown",
    "twilightforest:glass_sword"
]

let entity_remove_items = [
    "savage_and_ravage:wand_of_freezing",
    "minecraft:netherite_sword",
    "divinerpg:ender_sword",
    "iceandfire:dread_knight_sword",
    "iceandfire:lich_staff",
    "goety:night_beacon",
    "undergarden:forgotten_nugget",
    "divinerpg:eden_blitz"
]

//删除某些特定物品
LootJS.modifiers(event => {
    //箱子
    chests_remove_items.forEach(item => {
        event.addLootTypeModifier(LootType.CHEST).removeLoot(item)
    })
    //实体
    entity_remove_items.forEach(item => {
        event.addLootTypeModifier(LootType.ENTITY).removeLoot(item)
    })
})
