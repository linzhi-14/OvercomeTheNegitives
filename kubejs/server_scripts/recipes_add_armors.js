ServerEvents.recipes(event => {
    //钻石甲
    event.shaped(Item.of("minecraft:diamond_helmet", 1),[
        ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
        ["minecraft:diamond", "minecraft:iron_helmet", "minecraft:diamond"],
        ["", "", ""]
    ])
    event.shaped(Item.of("minecraft:diamond_chestplate", 1),[
        ["minecraft:diamond", "", "minecraft:diamond"],
        ["minecraft:diamond", "minecraft:iron_chestplate", "minecraft:diamond"],
        ["minecraft:diamond", "iter_rpg:flawless_diamond", "minecraft:diamond"]
    ])
    event.shaped(Item.of("minecraft:diamond_leggings", 1),[
        ["minecraft:diamond", "minecraft:diamond", "minecraft:diamond"],
        ["minecraft:diamond", "minecraft:iron_leggings", "minecraft:diamond"],
        ["minecraft:diamond", "", "minecraft:diamond"]
    ])
    event.shaped(Item.of("minecraft:diamond_boots", 1),[
        ["", "", ""],
        ["minecraft:diamond", "minecraft:iron_boots", "minecraft:diamond"],
        ["create:cardboard_boots", "", "create:cardboard_boots"]
    ])
    //注魔蛋白石甲
    event.shaped(Item.of("infinite_abyss:cursed_opal_armor_helmet", 1), [
        ["infinite_abyss:cursed_opal", "infinite_abyss:cursed_opal", "infinite_abyss:cursed_opal"],
        ["infinite_abyss:cursed_opal", "minecraft:diamond_helmet", "infinite_abyss:cursed_opal"],
        ["", "", ""]
    ])
    event.shaped(Item.of("infinite_abyss:cursed_opal_armor_chestplate", 1), [
        ["infinite_abyss:cursed_opal", "", "infinite_abyss:cursed_opal"],
        ["infinite_abyss:cursed_opal", "minecraft:diamond_chestplate", "infinite_abyss:cursed_opal"],
        ["infinite_abyss:cursed_opal", "minecraft:enchanted_golden_apple", "infinite_abyss:cursed_opal"]
    ])
    event.shaped(Item.of("infinite_abyss:cursed_opal_armor_leggings", 1), [
        ["infinite_abyss:cursed_opal", "infinite_abyss:cursed_opal", "infinite_abyss:cursed_opal"],
        ["infinite_abyss:cursed_opal", "minecraft:diamond_leggings", "infinite_abyss:cursed_opal"],
        ["infinite_abyss:cursed_opal", "", "infinite_abyss:cursed_opal"]
    ])
    event.shaped(Item.of("infinite_abyss:cursed_opal_armor_boots", 1), [
        ["", "", ""],
        ["infinite_abyss:cursed_opal", "minecraft:diamond_boots", "infinite_abyss:cursed_opal"],
        ["ars_nouveau:source_gem", "", "ars_nouveau:source_gem"]
    ])
    //铁木甲
    event.shaped(Item.of("twilightforest:ironwood_helmet", 1),[
        ["goety:cursed_ingot", "botania:terrasteel_ingot", "goety:cursed_ingot"],
        ["twilightforest:ironwood_ingot", "infinite_abyss:cursed_opal_armor_helmet", "twilightforest:ironwood_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("twilightforest:ironwood_chestplate", 1),[
        ["goety:cursed_ingot", "", "goety:cursed_ingot"],
        ["twilightforest:ironwood_ingot", "infinite_abyss:cursed_opal_armor_chestplate", "twilightforest:ironwood_ingot"],
        ["botania:terrasteel_ingot", "l2complements:totemic_gold_block", "botania:terrasteel_ingot"]
    ])
    event.shaped(Item.of("twilightforest:ironwood_leggings", 1),[
        ["twilightforest:ironwood_ingot", "twilightforest:ironwood_ingot", "twilightforest:ironwood_ingot"],
        ["botania:terrasteel_ingot", "infinite_abyss:cursed_opal_armor_leggings", "botania:terrasteel_ingot"],
        ["goety:cursed_ingot", "", "goety:cursed_ingot"]
    ])
    event.shaped(Item.of("twilightforest:ironwood_boots", 1),[
        ["", "", ""],
        ["twilightforest:ironwood_ingot", "infinite_abyss:cursed_opal_armor_boots", "twilightforest:ironwood_ingot"],
        ["twilightforest:ironwood_ingot", "", "twilightforest:ironwood_ingot"]
    ])
    //紫黄晶盔甲
    event.shaped(Item.of("iter_rpg:ametrine_helmet", 1),[
        ["iter_rpg:ametrine_ingot", "ars_nouveau:source_gem", "iter_rpg:ametrine_ingot"],
        ["iter_rpg:ametrine_ingot", "twilightforest:ironwood_helmet", "iter_rpg:ametrine_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("iter_rpg:ametrine_chestplate", 1),[
        ["iter_rpg:ametrine_ingot", "", "iter_rpg:ametrine_ingot"],
        ["iter_rpg:ametrine_ingot", "twilightforest:ironwood_chestplate", "iter_rpg:ametrine_ingot"],
        ["iter_rpg:ametrine_ingot", "ars_nouveau:source_gem", "iter_rpg:ametrine_ingot"]
    ])
    event.shaped(Item.of("iter_rpg:ametrine_leggings", 1),[
        ["iter_rpg:ametrine_ingot", "ars_nouveau:source_gem", "iter_rpg:ametrine_ingot"],
        ["iter_rpg:ametrine_ingot", "twilightforest:ironwood_leggings", "iter_rpg:ametrine_ingot"],
        ["iter_rpg:ametrine_ingot", "", "iter_rpg:ametrine_ingot"]
    ])
    event.shaped(Item.of("iter_rpg:ametrine_boots", 1),[
        ["", "", ""],
        ["iter_rpg:ametrine_ingot", "twilightforest:ironwood_boots", "iter_rpg:ametrine_ingot"],
        ["ars_nouveau:source_gem", "", "ars_nouveau:source_gem"]
    ])
    //泰拉钢盔甲=====西北同盟
    event.shaped(Item.of("botania:terrasteel_helmet", 1),[
        ["undergarden:twistytwig", "botania:rune_spring", "undergarden:twistytwig"],
        ["botania:terrasteel_ingot", "iter_rpg:void_armor_helmet", "botania:terrasteel_ingot"],
        ["botania:terrasteel_ingot", "botania:manasteel_helmet", "botania:terrasteel_ingot"]
    ])
    event.shaped(Item.of("botania:terrasteel_chestplate", 1),[
        ["undergarden:twistytwig", "botania:rune_summer", "undergarden:twistytwig"],
        ["botania:terrasteel_ingot", "iter_rpg:void_armor_chestplate", "botania:terrasteel_ingot"],
        ["botania:terrasteel_ingot", "botania:manasteel_chestplate", "botania:terrasteel_ingot"]
    ])
    event.shaped(Item.of("botania:terrasteel_leggings", 1),[
        ["undergarden:twistytwig", "botania:rune_autumn", "undergarden:twistytwig"],
        ["botania:terrasteel_ingot", "iter_rpg:void_armor_leggings", "botania:terrasteel_ingot"],
        ["botania:terrasteel_ingot", "botania:manasteel_leggings", "botania:terrasteel_ingot"]
    ])
    event.shaped(Item.of("botania:terrasteel_boots", 1),[
        ["undergarden:twistytwig", "botania:rune_winter", "undergarden:twistytwig"],
        ["botania:terrasteel_ingot", "iter_rpg:void_armor_boots", "botania:terrasteel_ingot"], 
        ["botania:terrasteel_ingot", "botania:manasteel_boots", "botania:terrasteel_ingot"]
    ])
    //下界合金盔甲
    event.shaped(Item.of("minecraft:netherite_helmet", 1),[
        ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "botania:terrasteel_helmet", "minecraft:netherite_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("minecraft:netherite_chestplate", 1),[
        ["minecraft:netherite_ingot", "", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "botania:terrasteel_chestplate", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"]
    ])
    event.shaped(Item.of("minecraft:netherite_leggings", 1),[
        ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "botania:terrasteel_leggings", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "", "minecraft:netherite_ingot"]
    ])
    event.shaped(Item.of("minecraft:netherite_boots", 1),[
        ["", "", ""],
        ["minecraft:netherite_ingot", "botania:terrasteel_boots", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "", "minecraft:netherite_ingot"]
    ])
    //伊甸盔甲=====扬汤止沸
    event.shaped(Item.of("divinerpg:eden_helmet", 1),[
        ["iter_rpg:sacred_twig", "divinerpg:eden_chunk", "iter_rpg:sacred_twig"],
        ["divinerpg:eden_chunk", "iter_rpg:ametrine_helmet", "divinerpg:eden_chunk"],
        ["", "", ""]
    ])
    event.shaped(Item.of("divinerpg:eden_chestplate", 1),[
        ["iter_rpg:sacred_twig", "", "iter_rpg:sacred_twig"],
        ["divinerpg:eden_chunk", "iter_rpg:ametrine_chestplate", "divinerpg:eden_chunk"],
        ["divinerpg:eden_chunk", "minecraft:enchanted_golden_apple", "divinerpg:eden_chunk"]
    ])
    event.shaped(Item.of("divinerpg:eden_leggings", 1),[
        ["divinerpg:eden_chunk", "divinerpg:eden_chunk", "divinerpg:eden_chunk"],
        ["iter_rpg:sacred_twig", "iter_rpg:ametrine_leggings", "iter_rpg:sacred_twig"],
        ["divinerpg:eden_chunk", "", "divinerpg:eden_chunk"]
    ])
    event.shaped(Item.of("divinerpg:eden_boots", 1),[
        ["", "", ""],
        ["iter_rpg:sacred_twig", "iter_rpg:ametrine_boots", "iter_rpg:sacred_twig"],
        ["divinerpg:eden_chunk", "", "divinerpg:eden_chunk"]
    ])
    //下界合金盔甲
    event.shaped(Item.of("minecraft:netherite_helmet", 1),[
        ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "divinerpg:eden_helmet", "minecraft:netherite_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("minecraft:netherite_chestplate", 1),[
        ["minecraft:netherite_ingot", "", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "divinerpg:eden_chestplate", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"]
    ])
    event.shaped(Item.of("minecraft:netherite_leggings", 1),[
        ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "divinerpg:eden_leggings", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "", "minecraft:netherite_ingot"]
    ])
    event.shaped(Item.of("minecraft:netherite_boots", 1),[
        ["", "", ""],
        ["minecraft:netherite_ingot", "divinerpg:eden_boots", "minecraft:netherite_ingot"],
        ["minecraft:netherite_ingot", "", "minecraft:netherite_ingot"]
    ])
    //冰霜盔甲
    event.shaped(Item.of("divinerpg:frozen_helmet", 1),[
        ["minecraft:ice", "savage_and_ravage:griefer_helmet", "minecraft:ice"],
        ["divinerpg:ice_stone", "minecraft:netherite_helmet", "divinerpg:ice_stone"],
        ["", "", ""]
    ])
    event.shaped(Item.of("divinerpg:frozen_chestplate", 1),[
        ["minecraft:ice", "savage_and_ravage:griefer_chestplate", "minecraft:ice"],
        ["divinerpg:ice_stone", "minecraft:netherite_chestplate", "divinerpg:ice_stone"],
        ["divinerpg:ice_stone", "divinerpg:ice_stone", "divinerpg:ice_stone"]
    ])
    event.shaped(Item.of("divinerpg:frozen_leggings", 1),[
        ["divinerpg:ice_stone", "divinerpg:ice_stone", "divinerpg:ice_stone"],
        ["divinerpg:ice_stone", "minecraft:netherite_leggings", "divinerpg:ice_stone"],
        ["minecraft:ice", "savage_and_ravage:griefer_leggings", "minecraft:ice"]
    ])
    event.shaped(Item.of("divinerpg:frozen_boots", 1),[
        ["", "", ""],
        ["divinerpg:ice_stone", "minecraft:netherite_boots", "divinerpg:ice_stone"],
        ["minecraft:ice", "savage_and_ravage:griefer_boots", "minecraft:ice"]
    ])
    //监守者盔甲
    event.replaceInput({output:"deeperdarker:warden_helmet"}, "minecraft:netherite_helmet", "divinerpg:frozen_helmet")
    event.replaceInput({output:"deeperdarker:warden_chestplate"}, "minecraft:netherite_chestplate", "divinerpg:frozen_chestplate")
    event.replaceInput({output:"deeperdarker:warden_leggings"}, "minecraft:netherite_leggings", "divinerpg:frozen_leggings")
    event.replaceInput({output:"deeperdarker:warden_boots"}, "minecraft:netherite_boots", "divinerpg:frozen_boots")

    //末影胸甲
    event.shaped(Item.of("divinerpg:ender_helmet", 1),[
        ["cataclysm:polished_end_stone", "cataclysm:enderite_ingot", "cataclysm:polished_end_stone"],
        ["divinerpg:ender_stone", "deeperdarker:warden_helmet", "divinerpg:ender_stone"],
        ["", "", ""]
    ])
    event.shaped(Item.of("divinerpg:ender_chestplate", 1),[
        ["cataclysm:polished_end_stone", "cataclysm:enderite_ingot", "cataclysm:polished_end_stone"],
        ["divinerpg:ender_stone", "deeperdarker:warden_chestplate", "divinerpg:ender_stone"],
        ["divinerpg:ender_stone", "cataclysm:polished_end_stone", "divinerpg:ender_stone"]
    ])
    event.shaped(Item.of("divinerpg:ender_leggings", 1),[
        ["divinerpg:ender_stone", "divinerpg:ender_stone", "divinerpg:ender_stone"],
        ["cataclysm:polished_end_stone", "deeperdarker:warden_leggings", "cataclysm:polished_end_stone"],
        ["divinerpg:ender_stone", "cataclysm:enderite_ingot", "divinerpg:ender_stone"]
    ])
    event.shaped(Item.of("divinerpg:ender_boots", 1),[
        ["", "", ""],
        ["cataclysm:polished_end_stone", "deeperdarker:warden_boots", "cataclysm:polished_end_stone"],
        ["divinerpg:ender_stone", "cataclysm:enderite_ingot", "divinerpg:ender_stone"]
    ])
    //幽匿盔甲
    event.shaped(Item.of("l2complements:sculkium_helmet", 1),[
        ["deeperdarker:sculk_bone", "l2complements:explosion_shard", "deeperdarker:sculk_bone"],
        ["l2complements:sculkium_ingot", "divinerpg:ender_helmet", "l2complements:sculkium_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("l2complements:sculkium_chestplate", 1),[
        ["deeperdarker:sculk_bone", "l2complements:explosion_shard", "deeperdarker:sculk_bone"],
        ["l2complements:sculkium_ingot", "divinerpg:ender_chestplate", "l2complements:sculkium_ingot"],
        ["l2complements:sculkium_ingot", "l2complements:sculkium_ingot", "l2complements:sculkium_ingot"]
    ])
    event.shaped(Item.of("l2complements:sculkium_leggings", 1),[
        ["l2complements:sculkium_ingot", "l2complements:explosion_shard", "l2complements:sculkium_ingot"],
        ["deeperdarker:sculk_bone", "divinerpg:ender_leggings", "deeperdarker:sculk_bone"],
        ["l2complements:sculkium_ingot", "l2complements:sculkium_ingot", "l2complements:sculkium_ingot"]
    ])
    event.shaped(Item.of("l2complements:sculkium_boots", 1),[
        ["", "", ""],
        ["deeperdarker:sculk_bone", "divinerpg:ender_boots", "deeperdarker:sculk_bone"],
        ["l2complements:sculkium_ingot", "l2complements:explosion_shard", "l2complements:sculkium_ingot"]
    ])
    //潜艇盔甲
    event.shaped(Item.of("l2complements:shulkerate_helmet", 1),[
        ["ars_nouveau:source_gem_block", "l2hostility:hostility_orb", "ars_nouveau:source_gem_block"],
        ["l2complements:shulkerate_ingot", "l2complements:sculkium_helmet", "l2complements:shulkerate_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("l2complements:shulkerate_chestplate", 1),[
        ["ars_nouveau:source_gem_block", "l2hostility:hostility_orb", "ars_nouveau:source_gem_block"],
        ["l2complements:shulkerate_ingot", "l2complements:sculkium_chestplate", "l2complements:shulkerate_ingot"],
        ["l2complements:shulkerate_ingot", "l2complements:shulkerate_ingot", "l2complements:shulkerate_ingot"]
    ])
    event.shaped(Item.of("l2complements:shulkerate_leggings", 1),[
        ["l2complements:shulkerate_ingot", "l2hostility:hostility_orb", "l2complements:shulkerate_ingot"],
        ["ars_nouveau:source_gem_block", "l2complements:sculkium_leggings", "ars_nouveau:source_gem_block"],
        ["l2complements:shulkerate_ingot", "l2complements:shulkerate_ingot", "l2complements:shulkerate_ingot"]
    ])
    event.shaped(Item.of("l2complements:shulkerate_boots", 1),[
        ["", "", ""],
        ["ars_nouveau:source_gem_block", "l2complements:sculkium_boots", "ars_nouveau:source_gem_block"],
        ["l2complements:shulkerate_ingot", "l2hostility:hostility_orb", "l2complements:shulkerate_ingot"]
    ])
    //诅咒盔甲
    event.shaped(Item.of("iter_rpg:damned_helmet", 1),[
        ["l2complements:warden_bone_shard", "iter_rpg:hollow_visage", "l2complements:warden_bone_shard"],
        ["minecraft:crying_obsidian", "deeperdarker:warden_helmet", "minecraft:crying_obsidian"],
        ["", "", ""]
    ])
    event.shaped(Item.of("iter_rpg:damned_chestplate", 1),[
        ["l2complements:warden_bone_shard", "iter_rpg:hollow_visage", "l2complements:warden_bone_shard"],
        ["iter_rpg:hollow_visage", "deeperdarker:warden_chestplate", "iter_rpg:hollow_visage"],
        ["minecraft:crying_obsidian", "minecraft:crying_obsidian", "minecraft:crying_obsidian"]
    ])
    event.shaped(Item.of("iter_rpg:damned_leggings", 1),[
        ["iter_rpg:hollow_visage", "l2complements:warden_bone_shard", "iter_rpg:hollow_visage"],
        ["l2complements:warden_bone_shard", "deeperdarker:warden_leggings", "l2complements:warden_bone_shard"],
        ["minecraft:crying_obsidian", "", "minecraft:crying_obsidian"]
    ])
    event.shaped(Item.of("iter_rpg:damned_boots", 1),[
        ["", "", ""],
        ["l2complements:warden_bone_shard", "deeperdarker:warden_boots", "l2complements:warden_bone_shard"],
        ["minecraft:crying_obsidian", "l2complements:warden_bone_shard", "minecraft:crying_obsidian"]
    ])
    //基岩盔甲
    event.shaped(Item.of("divinerpg:bedrock_helmet", 1),[
        ["divinerpg:bedrock_chunk", "botania:marimorphosis", "divinerpg:bedrock_chunk"],
        ["divinerpg:bedrock_chunk", "iter_rpg:damned_helmet", "divinerpg:bedrock_chunk"],
        ["", "", ""]
    ])
    event.shaped(Item.of("divinerpg:bedrock_chestplate", 1),[
        ["divinerpg:bedrock_chunk", "botania:marimorphosis", "divinerpg:bedrock_chunk"],
        ["divinerpg:bedrock_chunk", "iter_rpg:damned_chestplate", "divinerpg:bedrock_chunk"],
        ["divinerpg:bedrock_chunk", "divinerpg:bedrock_chunk", "divinerpg:bedrock_chunk"]
    ])
    event.shaped(Item.of("divinerpg:bedrock_leggings", 1),[
        ["divinerpg:bedrock_chunk", "botania:marimorphosis", "divinerpg:bedrock_chunk"],
        ["divinerpg:bedrock_chunk", "iter_rpg:damned_leggings", "divinerpg:bedrock_chunk"],
        ["divinerpg:bedrock_chunk", "divinerpg:bedrock_chunk", "divinerpg:bedrock_chunk"]
    ])
    event.shaped(Item.of("divinerpg:bedrock_boots", 1),[
        ["", "", ""],
        ["divinerpg:bedrock_chunk", "iter_rpg:damned_boots", "divinerpg:bedrock_chunk"],
        ["divinerpg:bedrock_chunk", "botania:marimorphosis", "divinerpg:bedrock_chunk"]
    ])
    //黑铁盔甲
    event.shaped(Item.of("goety:black_iron_helmet", 1),[
        ["goety:cursed_ingot", "ars_nouveau:void_prism", "goety:cursed_ingot"],
        ["ars_nouveau:void_prism", "divinerpg:bedrock_helmet", "ars_nouveau:void_prism"],
        ["", "", ""]
    ])
    event.shaped(Item.of("goety:black_iron_chestplate", 1),[
        ["goety:cursed_ingot", "ars_nouveau:void_prism", "goety:cursed_ingot"],
        ["ars_nouveau:void_prism", "divinerpg:bedrock_chestplate", "ars_nouveau:void_prism"],
        ["goety:cursed_ingot", "goety:cursed_ingot", "goety:cursed_ingot"]
    ])
    event.shaped(Item.of("goety:black_iron_leggings", 1),[
        ["goety:cursed_ingot", "ars_nouveau:void_prism", "goety:cursed_ingot"],
        ["ars_nouveau:void_prism", "divinerpg:bedrock_leggings", "ars_nouveau:void_prism"],
        ["goety:cursed_ingot", "goety:cursed_ingot", "goety:cursed_ingot"]
    ])
    event.shaped(Item.of("goety:black_iron_boots", 1),[
        ["", "", ""],
        ["goety:cursed_ingot", "divinerpg:bedrock_boots", "goety:cursed_ingot"],
        ["ars_nouveau:void_prism", "ars_nouveau:void_prism", "ars_nouveau:void_prism"]
    ])
    //黑暗盔甲
    event.shaped(Item.of("goety:dark_helmet", 1),[
        ["goety:dark_ingot", "goety:awakened_emerald_block", "goety:dark_ingot"],
        ["goety:dark_ingot", "goety:spirit_fabric", "goety:dark_ingot"],
        ["", "goety:black_iron_helmet", ""]
    ])
    event.shaped(Item.of("goety:dark_chestplate", 1),[
        ["goety:dark_ingot", "goety:awakened_emerald_block", "goety:dark_ingot"],
        ["goety:dark_ingot", "goety:spirit_fabric", "goety:dark_ingot"],
        ["goety:dark_ingot", "goety:dark_ingot", "goety:dark_ingot"]
    ])
    event.shaped(Item.of("goety:dark_leggings", 1),[
        ["goety:dark_ingot", "goety:awakened_emerald_block", "goety:dark_ingot"],
        ["goety:dark_ingot", "goety:spirit_fabric", "goety:dark_ingot"],
        ["goety:dark_ingot", "", "goety:dark_ingot"]
    ])
    event.shaped(Item.of("goety:dark_boots", 1),[
        ["", "", ""],
        ["goety:dark_ingot", "goety:spirit_fabric", "goety:dark_ingot"],
        ["goety:awakened_emerald_block", "goety:black_iron_boots", "goety:awakened_emerald_block"]
    ])
    //重力晶盔甲
    event.shaped(Item.of("aether:gravitite_helmet", 1),[
        ["aether:golden_amber", "aether:enchanted_gravitite", "divinerpg:mortum_chunk"],
        ["aether:enchanted_gravitite", "l2complements:sculkium_helmet", "aether:enchanted_gravitite"],
        ["", "", ""]
    ])
    event.shaped(Item.of("aether:gravitite_chestplate", 1),[
        ["aether:golden_amber", "aether:enchanted_gravitite", "divinerpg:mortum_chunk"],
        ["aether:enchanted_gravitite", "l2complements:sculkium_chestplate", "aether:enchanted_gravitite"],
        ["aether:enchanted_gravitite", "aether:enchanted_gravitite", "aether:enchanted_gravitite"]
    ])
    event.shaped(Item.of("aether:gravitite_leggings", 1),[
        ["aether:enchanted_gravitite", "aether:golden_amber", "aether:enchanted_gravitite"],
        ["divinerpg:mortum_chunk", "l2complements:sculkium_leggings", "divinerpg:mortum_chunk"],
        ["aether:enchanted_gravitite", "aether:enchanted_gravitite", "aether:enchanted_gravitite"]
    ])
    event.shaped(Item.of("aether:gravitite_boots", 1),[
        ["", "", ""],
        ["divinerpg:mortum_chunk", "l2complements:sculkium_boots", "divinerpg:mortum_chunk"],
        ["aether:golden_amber", "aether:enchanted_gravitite", "aether:golden_amber"]
    ])
    //耀眼深海盔甲
    event.shaped(Item.of("aquamirae:abyssal_heaume", 1),[
        ["botania:rune_envy", "aquamirae:terrible_helmet", "botania:rune_envy"],
        ["aquamirae:abyssal_amethyst", "aether:gravitite_helmet", "aquamirae:abyssal_amethyst"],
        ["", "", ""]
    ])
    event.shaped(Item.of("aquamirae:abyssal_brigantine", 1),[
        ["botania:rune_envy", "aquamirae:terrible_chestplate", "botania:rune_envy"],
        ["aquamirae:abyssal_amethyst", "aether:gravitite_chestplate", "aquamirae:abyssal_amethyst"],
        ["aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst"]
    ])
    event.shaped(Item.of("aquamirae:abyssal_leggings", 1),[
        ["botania:rune_envy", "aquamirae:terrible_leggings", "botania:rune_envy"],
        ["aquamirae:abyssal_amethyst", "aether:gravitite_leggings", "aquamirae:abyssal_amethyst"],
        ["aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst"]
    ])
    event.shaped(Item.of("aquamirae:abyssal_boots", 1),[
        ["", "", ""],
        ["botania:rune_envy", "aether:gravitite_boots", "botania:rune_envy"],
        ["aquamirae:terrible_boots", "aquamirae:abyssal_amethyst", "aquamirae:terrible_boots"]
    ])

    event.shaped(Item.of("aquamirae:abyssal_heaume", 1),[
        ["botania:rune_envy", "aquamirae:terrible_helmet", "botania:rune_envy"],
        ["aquamirae:abyssal_amethyst", "l2complements:shulkerate_helmet", "aquamirae:abyssal_amethyst"],
        ["", "", ""]
    ])
    event.shaped(Item.of("aquamirae:abyssal_brigantine", 1),[
        ["botania:rune_envy", "aquamirae:terrible_chestplate", "botania:rune_envy"],
        ["aquamirae:abyssal_amethyst", "l2complements:shulkerate_chestplate", "aquamirae:abyssal_amethyst"],
        ["aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst"]
    ])
    event.shaped(Item.of("aquamirae:abyssal_leggings", 1),[
        ["botania:rune_envy", "aquamirae:terrible_leggings", "botania:rune_envy"],
        ["aquamirae:abyssal_amethyst", "l2complements:shulkerate_leggings", "aquamirae:abyssal_amethyst"],
        ["aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst", "aquamirae:abyssal_amethyst"]
    ])
    event.shaped(Item.of("aquamirae:abyssal_boots", 1),[
        ["", "", ""],
        ["botania:rune_envy", "l2complements:shulkerate_boots", "botania:rune_envy"],
        ["aquamirae:terrible_boots", "aquamirae:abyssal_amethyst", "aquamirae:terrible_boots"]    
    ])

    //下界合金航天服
    event.replaceInput({output:"ad_astra:netherite_space_helmet"}, "minecraft:netherite_helmet", "minecraft:netherite_block")
    event.replaceInput({output:"ad_astra:netherite_space_suit"}, "minecraft:netherite_chestplate", "minecraft:netherite_block")
    event.replaceInput({output:"ad_astra:netherite_space_pants"}, "minecraft:netherite_leggings", "minecraft:netherite_block")
    event.replaceInput({output:"ad_astra:netherite_space_boots"}, "minecraft:netherite_boots", "minecraft:netherite_block")
    //海神盔甲
    event.shaped(Item.of("l2complements:poseidite_helmet", 1),[
        ["divinerpg:aquamarine", "yuushya:floating_bloom", "divinerpg:aquamarine"],
        ["l2complements:poseidite_ingot", "aquamirae:abyssal_heaume", "l2complements:poseidite_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("l2complements:poseidite_chestplate", 1),[
        ["divinerpg:aquamarine", "yuushya:floating_bloom", "divinerpg:aquamarine"],
        ["l2complements:poseidite_ingot", "aquamirae:abyssal_brigantine", "l2complements:poseidite_ingot"],
        ["l2complements:poseidite_ingot", "l2complements:poseidite_ingot", "l2complements:poseidite_ingot"]
    ])
    event.shaped(Item.of("l2complements:poseidite_leggings", 1),[
        ["divinerpg:aquamarine", "yuushya:floating_bloom", "divinerpg:aquamarine"],
        ["l2complements:poseidite_ingot", "aquamirae:abyssal_leggings", "l2complements:poseidite_ingot"],
        ["l2complements:poseidite_ingot", "l2complements:poseidite_ingot", "l2complements:poseidite_ingot"]
    ])
    event.shaped(Item.of("l2complements:poseidite_boots", 1),[
        ["", "", ""],
        ["l2complements:poseidite_ingot", "aquamirae:abyssal_boots", "l2complements:poseidite_ingot"],
        ["divinerpg:aquamarine", "yuushya:floating_bloom", "divinerpg:aquamarine"]
    ])
    //以太盔甲
    event.shaped(Item.of("enigmaticlegacy:etherium_helmet", 1),[
        ["iter_rpg:etherbloom_decoction", "goety:rupture_focus", "botania:gaia_ingot"],
        ["enigmaticlegacy:etherium_ingot", "l2complements:poseidite_helmet", "enigmaticlegacy:etherium_ingot"],
        ["", "divinerpg:awakened_halite_helmet", ""]
    ])
    event.shaped(Item.of("enigmaticlegacy:etherium_chestplate", 1),[
        ["iter_rpg:etherbloom_decoction", "goety:rupture_focus", "botania:gaia_ingot"],
        ["enigmaticlegacy:etherium_ingot", "l2complements:poseidite_chestplate", "enigmaticlegacy:etherium_ingot"],
        ["enigmaticlegacy:etherium_ingot", "divinerpg:awakened_halite_chestplate", "enigmaticlegacy:etherium_ingot"]
    ])
    event.shaped(Item.of("enigmaticlegacy:etherium_leggings", 1),[
        ["iter_rpg:etherbloom_decoction", "goety:rupture_focus", "botania:gaia_ingot"],
        ["enigmaticlegacy:etherium_ingot", "l2complements:poseidite_leggings", "enigmaticlegacy:etherium_ingot"],
        ["enigmaticlegacy:etherium_ingot", "divinerpg:awakened_halite_leggings", "enigmaticlegacy:etherium_ingot"]
    ])
    event.shaped(Item.of("enigmaticlegacy:etherium_boots", 1),[
        ["", "divinerpg:awakened_halite_boots", ""],
        ["enigmaticlegacy:etherium_ingot", "l2complements:poseidite_boots", "enigmaticlegacy:etherium_ingot"],
        ["iter_rpg:etherbloom_decoction", "goety:rupture_focus", "botania:gaia_ingot"]
    ])
    //龙炎钢盔甲
    event.shaped(Item.of("iceandfire:dragonsteel_fire_helmet", 1),[
        ["iceandfire:dragonsteel_fire_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_fire_ingot"],
        ["iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:etherium_helmet", "iceandfire:dragonsteel_fire_ingot"],
        ["", "apotheosis:infused_breath", ""]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_fire_chestplate", 1),[
        ["iceandfire:dragonsteel_fire_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_fire_ingot"],
        ["iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:etherium_chestplate", "iceandfire:dragonsteel_fire_ingot"],
        ["iceandfire:dragonsteel_fire_ingot", "iceandfire:dragonsteel_fire_ingot", "iceandfire:dragonsteel_fire_ingot"]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_fire_leggings", 1),[
        ["iceandfire:dragonsteel_fire_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_fire_ingot"],
        ["iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:etherium_leggings", "iceandfire:dragonsteel_fire_ingot"],
        ["iceandfire:dragonsteel_fire_ingot", "apotheosis:infused_breath", "iceandfire:dragonsteel_fire_ingot"]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_fire_boots", 1),[
        ["", "", ""],
        ["iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:etherium_boots", "iceandfire:dragonsteel_fire_ingot"],
        ["botania:dragonstone_block", "apotheosis:infused_breath", "botania:dragonstone_block"]
    ])
    //龙霜钢盔甲
    event.shaped(Item.of("iceandfire:dragonsteel_ice_helmet", 1),[    
        ["iceandfire:dragonsteel_ice_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_ice_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "enigmaticlegacy:etherium_helmet", "iceandfire:dragonsteel_ice_ingot"],
        ["", "apotheosis:infused_breath", ""]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_ice_chestplate", 1),[
        ["iceandfire:dragonsteel_ice_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_ice_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "enigmaticlegacy:etherium_chestplate", "iceandfire:dragonsteel_ice_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "iceandfire:dragonsteel_ice_ingot", "iceandfire:dragonsteel_ice_ingot"]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_ice_leggings", 1),[
        ["iceandfire:dragonsteel_ice_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_ice_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "enigmaticlegacy:etherium_leggings", "iceandfire:dragonsteel_ice_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "apotheosis:infused_breath", "iceandfire:dragonsteel_ice_ingot"]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_ice_boots", 1),[
        ["", "", ""],
        ["iceandfire:dragonsteel_ice_ingot", "enigmaticlegacy:etherium_boots", "iceandfire:dragonsteel_ice_ingot"],
        ["botania:dragonstone_block", "apotheosis:infused_breath", "botania:dragonstone_block"]
    ])
    //龙霆钢盔甲
    event.shaped(Item.of("iceandfire:dragonsteel_lightning_helmet", 1),[
        ["iceandfire:dragonsteel_lightning_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_lightning_ingot"],
        ["iceandfire:dragonsteel_lightning_ingot", "enigmaticlegacy:etherium_helmet", "iceandfire:dragonsteel_lightning_ingot"],
        ["", "apotheosis:infused_breath", ""]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_lightning_chestplate", 1),[
        ["iceandfire:dragonsteel_lightning_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_lightning_ingot"],
        ["iceandfire:dragonsteel_lightning_ingot", "enigmaticlegacy:etherium_chestplate", "iceandfire:dragonsteel_lightning_ingot"],
        ["iceandfire:dragonsteel_lightning_ingot", "iceandfire:dragonsteel_lightning_ingot", "iceandfire:dragonsteel_lightning_ingot"]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_lightning_leggings", 1),[
        ["iceandfire:dragonsteel_lightning_ingot", "botania:dragonstone_block", "iceandfire:dragonsteel_lightning_ingot"],
        ["iceandfire:dragonsteel_lightning_ingot", "enigmaticlegacy:etherium_leggings", "iceandfire:dragonsteel_lightning_ingot"],
        ["iceandfire:dragonsteel_lightning_ingot", "apotheosis:infused_breath", "iceandfire:dragonsteel_lightning_ingot"]
    ])
    event.shaped(Item.of("iceandfire:dragonsteel_lightning_boots", 1),[
        ["", "", ""],
        ["iceandfire:dragonsteel_lightning_ingot", "enigmaticlegacy:etherium_boots", "iceandfire:dragonsteel_lightning_ingot"],
        ["botania:dragonstone_block", "apotheosis:infused_breath", "botania:dragonstone_block"]
    ])
    //腾炎盔甲
    event.smithing("cataclysm:ignitium_helmet", "cataclysm:ignitium_upgrade_smithing_template", "mythicbotany:alfsteel_helmet", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_chestplate", "cataclysm:ignitium_upgrade_smithing_template", "mythicbotany:alfsteel_chestplate", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_leggings", "cataclysm:ignitium_upgrade_smithing_template", "mythicbotany:alfsteel_leggings", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_boots", "cataclysm:ignitium_upgrade_smithing_template", "mythicbotany:alfsteel_boots", "cataclysm:ignitium_block")

    event.smithing("cataclysm:ignitium_helmet", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:starry_idol_headgear", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_chestplate", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:starry_idol_suit", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_leggings", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:starry_idol_skirt", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_boots", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:starry_idol_boots", "cataclysm:ignitium_block")

    event.smithing("cataclysm:ignitium_helmet", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:pleiades_combat_maid_headgear", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_chestplate", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:sanguine_pleiades_combat_maid_suit", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_leggings", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:pleiades_combat_maid_skirt", "cataclysm:ignitium_block")
    event.smithing("cataclysm:ignitium_boots", "cataclysm:ignitium_upgrade_smithing_template", "extrabotany:pleiades_combat_maid_boots", "cataclysm:ignitium_block")

    //鞘翅腾炎胸甲
    event.custom({
        "type": "cataclysm:weapon_fusion",
        "base": {
            "item": "cataclysm:ignitium_chestplate"
        },
        "addition": {
            "item": "deeperdarker:soul_elytra"
        },
        "result": {
            "item": "cataclysm:ignitium_elytra_chestplate"
        }
    })

    //咒魂盔甲
    event.shaped(Item.of("cataclysm:cursium_helmet", 1),[
        ["enigmaticlegacy:evil_ingot", "cataclysm:cursium_ingot", "enigmaticlegacy:evil_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "cataclysm:ignitium_helmet", "iceandfire:dragonsteel_lightning_ingot"],
        ["enigmaticlegacy:evil_ingot", "iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:evil_ingot"]
    ])
    event.shaped(Item.of("cataclysm:cursium_chestplate", 1),[
        ["enigmaticlegacy:evil_ingot", "cataclysm:cursium_ingot", "enigmaticlegacy:evil_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "cataclysm:ignitium_elytra_chestplate", "iceandfire:dragonsteel_lightning_ingot"],
        ["enigmaticlegacy:evil_ingot", "iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:evil_ingot"]
    ])
    event.shaped(Item.of("cataclysm:cursium_leggings", 1),[
        ["enigmaticlegacy:evil_ingot", "cataclysm:cursium_ingot", "enigmaticlegacy:evil_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "cataclysm:ignitium_leggings", "iceandfire:dragonsteel_lightning_ingot"],
        ["enigmaticlegacy:evil_ingot", "iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:evil_ingot"]
    ])
    event.shaped(Item.of("cataclysm:cursium_boots", 1),[
        ["enigmaticlegacy:evil_ingot", "cataclysm:cursium_ingot", "enigmaticlegacy:evil_ingot"],
        ["iceandfire:dragonsteel_ice_ingot", "cataclysm:ignitium_boots", "iceandfire:dragonsteel_lightning_ingot"],
        ["enigmaticlegacy:evil_ingot", "iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:evil_ingot"]
    ])

    //战斗女仆
    event.shaped(Item.of("extrabotany:pleiades_combat_maid_headgear", 1),[
        ["extrabotany:das_rheingold", "botania:gaia_ingot", "extrabotany:das_rheingold"],
        ["botania:gaia_ingot", "enigmaticlegacy:etherium_helmet", "botania:gaia_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("extrabotany:pleiades_combat_maid_suit", 1),[
        ["extrabotany:das_rheingold", "botania:gaia_ingot", "extrabotany:das_rheingold"],
        ["botania:gaia_ingot", "enigmaticlegacy:etherium_chestplate", "botania:gaia_ingot"],
        ["botania:gaia_ingot", "botania:gaia_ingot", "botania:gaia_ingot"]
    ])
    event.shaped(Item.of("extrabotany:pleiades_combat_maid_skirt", 1),[
        ["extrabotany:das_rheingold", "botania:gaia_ingot", "extrabotany:das_rheingold"],
        ["botania:gaia_ingot", "enigmaticlegacy:etherium_leggings", "botania:gaia_ingot"],
        ["botania:gaia_ingot", "", "botania:gaia_ingot"]
    ])
    event.shaped(Item.of("extrabotany:pleiades_combat_maid_boots", 1),[
        ["extrabotany:das_rheingold", "", "extrabotany:das_rheingold"],
        ["botania:gaia_ingot", "enigmaticlegacy:etherium_boots", "botania:gaia_ingot"],
        ["", "", ""]
    ])
    //星空歌姬套装
    event.shaped(Item.of("extrabotany:starry_idol_headgear", 1),[
        ["iter_rpg:stardust_ice_shard", "iceandfire:dragonscales_blue", "iter_rpg:stardust_ice_shard"],
        ["botania:manaweave_cloth", "enigmaticlegacy:etherium_helmet", "botania:manaweave_cloth"],
        ["", "", ""]
    ])
    event.shaped(Item.of("extrabotany:starry_idol_suit", 1),[
        ["iter_rpg:stardust_ice_shard", "iceandfire:dragonscales_blue", "iter_rpg:stardust_ice_shard"],
        ["botania:manaweave_cloth", "enigmaticlegacy:etherium_chestplate", "botania:manaweave_cloth"],
        ["botania:manaweave_cloth", "botania:manaweave_cloth", "botania:manaweave_cloth"]
    ])
    event.shaped(Item.of("extrabotany:starry_idol_skirt", 1),[
        ["iter_rpg:stardust_ice_shard", "iceandfire:dragonscales_blue", "iter_rpg:stardust_ice_shard"],
        ["botania:manaweave_cloth", "enigmaticlegacy:etherium_leggings", "botania:manaweave_cloth"],
        ["botania:manaweave_cloth", "", "botania:manaweave_cloth"]
    ])
    event.shaped(Item.of("extrabotany:starry_idol_boots", 1),[
        ["iter_rpg:stardust_ice_shard", "", "iter_rpg:stardust_ice_shard"],
        ["botania:manaweave_cloth", "enigmaticlegacy:etherium_boots", "botania:manaweave_cloth"],
        ["", "", ""]
    ])
    //精灵钢盔甲
    event.shaped(Item.of("mythicbotany:alfsteel_helmet", 1),[
        ["botania:elementium_ingot", "mythicbotany:alfsteel_template", "botania:elementium_ingot"],
        ["mythicbotany:alfsteel_ingot", "enigmaticlegacy:etherium_helmet", "mythicbotany:alfsteel_ingot"],
        ["", "", ""]
    ])
    event.shaped(Item.of("mythicbotany:alfsteel_chestplate", 1),[
        ["botania:elementium_ingot", "mythicbotany:alfsteel_template", "botania:elementium_ingot"],
        ["mythicbotany:alfsteel_ingot", "enigmaticlegacy:etherium_chestplate", "mythicbotany:alfsteel_ingot"],
        ["mythicbotany:alfsteel_ingot", "mythicbotany:alfsteel_ingot", "mythicbotany:alfsteel_ingot"]
    ])
    event.shaped(Item.of("mythicbotany:alfsteel_leggings", 1),[
        ["botania:elementium_ingot", "mythicbotany:alfsteel_template", "botania:elementium_ingot"],
        ["mythicbotany:alfsteel_ingot", "enigmaticlegacy:etherium_leggings", "mythicbotany:alfsteel_ingot"],
        ["mythicbotany:alfsteel_ingot", "", "mythicbotany:alfsteel_ingot"]
    ])
    event.shaped(Item.of("mythicbotany:alfsteel_boots", 1),[
        ["", "", ""],
        ["mythicbotany:alfsteel_ingot", "enigmaticlegacy:etherium_boots", "mythicbotany:alfsteel_ingot"],
        ["botania:elementium_ingot", "mythicbotany:alfsteel_template", "botania:elementium_ingot"]
    ])
})