const damage_tools = {// 确保ID大小写与原模组一致
    "minecraft:wooden_axe":1,
    "minecraft:iron_sword":4,
    "minecraft:diamond_sword":6,
    "minecraft:wooden_sword":2,
    "minecraft:golden_sword":2,
    "minecraft:stone_sword":3,
    "infinite_abyss:violet_diamond_sword":20,
    "divinerpg:flaming_fury":23,
    "l2complements:poseidite_sword":26,
    "iceandfire:ghost_sword":32,
    "iter_rpg:earth_sword":36,

    "divinerpg:divine_sword":40,
    "divinerpg:eden_blade":45,
    "l2complements:totemic_gold_sword":50,

    "iter_rpg:golden_spear":42,
    "divinerpg:eden_shickaxe":47,

    "minecraft:netherite_sword":50,
    "deeperdarker:warden_sword":53,
    "iter_rpg:void_sword":52,
    "l2complements:sculkium_sword":64,
    "divinerpg:ender_sword":70,
    "l2complements:shulkerate_sword":81,

    //第四章特殊
    "goety:dark_sword":121,

    //最终章
    "aether:zanite_sword":78,
    "iter_rpg:elemental_sword":85,
    "iceandfire:dread_queen_sword":85,
    "iceandfire:dragonsteel_fire_sword":91,
    "iceandfire:dragonsteel_ice_sword":91,
    "iceandfire:dragonsteel_lightning_sword":91,
};

const armor_items = {
    "minecraft:chainmail_helmet":1,
    "minecraft:chainmail_chestplate":1,
    "minecraft:chainmail_leggings":2,
    "minecraft:chainmail_boots":2,

    "minecraft:leather_helmet":1,
    "minecraft:leather_chestplate":1,
    "minecraft:leather_leggings":1,
    "minecraft:leather_boots":1,

    "minecraft:iron_helmet":2,
    "minecraft:iron_chestplate":3,
    "minecraft:iron_leggings":2,
    "minecraft:iron_boots":2,

    "minecraft:golden_helmet":2,
    "minecraft:golden_chestplate":2, 
    "minecraft:golden_leggings":2,
    "minecraft:golden_boots":1,

    "minecraft:diamond_helmet":3,
    "minecraft:diamond_chestplate":3.5,
    "minecraft:diamond_leggings":3,
    "minecraft:diamond_boots":3,

    "savage_and_ravage:griefer_helmet":3.2,
    "savage_and_ravage:griefer_chestplate":3.5,
    "savage_and_ravage:griefer_leggings":3.2,
    "savage_and_ravage:griefer_boots":3.2,

    "infinite_abyss:cursed_opal_armor_helmet":3.5,
    "infinite_abyss:cursed_opal_armor_chestplate":4,
    "infinite_abyss:cursed_opal_armor_leggings":3.5,
    "infinite_abyss:cursed_opal_armor_boots":3.5,

    "twilightforest:ironwood_helmet":3.8,
    "twilightforest:ironwood_chestplate":5,
    "twilightforest:ironwood_leggings":4.5,
    "twilightforest:ironwood_boots":3.7,

    "iter_rpg:ametrine_helmet":3.8,
    "iter_rpg:ametrine_chestplate":5.5,
    "iter_rpg:ametrine_leggings":4.5,
    "iter_rpg:ametrine_boots":4,

    "iter_rpg:void_armor_helmet":4,
    "iter_rpg:void_armor_chestplate":5.8,
    "iter_rpg:void_armor_leggings":4.7,
    "iter_rpg:void_armor_boots":4.2,

    "botania:terrasteel_helmet":4.2,
    "botania:terrasteel_chestplate":6,
    "botania:terrasteel_leggings":5.2,
    "botania:terrasteel_boots":4.2,

    "minecraft:netherite_helmet":4.4,
    "minecraft:netherite_chestplate":6.2,
    "minecraft:netherite_leggings":5.5,
    "minecraft:netherite_boots":4.5,

    "divinerpg:eden_helmet":4.6,
    "divinerpg:eden_chestplate":6.8,
    "divinerpg:eden_leggings":5.8,
    "divinerpg:eden_boots":4.8,

    "divinerpg:frozen_helmet":4.8,
    "divinerpg:frozen_chestplate":7,
    "divinerpg:frozen_leggings":5.8,
    "divinerpg:frozen_boots":5,

    "deeperdarker:warden_helmet": 5,
    "deeperdarker:warden_chestplate":7.2,
    "deeperdarker:warden_leggings":6.0,
    "deeperdarker:warden_boots":5.2,

    "divinerpg:ender_helmet":5.2,
    "divinerpg:ender_chestplate":7.5,
    "divinerpg:ender_leggings":6.2,
    "divinerpg:ender_boots":5.4,

    "l2complements:sculkium_helmet":5.5,
    "l2complements:sculkium_chestplate":8,
    "l2complements:sculkium_leggings":6.5,
    "l2complements:sculkium_boots":5.8,

    "l2complements:shulkerate_helmet":7,
    "l2complements:shulkerate_chestplate":10,
    "l2complements:shulkerate_leggings":8,
    "l2complements:shulkerate_boots":7,

    //=============第四章的特殊线=============
    "divinerpg:bedrock_helmet":8,
    "divinerpg:bedrock_chestplate":12,
    "divinerpg:bedrock_leggings":10,
    "divinerpg:bedrock_boots":8,

    "iter_rpg:damned_helmet":9,
    "iter_rpg:damned_chestplate":14,
    "iter_rpg:damned_leggings":12,
    "iter_rpg:damned_boots":9,

    "goety:black_iron_helmet":12,
    "goety:black_iron_chestplate":20,
    "goety:black_iron_leggings":18,
    "goety:black_iron_boots":12,

    "goety:dark_helmet":13,
    "goety:dark_chestplate":25,
    "goety:dark_leggings":22,
    "goety:dark_boots":15,

    //最终章
    "aether:gravitite_helmet":6,
    "aether:gravitite_chestplate":9,
    "aether:gravitite_leggings":7.5,
    "aether:gravitite_boots":5.8,

    "aquamirae:abyssal_heaume":8,
    "aquamirae:abyssal_brigantine":10,
    "aquamirae:abyssal_leggings":9,
    "aquamirae:abyssal_boots":7.5,

    "l2complements:poseidite_helmet":7.5,
    "l2complements:poseidite_chestplate":12,
    "l2complements:poseidite_leggings":9,
    "l2complements:poseidite_boots":7.5,

    "enigmaticlegacy:etherium_helmet":8,
    "enigmaticlegacy:etherium_chestplate":13,
    "enigmaticlegacy:etherium_leggings":9.2,
    "enigmaticlegacy:etherium_boots":7.8,

    "iceandfire:dragonsteel_fire_helmet":13,
    "iceandfire:dragonsteel_fire_chestplate":15,
    "iceandfire:dragonsteel_fire_leggings":12,
    "iceandfire:dragonsteel_fire_boots":11,

    "iceandfire:dragonsteel_ice_helmet":13,
    "iceandfire:dragonsteel_ice_chestplate":15,
    "iceandfire:dragonsteel_ice_leggings":12,
    "iceandfire:dragonsteel_ice_boots":11,

    "iceandfire:dragonsteel_lightning_helmet":13,
    "iceandfire:dragonsteel_lightning_chestplate":15,
    "iceandfire:dragonsteel_lightning_leggings":12,
    "iceandfire:dragonsteel_lightning_boots":11,

    "extrabotany:pleiades_combat_maid_headgear":13,
    "extrabotany:pleiades_combat_maid_suit":10,
    "extrabotany:pleiades_combat_maid_skirt":12,
    "extrabotany:pleiades_combat_maid_boots":12,
    "extrabotany:sanguine_pleiades_combat_maid_suit":16,

    "extrabotany:starry_idol_headgear":13,
    "extrabotany:starry_idol_suit":12,
    "extrabotany:starry_idol_skirt":13,
    "extrabotany:starry_idol_boots":12,

    "cataclysm:ignitium_helmet":17,
    "cataclysm:ignitium_elytra_chestplate":20,
    "cataclysm:ignitium_leggings":18,
    "cataclysm:ignitium_boots":16,

    "cataclysm:cursium_helmet":20,
    "cataclysm:cursium_chestplate":20,
    "cataclysm:cursium_leggings":20,
    "cataclysm:cursium_boots":20
}

const bow_items = [
    "spartanweaponry:iron_longbow",
    "spartanweaponry:diamond_heavy_crossbow",
    "divinerpg:serenade_of_death",
    "divinerpg:ghast_cannon",
    "divinerpg:eden_shield",
    "spartanweaponry:netherite_heavy_crossbow",
    "divinerpg:eden_bow",
    "divinerpg:eden_blitz",
    "divinerpg:golden_fury"
]

ItemEvents.modification(event => {
    for (const [id, damage] of Object.entries(damage_tools)) { 
        event.modify(id, item => {
          
            //console.log(`物品名字: ${id} 伤害: ${damage}`);
            item.setAttackDamage(damage - 1); // 减1是因为原版的伤害值是基础伤害+1
            item.setMaxDamage(999999); // 设置最大耐久度
        });
    }

    for (const [id, armor] of Object.entries(armor_items)) {
        event.modify(id, item => {
          //console.log(`物品名字: ${id} 护甲值: ${armor}`);
            item.setArmorProtection(armor); // 设置护甲值
            item.setArmorToughness(armor*0.75); // 设置韧性值
            item.setMaxDamage(999999); // 设置最大耐久度
        });
    }

    for (const id of bow_items) {
        event.modify(id, item => {
            item.setMaxDamage(999999); // 设置最大耐久度
        });
    }
});

/*
ItemEvents.modification(event => {
  event.modify('minecraft:diamond_sword', item => {
    item.setAttackDamage(6)
    //item.setMaxDamage(999)
  })
})
*/
