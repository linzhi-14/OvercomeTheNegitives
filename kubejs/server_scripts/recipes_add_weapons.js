ServerEvents.recipes(event => {
    //木斧
    event.shaped(Item.of("minecraft:wooden_axe", 1), [
        ["#minecraft:planks", "minecraft:stick"],
        ["minecraft:stick", ""]
    ])
    //三个没什么用的箭
    event.shaped(Item.of("ars_nouveau:pierce_arrow", 1),[
        ["", "ars_nouveau:wilden_spike", ""],
        ["", "#minecraft:arrows", ""],
        ["", "ars_nouveau:air_essence", ""]
    ])
    event.shaped(Item.of("ars_nouveau:amplify_arrow", 1),[
        ["", "botania:mana_diamond", ""],
        ["", "#minecraft:arrows", ""],
        ["", "ars_nouveau:air_essence", ""]
    ])
    event.shaped(Item.of("ars_nouveau:split_arrow", 1),[
        ["", "ars_nouveau:wilden_horn", ""],
        ["", "#minecraft:arrows", ""],
        ["", "ars_nouveau:air_essence", ""]
    ])
    //铁剑
    event.shaped(Item.of("minecraft:iron_sword", 1),[
        ["", "", "minecraft:iron_ingot"],
        ["create:iron_sheet", "minecraft:iron_ingot", ""],
        ["spartanweaponry:simple_handle", "create:iron_sheet", ""]
    ])
    //银剑
    event.shaped(Item.of("iceandfire:silver_sword", 1),[
        ["iceandfire:silver_ingot", "", "iceandfire:silver_ingot"],
        ["", "minecraft:iron_sword", ""],
        ["divinerpg:realmite_ingot", "", "iceandfire:silver_ingot"]
    ])
    //钻石剑
    event.shaped(Item.of("minecraft:diamond_sword", 1),[
        ["", "", "minecraft:amethyst_shard"],
        ["create:golden_sheet", "botania:mana_diamond", ""],
        ["iceandfire:silver_sword", "create:golden_sheet", ""]
    ])
    //钻石大剑
    event.shaped(Item.of("spartanweaponry:diamond_greatsword", 1),[
        ["", "", "minecraft:diamond_sword"],
        ["iter_rpg:flawless_diamond", "minecraft:diamond", ""],
        ["spartanweaponry:handle", "iter_rpg:flawless_diamond", ""]
    ])
    //钻石长弓
    event.smithing("spartanweaponry:diamond_longbow", "infinite_abyss:cut_red_crystal", "spartanweaponry:iron_longbow", "iter_rpg:flawless_diamond")
    //钻石强化重弩
    event.shaped(Item.of("spartanweaponry:diamond_heavy_crossbow", 1),[
        ["spartanweaponry:diamond_longbow", "spartanweaponry:diamond_boomerang", "minecraft:string"],
        ["spartanweaponry:diamond_boomerang", "spartanweaponry:handle", "#minecraft:planks"],
        ["minecraft:string", "#minecraft:planks", "minecraft:tripwire_hook"]
    ])
    //恶魂炮
    event.shaped(Item.of("divinerpg:ghast_cannon", 1),[
        ["divinerpg:hellstone_ingot", "divinerpg:aquatic_blaze_rod", ""],
        ["minecraft:ghast_tear", "create:potato_cannon", "minecraft:ghast_tear"],
        ["", "spartanweaponry:diamond_heavy_crossbow", "divinerpg:shadow_bar"]
    ])
    //死亡之乐曲
    event.shaped(Item.of("divinerpg:serenade_of_death", 1),[
        ["", "divinerpg:fury_fire", "divinerpg:sound_of_music"],
        ["", "cataclysm:lava_power_cell", ""],
        ["divinerpg:ghast_cannon", "undergarden:forgotten_ingot", ""]
    ])
    //血宝石剑
    event.shaped(Item.of("divinerpg:bloodgem_sword", 1),[
        ["", "divinerpg:bloodgem", ""],
        ["", "infinite_abyss:tentacle", ""],
        ["", "infinite_abyss:tentacle", ""]
    ])
    //紫钻石剑
    event.shaped(Item.of("infinite_abyss:violet_diamond_sword", 1),[
        ["", "", "", "apotheosis:rare_material", "minecraft:amethyst_shard"],
        ["", "", "infinite_abyss:violet_diamond", "spartanweaponry:diamond_greatsword", "apotheosis:rare_material"],
        ["", "mutantmonsters:hulk_hammer", "ae2:fluix_sword", "infinite_abyss:violet_diamond", ""],
        ["", "divinerpg:bloodgem_sword", "mutantmonsters:hulk_hammer", "", ""],
        ["infinite_abyss:cursed_opal_sword", "", "", "", ""]
    ])
    //海蓝者
    event.shaped(Item.of("divinerpg:aquaton", 1),[
        ["", "", "divinerpg:aquatic_ingot"],
        ["minecraft:prismarine_shard", "divinerpg:aquatic_ingot", ""],
        ["upgrade_aquatic:prismarine_rod", "minecraft:prismarine_shard", ""]
    ])
    //冰霜剑
    event.shaped(Item.of("divinerpg:frost_sword", 1),[
        ["", "divinerpg:ice_stone", ""],
        ["divinerpg:ice_stone", "divinerpg:soulfire_stone", "divinerpg:ice_stone"],
        ["", "spartanweaponry:simple_handle", ""]
    ])
    //海神剑
    event.shaped(Item.of("l2complements:poseidite_sword", 1),[
        ["divinerpg:aqua_ball", "ars_nouveau:water_essence", "divinerpg:aquaton"],
        ["divinerpg:frost_sword", "l2complements:poseidite_ingot", "ars_nouveau:water_essence"],
        ["divinerpg:flaming_fury", "iter_rpg:water_sword", "divinerpg:aqua_ball"]
    ])
    //熔火剑
    event.shaped(Item.of("divinerpg:molten_sword", 1),[
        ["", "", "infinite_abyss:layer_2_stalagmite"],
        ["", "divinerpg:molten_stone", ""],
        ["spartanweaponry:handle", "", ""]
    ])
    //熊熊怒火
    event.shaped(Item.of("divinerpg:flaming_fury", 1),[
        ["", "", "divinerpg:fury_fire", "iter_rpg:fire_sword"],
        ["divinerpg:soulfire_stone", "cataclysm:lava_power_cell", "cataclysm:monstrous_horn", "divinerpg:fury_fire"],
        ["", "divinerpg:molten_sword", "cataclysm:lava_power_cell", ""],
        ["infinite_abyss:violet_diamond_sword", "", "divinerpg:soulfire_stone", ""]
    ])
    //厄塞剑
    event.shaped(Item.of("undergarden:cloggrum_sword", 1),[
        ["", "", "undergarden:cloggrum_ingot"],
        ["", "undergarden:regalium_crystal", ""],
        ["spartanweaponry:handle", "", ""]
    ])
    //幻灵剑
    event.shaped(Item.of("iceandfire:ghost_sword", 1),[
        ["", "", "", "botania:pixie_dust", "l2complements:totemic_gold_ingot"],
        ["", "iter_rpg:grimstone_pebble", "goety:ectoplasm", "iceandfire:ghost_ingot", "botania:pixie_dust"],
        ["", "iter_rpg:air_fragment", "undergarden:forgotten_sword", "goety:ectoplasm", ""],
        ["", "twilightforest:ironwood_sword", "iter_rpg:air_fragment", "iter_rpg:grimstone_pebble", ""],
        ["l2complements:poseidite_sword", "", "", "", ""]
    ])
    //大地之剑
    event.shaped(Item.of("iter_rpg:earth_sword", 1),[
        ["", "", "", "iter_rpg:earth_ingot", "iter_rpg:ametrine_sword"],
        ["", "enigmaticaddons:earth_heart_fragment", "ars_nouveau:earth_essence", "ars_nouveau:whirlisprig_charm", "iter_rpg:earth_ingot"],
        ["enigmaticaddons:earth_heart_fragment", "enigmaticlegacy:earth_heart", "iceandfire:ghost_sword", "ars_nouveau:earth_essence", ""],
        ["", "divinerpg:terran_knife", "enigmaticlegacy:earth_heart", "enigmaticaddons:earth_heart_fragment", ""],
        ["mowziesmobs:earthrend_gauntlet", "", "enigmaticaddons:earth_heart_fragment", "", ""]
    ])
    //神圣之剑===========西北同盟
    event.shaped(Item.of("divinerpg:divine_sword", 1),[
        ["", "", "ars_nouveau:starbuncle_shards", "create:chromatic_compound"],
        ["", "botania:quartz_sunny", "botania:cosmetic_kamui_eye", "ars_nouveau:starbuncle_shards"],
        ["divinerpg:divine_stone", "iter_rpg:earth_sword", "botania:quartz_sunny", ""],
        ["iter_rpg:sacred_twig", "divinerpg:divine_stone", "", ""]
    ])
    //伊甸之刃
    event.shaped(Item.of("divinerpg:eden_blade", 1),[
        ["", "goety:fire_blast_focus", "divinerpg:inferno_sword", "divinerpg:scorching_sword"],
        ["", "divinerpg:eden_chunk", "goety:leaping_focus", "botania:manasteel_sword"],
        ["", "divinerpg:divine_sword", "divinerpg:eden_chunk", "goety:thunderbolt_focus"],
        ["botania:skydirt_rod", "", "", ""]
    ])
    //生命剑
    event.shaped(Item.of("l2complements:totemic_gold_sword", 1),[
        ["", "", "", "bedrock_edition_features:elixir", "bedrock_edition_features:element_34"],
        ["", "", "divinerpg:green_diamond_chunk", "iceandfire:hydra_fang", "bedrock_edition_features:elixir"],
        ["l2complements:totemic_gold_ingot", "goety:soul_emerald", "divinerpg:eden_block", "divinerpg:green_diamond_chunk", ""],
        ["", "goety:magic_emerald", "goety:soul_emerald", "", ""],
        ["divinerpg:eden_blade", "", "l2complements:totemic_gold_ingot", "", ""]
    ])
    //金色长矛============扬汤止沸
    event.shaped(Item.of("iter_rpg:golden_spear", 1),[
        ["", "", "ars_nouveau:starbuncle_shards", "divinerpg:yellow_diamond_chunk"],
        ["", "create:golden_sheet", "undergarden:regalium_crystal", "ars_nouveau:starbuncle_shards"],
        ["", "iter_rpg:earth_sword", "create:golden_sheet", ""],
        ["minecraft:blaze_rod", "", "", ""]
    ])
    //伊甸锹镐斧
    event.shaped(Item.of("divinerpg:eden_shickaxe", 1),[
        ["", "", "", "", "divinerpg:eden_shovel"],
        ["divinerpg:eden_pickaxe", "divinerpg:eden_hoe", "l2complements:totemic_gold_ingot", "divinerpg:eden_sparkles", "divinerpg:eden_chunk"],
        ["infinite_abyss:flawless_red_crystal", "twilightforest:diamond_minotaur_axe", "spartanweaponry:netherite_quarterstaff", "divinerpg:eden_chunk", "divinerpg:eden_chunk"],
        ["", "spartanweaponry:netherite_quarterstaff", "divinerpg:eden_chunk", "sth_i_need:cyber_light_block", "divinerpg:eden_axe"],
        ["iter_rpg:golden_spear", "", "", "", ""]
    ])
    //冰冻法杖
    event.shaped(Item.of("savage_and_ravage:wand_of_freezing", 1),[
        ["", "", "nameless_trinkets:ice_cube", "divinerpg:ice_shards", "infinite_abyss:light_blue_crystal"],
        ["", "", "", "goety:ice_cube", "divinerpg:ice_shards"],
        ["", "minecraft:snowball", "goety:iceology_focus", "", "nameless_trinkets:ice_cube"],
        ["", "divinerpg:eden_shickaxe", "minecraft:snowball", "", ""],
        ["divinerpg:aquatic_blaze_rod", "", "", "", ""]
    ])
    //下界合金强化重弩
    event.shaped(Item.of("spartanweaponry:netherite_heavy_crossbow", 1),[
        ["cataclysm:witherite_ingot", "minecraft:netherite_ingot", "botania:crystal_bow"],
        ["minecraft:netherite_ingot", "spartanweaponry:handle", ""],
        ["botania:crystal_bow", "", "divinerpg:serenade_of_death"]
    ])
    //伊甸之弓
    event.shaped(Item.of("divinerpg:eden_bow", 1),[
        ["divinerpg:eden_chunk", "create:brass_ingot", "divinerpg:eden_chunk"],
        ["create:brass_ingot", "divinerpg:eden_heart", ""],
        ["divinerpg:eden_chunk", "", "spartanweaponry:netherite_heavy_crossbow"]
    ])
    //伊甸突击者
    event.shaped(Item.of("divinerpg:eden_blitz", 1),[
        ["divinerpg:eden_bow", "ars_nouveau:glyph_launch", ""],
        ["", "divinerpg:eden_phaser", "goety:fireball_focus"],
        ["create:hand_crank", "", "divinerpg:aquatic_blaze_rod"]
    ])
    //黄金怒火
    event.shaped(Item.of("divinerpg:golden_fury", 1),[
        ["yuushya:shimmering_pearl", "l2hostility:charm_of_looting_1", ""],
        ["divinerpg:fury_fire", "cataclysm:wither_assault_shoulder_weapon", "l2hostility:charm_of_looting_1"],
        ["", "divinerpg:fury_fire", "divinerpg:eden_blitz"]
    ])
    //伊甸神盾
    event.shaped(Item.of("divinerpg:eden_shield", 1),[
        ["divinerpg:eden_wood", "spartanshields:diamond_tower_shield", "divinerpg:eden_wood"],
        ["divinerpg:eden_wood", "divinerpg:eden_block", "divinerpg:eden_wood"],
        ["", "minecraft:totem_of_undying", ""]
    ])
    //泰拉钢盾牌
    event.replaceInput({output:"extrabotany:terrasteel_shield"}, "minecraft:shield", "divinerpg:eden_shield")
    //下界合金剑
    event.shaped(Item.of("minecraft:netherite_sword", 1),[
        ["", "", "", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
        ["minecraft:crying_obsidian", "minecraft:crying_obsidian", "minecraft:netherite_ingot", "botania:gaia_ingot", "minecraft:netherite_ingot"],
        ["minecraft:crying_obsidian", "divinerpg:oxdrite_ingot", "minecraft:jigsaw", "minecraft:netherite_ingot", ""],
        ["", "l2complements:totemic_gold_sword", "divinerpg:oxdrite_ingot", "minecraft:crying_obsidian", ""],
        ["botania:gravity_rod", "", "minecraft:crying_obsidian", "minecraft:crying_obsidian", ""]
    ])
    event.shaped(Item.of("minecraft:netherite_sword", 1),[
        ["", "", "", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
        ["minecraft:crying_obsidian", "minecraft:crying_obsidian", "minecraft:netherite_ingot", "botania:gaia_ingot", "minecraft:netherite_ingot"],
        ["minecraft:crying_obsidian", "divinerpg:oxdrite_ingot", "minecraft:jigsaw", "minecraft:netherite_ingot", ""],
        ["", "savage_and_ravage:wand_of_freezing", "divinerpg:oxdrite_ingot", "minecraft:crying_obsidian", ""],
        ["botania:gravity_rod", "", "minecraft:crying_obsidian", "minecraft:crying_obsidian", ""]
    ])
    //幽匿剑
    event.shaped(Item.of("l2complements:sculkium_sword", 1),[
        ["", "", "", "deeperdarker:soul_dust", "deeperdarker:soul_crystal"],
        ["", "", "l2complements:sculkium_ingot", "divinerpg:wildwood_chunk", "deeperdarker:soul_dust"],
        ["", "enigmaticlegacy:mending_mixture", "l2hostility:chaos_ingot", "l2complements:sculkium_ingot", ""],
        ["", "deeperdarker:warden_sword", "enigmaticlegacy:twisted_heart", "", ""],
        ["deeperdarker:sculk_bone", "", "", "", ""]
    ])
    event.shaped(Item.of("l2complements:sculkium_sword", 1),[
        ["", "", "", "deeperdarker:soul_dust", "deeperdarker:soul_crystal"],
        ["", "", "l2complements:sculkium_ingot", "divinerpg:wildwood_chunk", "deeperdarker:soul_dust"],
        ["", "enigmaticlegacy:mending_mixture", "l2hostility:chaos_ingot", "l2complements:sculkium_ingot", ""],
        ["", "iter_rpg:void_sword", "enigmaticlegacy:twisted_heart", "", ""],
        ["deeperdarker:sculk_bone", "", "", "", ""]
    ])
    //末影剑
    event.shaped(Item.of("divinerpg:ender_sword", 1),[
        ["", "", "", "l2hostility:witch_droplet", "l2hostility:chaos_ingot"],
        ["", "l2complements:shulkerate_ingot", "l2hostility:hostility_orb", "cataclysm:enderite_ingot", "l2hostility:witch_droplet"],
        ["divinerpg:shadow_bar", "", "divinerpg:legendary_ender_eye", "l2hostility:hostility_orb", ""],
        ["", "l2complements:sculkium_sword", "", "l2complements:shulkerate_ingot", ""],
        ["enigmaticlegacy:ender_rod", "", "divinerpg:shadow_bar", "", ""]
    ])
    //真空刀
    event.shaped(Item.of("iter_rpg:void_sword", 1),[
        ["", "", "", "", "iter_rpg:void_ingot"],
        ["", "", "iter_rpg:void_ingot", "botania:ender_air_bottle", ""],
        ["", "iceandfire:dread_shard", "goety:magic_bolt_focus", "iter_rpg:void_ingot", ""],
        ["", "iter_rpg:starlessness", "iceandfire:dread_shard", "", ""],
        ["savage_and_ravage:wand_of_freezing", "", "", "", ""]
    ])
    //潜影剑
    event.shaped(Item.of("l2complements:shulkerate_sword", 1),[
        ["", "", "", "l2complements:shulkerate_ingot", "goety:flying_focus"],
        ["", "", "l2complements:shulkerate_ingot", "infinite_abyss:violet_diamond", ""],
        ["", "infinite_abyss:astarium_crystal", "l2complements:shulkerate_ingot", "", ""],
        ["", "divinerpg:ender_sword", "infinite_abyss:astarium_crystal", "", ""],
        ["trials:breeze_rod", "", "", "", ""]
    ])
    //弓头鲸
    event.shaped(Item.of("divinerpg:bowhead_anchor", 1),[
        ["divinerpg:shark_fin", "divinerpg:whale_fin", "divinerpg:dual_claw"],
        ["trials:breeze_rod", "divinerpg:crab_anchor", "divinerpg:whale_fin"],
        ["divinerpg:golden_fury", "trials:breeze_rod", "divinerpg:shark_fin"]
    ])
    //原始森林之弓
    event.shaped(Item.of("divinerpg:wildwood_bow", 1),[
        ["l2complements:eternium_ingot", "divinerpg:wildwood_chunk", "botania:mana_string"],
        ["divinerpg:wildwood_chunk", "divinerpg:bowhead_anchor", ""],
        ["botania:mana_string", "", "l2complements:sonic_shooter"]
    ])
    //龙息弓
    event.replaceInput({output:"enigmaticaddons:dragon_bow"}, "minecraft:netherite_ingot", "divinerpg:wildwood_bow")
    //黑暗剑
    event.shaped(Item.of("goety:dark_sword", 1),[
        ["", "", "", "l2complements:sculkium_ingot", "l2complements:sculkium_ingot"],
        ["", "", "goety:dark_ingot", "l2hostility:chaos_ingot", "l2complements:sculkium_ingot"],
        ["goety:shadow_essence", "goety:dark_ingot", "iter_rpg:tormentor", "goety:dark_ingot", ""],
        ["goety:shadow_essence", "l2complements:totemic_gold_sword", "goety:dark_ingot", "", ""],
        ["trials:breeze_rod", "goety:shadow_essence", "goety:shadow_essence", "", ""]
    ])
    event.shaped(Item.of("goety:dark_sword", 1),[
        ["", "", "", "l2complements:sculkium_ingot", "l2complements:sculkium_ingot"],
        ["", "", "goety:dark_ingot", "l2hostility:chaos_ingot", "l2complements:sculkium_ingot"],
        ["goety:shadow_essence", "goety:dark_ingot", "iter_rpg:tormentor", "goety:dark_ingot", ""],
        ["goety:shadow_essence", "savage_and_ravage:wand_of_freezing", "goety:dark_ingot", "", ""],
        ["trials:breeze_rod", "goety:shadow_essence", "goety:shadow_essence", "", ""]
    ])
    //不详镰刀
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "divinerpg:golden_fury"
        },
        "craftType": "forge",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
            "item": "goety:savage_tooth"
            },
            {
            "item": "goety:hunger_core"
            },
            {
            "item": "goety:cursed_ingot"
            },
            {
            "item": "iter_rpg:flawless_diamond"
            },
            {
            "tag": "goety:haunted_logs"
            },
            {
            "item":"iter_rpg:void_scythe"
            },
            {
            "item":"l2complements:sonic_shooter"
            }
        ],
        "result": {
            "item": "goety:dark_scythe"
        }
    })
    //黑暗镰刀
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:dark_scythe"
        },
        "craftType": "forge",
        "soulCost": 1,
        "duration": 30,
        "ingredients": [
            {
            "item": "goety:dark_ingot"
            },
            {
            "item": "undergarden:froststeel_ingot"
            },
            {
            "item": "l2complements:eternium_ingot"
            },
            {
            "item": "goety:magic_emerald"
            },
            {
            "item": "goety:occult_fabric"
            },
            {
            "item": "l2hostility:hostility_orb"
            },
            {
            "item": "ars_nouveau:manipulation_essence"
            },
            {
            "item": "l2complements:captured_wind"
            }
        ],
        "result": {
            "item": "goety:dark_metal_scythe"
        }
    })
    //死神之镰
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:dark_metal_scythe"
        },
        "craftType": "necroturgy",
        "soulCost": 1,
        "duration": 30,
        "ingredients": [
            {
            "item": "iceandfire:witherbone"
            },
            {
            "item": "iceandfire:witherbone"
            },
            {
            "tag": "minecraft:soul_fire_base_blocks"
            },
            {
            "item": "l2hostility:chaos_ingot"
            },
            {
            "item": "goety:unholy_blood"
            },
            {
            "item": "minecraft:dragon_breath"
            },
            {
            "item": "goety:magic_bolt_focus"
            },
            {
            "item": "iceandfire:hydra_fang"
            }
        ],
        "result": {
            "item": "goety:death_scythe"
        }
    })
    //紫晶剑
    event.shaped(Item.of("aether:zanite_sword", 1),[
        ["", "", "", "aether:zanite_gemstone", "apotheosis:rare_material"],
        ["aether:zanite_gemstone", "", "aether:ambrosium_shard", "aether:gravitite_sword", "aether:zanite_gemstone"],
        ["aether:golden_amber", "infinite_abyss:violet_diamond", "iceandfire:tide_trident", "aether:ambrosium_shard", ""],
        ["", "divinerpg:ender_sword", "infinite_abyss:violet_diamond", "", ""],
        ["aether:skyroot_stick", "", "aether:golden_amber", "aether:zanite_gemstone", ""]
    ])
    //元素之剑
    event.shaped(Item.of("iter_rpg:elemental_sword", 1),[
        ["", "", "", "aether:ambrosium_shard", "iter_rpg:starlessness"],
        ["", "", "iter_rpg:primordial_ingot", "iter_rpg:primordial_ingot", ""],
        ["", "iter_rpg:harvest", "iter_rpg:eternal_torrent", "iter_rpg:solstice", ""],
        ["", "twilightforest:magic_beans", "iter_rpg:stormcaller", "", ""],
        ["aether:zanite_sword", "mowziesmobs:ice_crystal", "", "", ""]
    ])
    //龙霆钢剑
    event.shaped(Item.of("iceandfire:dragonsteel_lightning_sword", 1),[
        ["", "", "", "divinerpg:arcanium", "l2complements:heirophant_green"],
        ["", "", "ad_astra:etrium_ingot", "iceandfire:dragonbone_sword_lightning", "divinerpg:arcanium"],
        ["", "divinerpg:arcanium", "iceandfire:dragonsteel_lightning_axe", "ad_astra:etrium_ingot", ""],
        ["", "iter_rpg:elemental_sword", "divinerpg:arcanium", "", ""],
        ["iceandfire:witherbone", "", "", "", ""]
    ])
    //龙霜钢剑
    event.shaped(Item.of("iceandfire:dragonsteel_ice_sword", 1),[
        ["", "", "", "divinerpg:arcanium", "l2complements:heirophant_green"],
        ["", "", "ad_astra:etrium_ingot", "iceandfire:dragonbone_sword_ice", "divinerpg:arcanium"],
        ["", "divinerpg:arcanium", "iceandfire:dragonsteel_ice_axe", "ad_astra:etrium_ingot", ""],
        ["", "iter_rpg:elemental_sword", "divinerpg:arcanium", "", ""],
        ["iceandfire:witherbone", "", "", "", ""]
    ])
    //龙炎钢剑
    event.shaped(Item.of("iceandfire:dragonsteel_fire_sword", 1),[
        ["", "", "", "divinerpg:arcanium", "l2complements:heirophant_green"],
        ["", "", "ad_astra:etrium_ingot", "iceandfire:dragonbone_sword_fire", "divinerpg:arcanium"],
        ["", "divinerpg:arcanium", "iceandfire:dragonsteel_fire_axe", "ad_astra:etrium_ingot", ""],
        ["", "iter_rpg:elemental_sword", "divinerpg:arcanium", "", ""],
        ["iceandfire:witherbone", "", "", "", ""]
    ])
    //龙霆钢剑
    event.shaped(Item.of("iceandfire:dragonsteel_lightning_sword", 1),[
        ["", "", "", "divinerpg:arcanium", "l2complements:heirophant_green"],
        ["", "", "ad_astra:etrium_ingot", "iceandfire:dragonbone_sword_lightning", "divinerpg:arcanium"],
        ["", "divinerpg:arcanium", "iceandfire:dragonsteel_lightning_axe", "ad_astra:etrium_ingot", ""],
        ["", "iceandfire:dread_queen_sword", "divinerpg:arcanium", "", ""],
        ["iceandfire:witherbone", "", "", "", ""]
    ])
    //龙霜钢剑
    event.shaped(Item.of("iceandfire:dragonsteel_ice_sword", 1),[
        ["", "", "", "divinerpg:arcanium", "l2complements:heirophant_green"],
        ["", "", "ad_astra:etrium_ingot", "iceandfire:dragonbone_sword_ice", "divinerpg:arcanium"],
        ["", "divinerpg:arcanium", "iceandfire:dragonsteel_ice_axe", "ad_astra:etrium_ingot", ""],
        ["", "iceandfire:dread_queen_sword", "divinerpg:arcanium", "", ""],
        ["iceandfire:witherbone", "", "", "", ""]
    ])
    //龙炎钢剑
    event.shaped(Item.of("iceandfire:dragonsteel_fire_sword", 1),[
        ["", "", "", "divinerpg:arcanium", "l2complements:heirophant_green"],
        ["", "", "ad_astra:etrium_ingot", "iceandfire:dragonbone_sword_fire", "divinerpg:arcanium"],
        ["", "divinerpg:arcanium", "iceandfire:dragonsteel_fire_axe", "ad_astra:etrium_ingot", ""],
        ["", "iceandfire:dread_queen_sword", "divinerpg:arcanium", "", ""],
        ["iceandfire:witherbone", "", "", "", ""]
    ])
    //超级船锚
    event.shaped(Item.of("cataclysm:ceraunus", 1),[
        ["", "aquamirae:maze_rose", "aquamirae:poisoned_chakra", "cataclysm:chitin_claw", "eeeabsmobs:guardian_axe"],
        ["cataclysm:essence_of_the_storm", "", "cataclysm:lacrima", "aquamirae:whisper_of_the_abyss", "cataclysm:chitin_claw"],
        ["", "", "cataclysm:ancient_spear", "cataclysm:lacrima", "aquamirae:poisoned_chakra"],
        ["", "cataclysm:astrape", "", "", "aquamirae:maze_rose"],
        ["iceandfire:dragonsteel_ice_sword", "", "", "cataclysm:essence_of_the_storm", ""]
    ])
    event.shaped(Item.of("cataclysm:ceraunus", 1),[
        ["", "aquamirae:maze_rose", "aquamirae:poisoned_chakra", "cataclysm:chitin_claw", "eeeabsmobs:guardian_axe"],
        ["cataclysm:essence_of_the_storm", "", "cataclysm:lacrima", "aquamirae:whisper_of_the_abyss", "cataclysm:chitin_claw"],
        ["", "", "cataclysm:ancient_spear", "cataclysm:lacrima", "aquamirae:poisoned_chakra"],
        ["", "cataclysm:astrape", "", "", "aquamirae:maze_rose"],
        ["iceandfire:dragonsteel_lightning_sword", "", "", "cataclysm:essence_of_the_storm", ""]
    ])
    event.shaped(Item.of("cataclysm:ceraunus", 1),[
        ["", "aquamirae:maze_rose", "aquamirae:poisoned_chakra", "cataclysm:chitin_claw", "eeeabsmobs:guardian_axe"],
        ["cataclysm:essence_of_the_storm", "", "cataclysm:lacrima", "aquamirae:whisper_of_the_abyss", "cataclysm:chitin_claw"],
        ["", "", "cataclysm:ancient_spear", "cataclysm:lacrima", "aquamirae:poisoned_chakra"],
        ["", "cataclysm:astrape", "", "", "aquamirae:maze_rose"],
        ["iceandfire:dragonsteel_fire_sword", "", "", "cataclysm:essence_of_the_storm", ""]
    ])
    //炎葬
    event.shaped(Item.of("cataclysm:the_incinerator", 1),[
        ["", "", "", "cataclysm:ignitium_ingot", "l2complements:sun_membrane"],
        ["", "", "cataclysm:ignitium_ingot", "twilightforest:giant_sword", "cataclysm:ignitium_ingot"],
        ["l2hostility:imagine_breaker", "cataclysm:ignitium_ingot", "iceandfire:cyclops_eye", "cataclysm:ignitium_ingot", ""],
        ["minecraft:blaze_rod", "cataclysm:ceraunus", "cataclysm:ignitium_ingot", "", ""],
        ["extrabotany:excalibur", "minecraft:blaze_rod", "l2hostility:imagine_breaker", "", ""]
    ])
    //女皇悚怖之剑
    event.shaped(Item.of("iceandfire:dread_queen_sword", 1),[
        ["", "", "iceandfire:dread_shard", "cataclysm:crystallized_coral"],
        ["botania:dreadthorn", "iceandfire:dread_shard", "infinite_abyss:perfect_charium", "iceandfire:dread_shard"],
        ["", "aquamirae:terrible_sword", "iceandfire:dread_shard", ""],
        ["l2complements:shulkerate_sword", "", "botania:dreadthorn", ""]
    ])
    //悚怖尸巫之杖
    event.shaped(Item.of("iceandfire:lich_staff", 1),[
        ["", "iceandfire:dread_shard", "infinite_abyss:perfect_charium"],
        ["iceandfire:dread_shard", "goety:necro_staff", "iceandfire:dread_shard"],
        ["botania:dreadthorn", "iceandfire:dread_shard", ""]
    ])
    //昏域之弓
    event.shaped(Item.of("divinerpg:skythern_bow", 1),[
        ["enigmaticaddons:dragon_bow", "divinerpg:skythern_chunk", "divinerpg:skythern_chunk"],
        ["divinerpg:skythern_chunk", "twilightforest:magic_beans", "botania:red_string"],
        ["divinerpg:skythern_chunk", "botania:red_string", "eeeabsmobs:demolisher"]
    ])
    //死渊之弓
    event.shaped(Item.of("divinerpg:mortum_bow", 1),[
        ["divinerpg:skythern_bow", "divinerpg:mortum_chunk", "l2complements:force_field"],
        ["divinerpg:mortum_chunk", "extrabotany:failnaught", "l2hostility:imagine_breaker"],
        ["l2complements:force_field", "l2hostility:imagine_breaker", "goety:spooky_focus"]
    ])
    //断魂
    event.shaped(Item.of("cataclysm:soul_render", 1),[
        ["", "cataclysm:cursium_ingot", "cataclysm:cursium_ingot", "enigmaticlegacy:evil_ingot", "iceandfire:dragonsteel_lightning_ingot"],
        ["", "cataclysm:cursium_ingot", "enigmaticlegacy:evil_ingot", "iceandfire:dragonsteel_fire_ingot", "enigmaticlegacy:evil_ingot"],
        ["", "", "iceandfire:dragonsteel_ice_ingot", "enigmaticlegacy:evil_ingot", "cataclysm:cursium_ingot"],
        ["", "spartanweaponry:netherite_pike", "cataclysm:cursium_ingot", "cataclysm:cursium_ingot", ""],
        ["cataclysm:the_incinerator", "", "", "", ""]
    ])
    //源质塔盾
    event.replaceInput({output:"spartanshields:elementium_tower_shield"}, "botania:dreamwood_twig", "enigmaticlegacy:infernal_shield")
    //火焰壁徽
    event.replaceInput({output:"cataclysm:bulwark_of_the_flame"}, "minecraft:shield", "spartanshields:elementium_tower_shield")
})
