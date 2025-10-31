//配方环节
ServerEvents.recipes(event => {
    //紫水晶
    event.shaped(Item.of("minecraft:amethyst_shard", 3),[
        ["", "minecraft:purple_stained_glass", "minecraft:lapis_lazuli"],
        ["minecraft:purple_stained_glass","minecraft:lapis_lazuli","minecraft:purple_stained_glass"],
        ["minecraft:lapis_lazuli","minecraft:purple_stained_glass",""]
    ])

    //三个任务书箭头互相合成
    event.shapeless('linzhi:left', ['linzhi:right'])
    event.shapeless('linzhi:right', ['linzhi:mid'])
    event.shapeless('linzhi:mid', ['linzhi:left'])

    //木工作台
    event.shaped(Item.of("minecraft:crafting_table", 1), [
        ["minecraft:wooden_axe", "minecraft:stick"],
        ["#minecraft:planks", "#minecraft:planks"]
    ])
    //箱子
    event.shaped(Item.of("minecraft:chest", 1), [
        ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"],
        ["#minecraft:planks", "", "#minecraft:planks"],
        ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"]
    ])
    //回收台
    event.shaped(Item.of("corail_recycler:recycler", 1), [
        ["#minecraft:planks", "minecraft:diamond", "#minecraft:planks"],
        ["minecraft:iron_ingot", "#c:chests", "minecraft:iron_ingot"],
        ["#minecraft:planks", "create:brass_ingot", "#minecraft:planks"]
    ])

    //笔记本
    event.shaped(Item.of("ars_nouveau:worn_notebook", 1), [
        ["", "#botania:shimmering_mushrooms", ""],
        ["minecraft:lapis_lazuli", "minecraft:book", "minecraft:amethyst_shard"],
        ["", "iter_rpg:ink_bottle", ""]
    ])
    //无暇钻石
    event.smithing("iter_rpg:flawless_diamond", "botania:mana_bottle", "minecraft:diamond", "minecraft:diamond")
    //熔炉
    event.shaped(Item.of("minecraft:furnace", 1), [
        ["#nethersdelight:stone_crafting_materials_no_blackstone", "#nethersdelight:stone_crafting_materials_no_blackstone", "#nethersdelight:stone_crafting_materials_no_blackstone"],
        ["#nethersdelight:stone_crafting_materials_no_blackstone", "minecraft:cobblestone_slab", "#nethersdelight:stone_crafting_materials_no_blackstone"],
        ["#nethersdelight:stone_crafting_materials_no_blackstone", "#nethersdelight:stone_crafting_materials_no_blackstone", "#nethersdelight:stone_crafting_materials_no_blackstone"]
    ])
    //花药台
    event.shaped(Item.of("botania:apothecary_default", 1),[
        ["minecraft:cobblestone", "#botania:petals", "minecraft:cobblestone"],
        ["", "minecraft:cobblestone", ""],
        ["minecraft:cobblestone", "divinerpg:terran_stone", "minecraft:cobblestone"]
    ])

    //白雏菊
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [
            {
            "tag": "botania:petals/white"
            },
            {
            "tag": "botania:petals/white"
            },
            {
            "tag": "botania:petals/white"
            },
            {
            "tag": "botania:petals/white"
            }
        ],
        "output": {
            "item": "botania:pure_daisy"
        },
        "reagent": {
            "item": "minecraft:oxeye_daisy"
        }
    })
    //魔源宝石
    event.custom({"type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:lapis_lazuli"
        },
        "pedestalItems": [],
        "output": "ars_nouveau:source_gem",
        "source": 500
    })
    event.custom({"type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:amethyst_shard"
        },
        "pedestalItems": [],
        "output": "ars_nouveau:source_gem",
        "source": 500
    })
    event.custom({"type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:emerald"
        },
        "pedestalItems": [],
        "output": "ars_nouveau:source_gem",
        "source": 500
    })
    //气之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"botania:rune_air"
        },
        "output": "ars_nouveau:air_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "minecraft:feather"
            }
            },
            {
            "item": {
                "item": "ars_nouveau:wilden_wing"
            }
            }
        ],
        "source": 0
    })
    //火之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"botania:endoflame"
        },
        "output": "ars_nouveau:fire_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "minecraft:flint_and_steel"
            }
            },
            {
            "item": {
                "item": "minecraft:gunpowder"
            }
            }
        ],
        "source": 0
    })
    //土之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"farmersdelight:rich_soil"
        },
        "output": "ars_nouveau:earth_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "yuushya:sprouting_dirt"
            }
            },
            {
            "item": {
                "tag": "forge:seeds"
            }
            }
        ],
        "source": 0
    })
    //召唤之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"minecraft:totem_of_undying"
        },
        "output": "ars_nouveau:conjuration_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "ars_nouveau:wilden_horn"
            }
            },
            {
            "item": {
                "item": "ars_nouveau:starbuncle_shards"
            }
            }
        ],
        "source": 0
    })
    //防护之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"nameless_trinkets:wooden_stick"
        },
        "output": "ars_nouveau:abjuration_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "savage_and_ravage:blast_proof_plating"
            }
            },
            {
            "item": {
                "item": "minecraft:fermented_spider_eye"
            }
            }
        ],
        "source": 0
    })
    //水之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"botania:rune_water"
        },
        "output": "ars_nouveau:water_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "minecraft:snow_block"
            }
            },
            {
            "item": {
                "item": "minecraft:water_bucket"
            }
            }
        ],
        "source": 0
    })
    //操纵之精华
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item":"minecraft:ender_pearl"
        },
        "output": "ars_nouveau:manipulation_essence",
        "pedestalItems": [
            {
            "item": {
                "tag": "forge:gems/source"
            }
            },
            {
            "item": {
                "item": "create:peculiar_bell"
            }
            },
            {
            "item": {
                "item": "botania:animated_torch"
            }
            }
        ],
        "source": 0
    })

    //紫焰粉
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
            "item": "divinerpg:purple_blaze"
        },
        "pedestalItems": [
            {
            "item": "divinerpg:molten_shards"
            },
            {
            "item": "ars_nouveau:source_gem"
            },
            {
            "item": "divinerpg:molten_shards"
            },
            {
            "item": "ars_nouveau:source_gem"
            },
            {
            "item": "divinerpg:molten_shards"
            },
            {
            "item": "ars_nouveau:source_gem"
            },
            {
            "item": "divinerpg:molten_shards"
            },
            {
            "item": "ars_nouveau:source_gem"
            }
        ],
        "reagent": [
            {
            "item": "minecraft:blaze_powder"
            }
        ],
        "sourceCost": 1000
    })
    //紫钻石
    event.blasting("infinite_abyss:violet_diamond", "iter_rpg:flawless_diamond", 0.75, 15*20)
    //遗忆锭
    event.shaped(Item.of("undergarden:forgotten_ingot", 1), [
        ["", "undergarden:forgotten_nugget", ""],
        ["undergarden:forgotten_nugget", "twilightforest:ironwood_ingot", "undergarden:forgotten_nugget"],
        ["", "undergarden:forgotten_nugget", ""]
    ])
    event.shaped(Item.of("undergarden:forgotten_ingot", 9),[
        ["undergarden:forgotten_block"]
    ])
    //蛋白石
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "infinite_abyss:opal"
        },
        "mana": 25000,
        "output": {
            "item": "infinite_abyss:cursed_opal"
        }
    })
    //水元素刷怪蛋
    event.shaped(Item.of("iter_rpg:water_elemental_spawn_egg", 1),[
        ["", "", ""],
        ["botania:hydroangeas", "minecraft:egg", "botania:hydroangeas"],
        ["", "minecraft:water_bucket", ""]
    ])
    //空气元素刷怪蛋
    event.shaped(Item.of("iter_rpg:air_elemental_spawn_egg", 1),[
        ["", "ars_nouveau:glyph_wind_shear", ""],
        ["ars_nouveau:air_essence", "ars_nouveau:summon_focus", "goety:updraft_focus"],
        ["", "botania:bubbell", ""]
    ])
    //火元素刷怪蛋
    event.shaped(Item.of("iter_rpg:fire_elemental_spawn_egg", 1),[
        ["", "yuushya:sparking_flame", ""],
        ["ars_nouveau:fire_essence", "ars_nouveau:summon_focus", "ars_nouveau:fire_essence"],
        ["", "minecraft:torchflower", ""]
    ])
    //大地元素刷怪蛋
    event.shaped(Item.of("iter_rpg:earth_elemental_spawn_egg", 1),[
        ["", "botania:grass_seeds", ""],
        ["botania:rune_earth", "ars_nouveau:summon_focus", "divinerpg:terran_stone"],
        ["", "enigmaticaddons:earth_heart_fragment", ""]
    ])
    //虚空元素刷怪蛋
    event.shaped(Item.of("iter_rpg:void_elemental_spawn_egg", 1),[
        ["", "goety:barricade_focus", ""],
        ["", "ars_nouveau:summon_focus", ""],
        ["nameless_trinkets:fractured_nullstone", "", "minecraft:ender_eye"]
    ])
    event.replaceInput({output:"nameless_trinkets:fractured_nullstone"}, "minecraft:lapis_block", "ars_nouveau:source_gem")
    //空白符文
    event.shaped(Item.of("iter_rpg:empty_rune", 1),[
        ["", "ars_nouveau:manipulation_essence", ""],
        ["", "minecraft:stone", ""],
        ["iter_rpg:abyssquartz_shard", "botania:rune_earth", "iter_rpg:ametrine_nugget"]
    ])
    //埃米特林升级板
    event.shaped(Item.of("iter_rpg:ametrine_upgrade", 1),[
        ["yuushya:stone_with_dot", "yuushya:stone_with_dot", "yuushya:stone_with_dot"],
        ["yuushya:stone_with_dot", "iter_rpg:empty_rune", "yuushya:stone_with_dot"],
        ["yuushya:stone_with_dot", "iter_rpg:ametrine_ingot", "yuushya:stone_with_dot"]
    ])
    //暗石卵石
    event.stonecutting("iter_rpg:grimstone_pebble", "divinerpg:shadow_stone")
    //遗落铃铛
    event.shaped(Item.of("infinite_abyss:summoning_bell", 1),[
        ["divinerpg:terran_shards", "create:desk_bell", "divinerpg:terran_shards"],
        ["divinerpg:terran_shards", "minecraft:bell", "divinerpg:terran_shards"],
        ["divinerpg:terran_shards", "divinerpg:terran_shards", "divinerpg:terran_shards"]
    ])
    //钟
    event.shaped(Item.of("minecraft:bell", 1),[
        ["yuushya:horizontal_stick_a_oak_blindwall", "yuushya:horizontal_stick_a_oak_blindwall", "create:brass_sheet"],
        ["create:brass_sheet", "", "create:brass_sheet"],
        ["create:brass_sheet", "create:brass_sheet", "create:brass_sheet"]
    ])
    //泰拉凝聚板
    event.shaped(Item.of("botania:terra_plate", 1),[
        ["botania:manasteel_block", "goety:cursed_ingot", "undergarden:regalium_block"],
        ["botania:rune_air", "ars_nouveau:ritual_harvest", "botania:rune_fire"],
        ["botania:rune_earth", "botania:rune_mana", "botania:rune_water"]
    ])
    //黄铜
    event.shaped(Item.of("create:brass_ingot", 1),[
        ["minecraft:copper_ingot", "minecraft:copper_ingot", "minecraft:copper_ingot"],
        ["minecraft:copper_ingot", "create:andesite_alloy", "minecraft:copper_ingot"],
        ["minecraft:copper_ingot", "minecraft:copper_ingot", "minecraft:copper_ingot"]
    ])
    //腐烂之心
    event.shaped(Item.of("infinite_abyss:puffball_heart", 1),[
        ["infinite_abyss:glow_bulb", "nethersdelight:warped_moldy_meat", "infinite_abyss:glow_bulb"],
        ["minecraft:rotten_flesh", "infinite_abyss:deeprock_golem_spirit_stone", "minecraft:rotten_flesh"],
        ["farmersdelight:rotten_tomato", "undergarden:utherium_block", "farmersdelight:rotten_tomato"]
    ])
    //巨化腐烂之心
    event.shaped(Item.of("infinite_abyss:enchanted_puffball_heart", 1),[
        ["infinite_abyss:large_brown_mushroom", "infinite_abyss:puffball_block", "infinite_abyss:large_brown_mushroom"],
        ["infinite_abyss:mycelium_vine", "infinite_abyss:puffball_heart", "infinite_abyss:mycelium_vine"],
        ["infinite_abyss:large_brown_mushroom", "infinite_abyss:glow_bulb", "infinite_abyss:large_brown_mushroom"]
    ])
    //异彩化合物
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated", 
        "ingredients": [
            {
                "item": "twilightforest:rainbow_oak_leaves"
            },
            {
                "item": "twilightforest:rainbow_oak_leaves"
            },
            {
                "item": "twilightforest:rainbow_oak_leaves"
            },
            {
                "item": "infinite_abyss:rainbow_crystal"
            },
            {
                "item": "create:powdered_obsidian"
            },
            {
                "item": "create:powdered_obsidian"
            },
            {
                "item": "create:powdered_obsidian"
            },
            {
                "item": "create:polished_rose_quartz"
            }
        ],
        "results": [
            {
                "item":"create:chromatic_compound"
            }
        ]
    })
    //伊甸宝石快
    event.shaped(Item.of("divinerpg:eden_chunk", 1),[
        ["divinerpg:eden_gem", "divinerpg:eden_gem", "divinerpg:eden_gem"],
        ["", "divinerpg:eden_gem", ""],
        ["minecraft:copper_ingot", "goety:magic_emerald", "ars_nouveau:source_gem"]
    ])
    //真空锭
    event.shaped(Item.of("iter_rpg:void_ingot", 1),[
        ["", "iter_rpg:void_rune", ""],
        ["", "iter_rpg:ametrine_ingot", ""],
        ["goety:tunnel_focus", "nameless_trinkets:fractured_nullstone", "goety:tunnel_focus"]
    ])
    //下界合金锭
    event.shaped(Item.of("minecraft:netherite_ingot", 1), [
        ["minecraft:gold_ingot", "minecraft:netherite_scrap", "minecraft:gold_ingot"],
        ["divinerpg:shadow_bar", "create:brass_sheet", "divinerpg:shadow_bar"]
    ])
    event.shaped(Item.of("minecraft:netherite_ingot", 1),[
        ["corail_recycler:netherite_nugget", "corail_recycler:netherite_nugget", "corail_recycler:netherite_nugget"],
        ["corail_recycler:netherite_nugget", "corail_recycler:netherite_nugget", "corail_recycler:netherite_nugget"],
        ["corail_recycler:netherite_nugget", "corail_recycler:netherite_nugget", "corail_recycler:netherite_nugget"]
    ])
    event.shaped(Item.of("corail_recycler:netherite_nugget", 9),[
        ["minecraft:netherite_ingot"]
    ])
    //忘却冰晶
    event.shaped(Item.of("enigmaticaddons:forgotten_ice", 1),[
        ["minecraft:blue_ice", "minecraft:blue_ice", "minecraft:blue_ice", "minecraft:blue_ice", "minecraft:blue_ice"],
        ["minecraft:blue_ice", "infinite_abyss:icicle_bottom", "infinite_abyss:ice_spike", "infinite_abyss:icicle_bottom", "minecraft:blue_ice"],
        ["minecraft:blue_ice", "goety:chilling_focus", "goety:frost_crown", "ars_nouveau:glyph_cold_snap", "minecraft:blue_ice"],
        ["minecraft:blue_ice", "infinite_abyss:ice_rock", "infinite_abyss:light_blue_crystal", "infinite_abyss:ice_rock", "minecraft:blue_ice"],
        ["minecraft:blue_ice", "minecraft:blue_ice", "minecraft:blue_ice", "minecraft:blue_ice", "minecraft:blue_ice"]
    ])
    //勘探护身符
    event.shaped(Item.of("infinite_abyss:exploration_talisman", 1),[
        ["minecraft:golden_apple", "infinite_abyss:enchanted_puffball_heart", "minecraft:golden_apple"],
        ["minecraft:golden_apple", "botania:third_eye", "minecraft:golden_apple"],
        ["botania:quartz_sunny", "botania:quartz_sunny", "botania:quartz_sunny"]
    ])
    //动力钻头
    event.shaped(Item.of("create:mechanical_drill", 1),[
        ["create:andesite_casing", "create:andesite_alloy", ""],
        ["create:andesite_casing", "minecraft:magma_block", "infinite_abyss:astarium_crystal"],
        ["create:andesite_casing", "create:andesite_alloy", ""]
    ])
    //钻头零件
    event.shaped(Item.of("infinite_abyss:drill_part", 1),[
        ["create:precision_mechanism"],
        ["minecraft:iron_ingot"]
    ])
    //宝石切割台
    event.shaped(Item.of("apotheosis:gem_cutting_table", 1),[
        ["infinite_abyss:fourth_layer_deepstone", "ae2:certus_quartz_cutting_knife", "infinite_abyss:fourth_layer_deepstone"],
        ["divinerpg:eden_wood", "apotheosis:gem_fused_slate", "divinerpg:eden_wood"],
        ["divinerpg:eden_wood", "divinerpg:eden_block", "divinerpg:eden_wood"]
    ])
    //亡魂之泪
    event.shaped(Item.of("l2complements:cursed_droplet", 1),[
        ["botania:rune_greed", "goety:soul_bolt_focus", "botania:rune_greed"],
        ["minecraft:ghast_tear", "l2complements:guardian_eye", "minecraft:ghast_tear"],
        ["nameless_trinkets:tear_of_the_sea", "iter_rpg:bottle_of_obsidian_tears", "nameless_trinkets:tear_of_the_sea"]
    ])
    //生命精华
    event.shaped(Item.of("l2complements:life_essence", 1),[
        ["divinerpg:healing_stone", "l2complements:totemic_gold_block", "iter_rpg:netherite_ring_sanguarnet"],
        ["l2complements:totemic_gold_block", "infinite_abyss:heart_of_restoration", "l2complements:totemic_gold_block"],
        ["farmersdelight:fruit_salad", "l2complements:totemic_gold_block", "ars_nouveau:thread_life_drain"]
    ])
    //恶意吸收宝珠
    event.shaped(Item.of("l2hostility:hostility_orb", 1),[
        ["divinerpg:gold_lamp", "create:refined_radiance", "divinerpg:gold_lamp"],
        ["create:refined_radiance", "goety:ring_of_want", "create:refined_radiance"],
        ["divinerpg:gold_lamp", "create:refined_radiance", "divinerpg:gold_lamp"]
    ])
    //末影合金锭
    event.shaped(Item.of("cataclysm:enderite_ingot", 1),[
        ["divinerpg:ender_stone", "extrabotany:orichalcos_ingot", "divinerpg:ender_stone"],
        ["mutantmonsters:endersoul_hand", "cataclysm:void_core", "mutantmonsters:endersoul_hand"]
    ])
    //星尘
    event.shaped(Item.of("enigmaticlegacy:astral_dust", 5),[
        ["obscure_api:astral_dust", "iceandfire:pixie_dust", "obscure_api:astral_dust"],
        ["botania:pixie_dust", "minecraft:nether_star", "botania:pixie_dust"],
        ["obscure_api:astral_dust", "botania:mana_powder", "obscure_api:astral_dust"]
    ])
    //星尘
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated", 
        "ingredients": [
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "goety:ice_cube"
            },
            {
                "item":"aquamirae:abyssal_amethyst"
            },
            {
                "item":"aquamirae:abyssal_amethyst"
            },
            {
                "item":"aquamirae:abyssal_amethyst"
            },
            {
                "item":"ars_nouveau:starbuncle_shards"
            },
            {
                "item":"aquamirae:esca"
            }
        ],
        "results": [
            {
                "item": "obscure_api:astral_dust"
            }
        ]
    })
    //星尘冰
    event.shaped(Item.of("iter_rpg:stardust_ice", 1),[
        ["", "l2complements:hard_ice", "obscure_api:astral_dust"],
        ["goety:ice_cube", "obscure_api:astral_dust", "goety:frostborn_focus"],
        ["obscure_api:astral_dust", "goety:frostborn_focus", ""]
    ])
    //元素升级组件
    event.replaceInput({output:"iter_rpg:elemental_upgrade"}, "iter_rpg:elemental_upgrade", "minecraft:netherite_upgrade_smithing_template")
    //巨石块
    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
            "item": "botania:metamorphic_plains_stone"
            },
            {
            "item": "botania:metamorphic_plains_stone"
            },
            {
            "item": "botania:metamorphic_plains_stone"
            },
            {
            "item": "botania:metamorphic_plains_stone"
            },
            {
            "item": "minecraft:andesite"
            },
            {
            "item": "minecraft:andesite"
            },
            {
            "item": "minecraft:andesite"
            }
        ],
        "mana": 500000,
        "result": {
            "item": "iter_rpg:monolith_stone"
        }
    })
    //潜影锭
    event.replaceInput({output:"l2complements:shulkerate_ingot"}, "minecraft:iron_ingot", "botania:gaia_ingot")
    //原始森林宝石快
    event.shaped(Item.of("divinerpg:wildwood_chunk", 1),[
        ["divinerpg:wildwood_gem", "divinerpg:wildwood_gem", "divinerpg:wildwood_gem"],
        ["divinerpg:wildwood_gem", "divinerpg:eden_chunk", "divinerpg:wildwood_gem"],
        ["divinerpg:wildwood_gem", "divinerpg:wildwood_gem", "divinerpg:wildwood_gem"]
    ])
    //龙首
    event.shaped(Item.of("minecraft:dragon_head", 1),[
        ["", "nameless_trinkets:dragons_eye", ""],
        ["goety:savage_tooth", "ars_nouveau:bookwyrm_charm", "apotheosis:infused_breath"],
        ["goety:savage_tooth", "nameless_trinkets:dragons_eye", ""]
    ])
    //龙息
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
            "item": "minecraft:dragon_breath"
        },
        "pedestalItems": [
            {
            "item": "ars_nouveau:air_essence"
            },
            {
            "item":"botania:blacker_lotus"
            },
            {
            "item":"iceandfire:lightning_dragon_blood"
            },
            {
            "item":"iceandfire:ice_dragon_blood"
            },
            {
            "item":"iceandfire:fire_dragon_blood"
            },
            {
            "item":"iter_rpg:blood_bottle"
            },
            {
            "item":"botania:dragonstone"
            },
            {
            "item":"ars_nouveau:air_essence"
            },
            {
            "item":"ars_nouveau:air_essence"
            },
            {
            "item":"ars_nouveau:air_essence"
            }
        ],
        "reagent": [
            {
            "item": "iter_rpg:seven_seas_concoction"
            }
        ],
        "sourceCost": 3000
    })
    //千咒卷轴
    event.replaceInput({output:"enigmaticlegacy:cursed_scroll"}, "minecraft:ink_sac", "botania:phantom_ink")
    event.replaceInput({output:"enigmaticlegacy:cursed_scroll"}, "minecraft:feather", "iceandfire:stymphalian_bird_feather")
    //兽友指南
    event.replaceInput({output:"enigmaticlegacy:animal_guidebook"}, "minecraft:gold_nugget", "ars_nouveau:thread_starbuncle")
    //烈焰之壁
    event.replaceInput({output:"enigmaticlegacy:infernal_shield"}, "minecraft:shield", "extrabotany:terrasteel_shield")
    event.replaceInput({output:"enigmaticlegacy:infernal_shield"}, "minecraft:blaze_powder", "divinerpg:fury_fire")
    //腐化祭坛
    event.shaped(Item.of("divinerpg:altar_of_corruption", 1),[
        ["apotheosis:treasure_shelf", "minecraft:enchanting_table", "apotheosis:treasure_shelf"],
        ["divinerpg:corrupted_stone", "infinite_abyss:enhancing_table", "divinerpg:corrupted_stone"],
        ["undergarden:utherium_block", "undergarden:utherium_block", "undergarden:utherium_block"]
    ])
    //神秘之眼
    event.shaped(Item.of("endrem:cryptic_eye", 1),[
        ["botania:lime_petal", "nameless_trinkets:unknown_fragment", "botania:lime_petal"],
        ["create:experience_nugget", "goety:mystic_core", "create:experience_nugget"],
        ["minecraft:experience_bottle", "nameless_trinkets:experience_battery", "minecraft:experience_bottle"]
    ])
    //邪恶之石
    event.replaceInput({output:"enigmaticlegacy:cursed_stone"}, "minecraft:prismarine_crystals", "iceandfire:hippocampus_fin")
    event.replaceInput({output:"enigmaticlegacy:cursed_stone"}, "minecraft:stone", "goety:shade_stone")
    //寰宇之心
    event.replaceInput({output:"enigmaticlegacy:cosmic_heart"}, "minecraft:heart_of_the_sea", "nameless_trinkets:true_heart_of_the_sea")
    //蒸汽引擎
    event.shaped(Item.of("create:steam_engine", 1),[
        ["", "", "create:hand_crank", "", ""],
        ["", "create:brass_ingot", "create:nozzle", "create:brass_ingot", ""],
        ["minecraft:copper_block", "create:sturdy_sheet", "create:sturdy_sheet", "create:sturdy_sheet", "minecraft:copper_block"],
        ["minecraft:copper_block", "infinite_abyss:red_deepstone", "divinerpg:purple_blaze", "infinite_abyss:red_deepstone", "minecraft:copper_block"],
        ["minecraft:copper_block", "create:chromatic_compound", "create:chromatic_compound", "create:chromatic_compound", "minecraft:copper_block"]
    ])
    //猎宝者护符
    event.replaceInput({output:"enigmaticlegacy:mining_charm"}, "minecraft:iron_nugget", "botania:elementium_nugget")
    event.replaceInput({output:"enigmaticlegacy:mining_charm"}, "minecraft:glowstone_dust", "ae2:sky_dust")
    //苦力怕的知能
    event.replaceInput({output:"nameless_trinkets:creeper_sense"}, "nameless_trinkets:dubious_dust", "nameless_trinkets:ultimate_dust")
    event.replaceInput({output:"nameless_trinkets:creeper_sense"}, "minecraft:gunpowder", "iter_rpg:gunpowder_barrel")
    //防爆服
    event.replaceInput({output:"nameless_trinkets:explosion_proof_jacket"}, "nameless_trinkets:dubious_dust", "nameless_trinkets:ultimate_dust")
    event.replaceInput({output:"nameless_trinkets:explosion_proof_jacket"}, "minecraft:leather_chestplate", "savage_and_ravage:griefer_chestplate")
    event.replaceInput({output:"nameless_trinkets:explosion_proof_jacket"}, "minecraft:iron_ingot", "divinerpg:bedrock_chunk")
    //吸血鬼的血
    event.replaceInput({output:"nameless_trinkets:vampire_blood"}, "minecraft:redstone_block", "iter_rpg:netherite_ring_awakened_sanguarnet")
    event.replaceInput({output:"nameless_trinkets:vampire_blood"}, "minecraft:blaze_powder", "l2hostility:miracle_powder")
    event.replaceInput({output:"nameless_trinkets:vampire_blood"}, "minecraft:clock", "goety:hook_bell")
    //地狱仞片护符
    event.shaped(Item.of("enigmaticaddons:hell_blade_charm", 1),[
        ["minecraft:gilded_blackstone", "l2hostility:flaming_thorn", "minecraft:gilded_blackstone"],
        ["enigmaticaddons:sanguinary_handbook", "divinerpg:inferno_sword", "enigmaticaddons:sanguinary_handbook"],
        ["create:rose_quartz_block", "spartanweaponry:blaze_head", "create:rose_quartz_block"]
    ])
    //破碎的王冠
    event.replaceInput({output:"nameless_trinkets:cracked_crown"}, "minecraft:gold_block", "l2hostility:hostility_orb")
    event.replaceInput({output:"nameless_trinkets:cracked_crown"}, "nameless_trinkets:ultimate_dust", "l2hostility:miracle_powder")
    event.replaceInput({output:"nameless_trinkets:cracked_crown"}, "minecraft:netherite_scrap", "l2hostility:charm_of_looting_3")
    //神之冠
    event.replaceInput({output:"nameless_trinkets:gods_crown"}, "minecraft:netherite_upgrade_smithing_template", "l2hostility:imagine_breaker")
    event.replaceInput({output:"nameless_trinkets:gods_crown"}, "minecraft:netherite_ingot", "l2hostility:miracle_ingot")
    //暗夜之心
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:soul_emerald"
        },
        "craftType": "animation",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
            "item": "minecraft:phantom_membrane"
            },
            {
            "item": "goety:ectoplasm"
            },
            {
            "item": "goety:ectoplasm"
            },
            {
            "tag": "forge:slimeballs"
            },
            {
            "tag": "forge:ender_pearls"
            },
            {
            "item": "minecraft:clock"
            },
            {
            "item": "minecraft:daylight_detector"
            },
            {
            "tag": "minecraft:beds"
            }
        ],
        "result": {
            "item": "goety:heart_of_the_night"
        }
    })
    //梦之木棍
    event.shaped(Item.of("aether:skyroot_stick", 1),[
        ["aether:skyroot_planks", "aether:skyroot_planks", "aether:skyroot_planks"],
        ["aether:skyroot_planks", "botania:dreamwood_twig", "aether:skyroot_planks"],
        ["aether:skyroot_planks", "aether:skyroot_planks", "aether:skyroot_planks"]
    ])
    //原初碎片
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated", 
        "ingredients": [
            {
                "item": "iter_rpg:earth_ingot"
            },
            {
                "item": "iter_rpg:air_ingot"
            },
            {
                "item": "iter_rpg:water_ingot"
            },
            {
                "item": "iter_rpg:fire_ingot"
            },
            {
                "item": "iter_rpg:void_ingot"
            },
            {
                "item": "divinerpg:divine_shards"
            },
            {
                "item": "divinerpg:ender_shards"
            },
            {
                "item": "divinerpg:corrupted_shards"
            },
            {
                "item": "divinerpg:molten_shards"
            },
            {
                "item": "divinerpg:ice_shards"
            },
            {
                "item": "divinerpg:terran_shards"
            },
            {
                "item": "divinerpg:jungle_shards"
            }
        ],
        "results": [
            {
            "item": "iter_rpg:primordial_fragment"
            }
        ]
    })
    //原初锭
    event.shaped(Item.of("iter_rpg:primordial_ingot", 4),[
        ["", "extrabotany:the_chaos", ""],
        ["minecraft:netherite_ingot", "iter_rpg:primordial_fragment", "minecraft:netherite_ingot"],
        ["", "minecraft:netherite_ingot", ""]
    ])
    //恶意精华
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated", 
        "ingredients": [
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            },
            {
            "item": "l2hostility:bottle_of_curse"
            }
        ],
        "results": [
            {
            "item":"l2hostility:hostility_essence"
            }
        ]
    })
    //龙炎钢
    event.custom({
        "type": "iceandfire:dragonforge",
        "dragon_type": "fire",
        "cook_time": 3000,
        "input": {
            "item": "l2hostility:miracle_ingot"
        },
        "blood": {
            "item": "iceandfire:fire_dragon_blood"
        },
        "result": {
            "item": "iceandfire:dragonsteel_fire_ingot"
        }
    })
    //龙霆
    event.custom({
        "type": "iceandfire:dragonforge",
        "dragon_type": "lightning",
        "cook_time": 3000,
        "input": {
            "item": "l2hostility:miracle_ingot"
        },
        "blood": {
            "item": "iceandfire:lightning_dragon_blood"
        },
        "result": {
            "item": "iceandfire:dragonsteel_lightning_ingot"
        }
    })
    //龙霜
    event.custom({
        "type": "iceandfire:dragonforge",
        "dragon_type": "ice",
        "cook_time": 3000,
        "input": {
            "item": "l2hostility:miracle_ingot"
        },
        "blood": {
            "item": "iceandfire:ice_dragon_blood"
        },
        "result": {
            "item": "iceandfire:dragonsteel_ice_ingot"
        }
    })
    //锻造模板
    event.replaceInput({output:"cataclysm:ignitium_upgrade_smithing_template"}, "minecraft:blaze_powder", "twilightforest:fiery_ingot")
    //灵魂尘
    event.shaped(Item.of("enigmaticlegacy:soul_dust", 1),[
        ["iter_rpg:ether_dust", "", "iter_rpg:ether_dust"],
        ["", "iter_rpg:stardust_ice", ""],
        ["", "", ""]
    ])
    //灵魂水晶
    event.shaped(Item.of("enigmaticlegacy:soul_crystal", 1),[
        ["", "enigmaticlegacy:soul_dust", ""],
        ["enigmaticlegacy:evil_ingot", "aquamirae:abyssal_amethyst", "l2hostility:miracle_ingot"],
        ["", "", ""]
    ])
    //耀魂碎片
    event.shaped(Item.of("slashblade:proudsoul", 1),[
        ["minecraft:diamond"],
        ["ars_nouveau:source_gem"],
        ["divinerpg:aquatic_pellets"]
    ])
    //埃恩坦锭
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated", 
        "ingredients": [
            {
            "item": "ad_astra:calorite_ingot"
            },
            {
            "item": "divinerpg:arcanium"
            },
            {
            "item": "divinerpg:arcanium"
            },
            {
            "item": "enigmaticlegacy:etherium_ingot"
            },
            {
            "item": "l2complements:eternium_ingot"
            },
            {
            "item": "undergarden:forgotten_ingot"
            },
            {
            "item": "ad_astra:desh_ingot"
            },
            {
            "item":"extrabotany:aerialite_ingot"
            },
            {
            "item":"extrabotany:orichalcos_ingot"
            }
        ],
        "results": [
            {
            "item": "ad_astra:etrium_ingot"
            },
            {
            "item": "ad_astra:etrium_ingot"
            }
        ]
    })
    //傲慢诅咒
    event.replaceInput({output:"l2hostility:curse_of_pride"}, "l2hostility:adaptive", "l2hostility:master")
    //贪婪诅咒
    event.replaceInput({output:"l2hostility:curse_of_greed"}, "l2hostility:tank", "l2hostility:cursed")
    //秘界传送门
    event.shaped(Item.of("divinerpg:arcana_portal_frame", 4),[
        ["iceandfire:sapphire_gem", "divinerpg:soulfire_stone", "infinite_abyss:perfect_charium", "divinerpg:soulfire_stone", "iceandfire:sapphire_gem"],
        ["divinerpg:soulfire_stone", "minecraft:diamond_block", "l2complements:eternium_ingot", "minecraft:diamond_block", "divinerpg:soulfire_stone"],
        ["infinite_abyss:astarium_crystal", "divinerpg:mortum_block", "infinite_abyss:violet_diamond_block", "create:experience_block", "infinite_abyss:astarium_crystal"],
        ["divinerpg:soulfire_stone", "l2complements:totemic_gold_block", "l2complements:sculkium_block", "minecraft:netherite_block", "divinerpg:soulfire_stone"],
        ["iceandfire:sapphire_gem", "divinerpg:soulfire_stone", "infinite_abyss:perfect_charium", "divinerpg:soulfire_stone", "iceandfire:sapphire_gem"]
    ])
    //枪械工作台
    event.replaceInput({output:"tacz:gun_smith_table"}, "minecraft:iron_ingot", "ad_astra:etrium_ingot")
    event.replaceInput({output:"tacz:gun_smith_table"}, "minecraft:iron_block", "l2hostility:chaos_block")
    //黑莲花
    event.shaped(Item.of("botania:black_lotus", 1),[
        ["ars_nouveau:glyph_infuse", "botania:black_petal", "ars_nouveau:glyph_pull"],
        ["botania:black_petal", "ars_nouveau:magebloom", "botania:black_petal"],
        ["ars_nouveau:source_gem", "botania:black_petal", "ars_nouveau:source_gem"]
    ])
    //暗黑莲花
    event.shaped(Item.of("botania:blacker_lotus", 1),[
        ["nameless_trinkets:dark_nelumbo", "ars_nouveau:source_gem", "nameless_trinkets:dark_nelumbo"],
        ["infinite_abyss:astarium_crystal", "botania:black_lotus", "infinite_abyss:astarium_crystal"],
        ["botania:dreadthorn", "infinite_abyss:astarium_crystal", "botania:dreadthorn"]
    ])
    //锻造模板
    event.smithing("undergarden:forgotten_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template", "undergarden:depthrock", "iter_rpg:flawless_diamond")
    //灵锭
    event.shaped(Item.of("iceandfire:ghost_ingot", 1),[
        ["goety:ectoplasm", "iceandfire:graveyard_soil", "goety:soul_bolt_focus"],
        ["iceandfire:graveyard_soil", "divinerpg:rupee_ingot", "iceandfire:graveyard_soil"],
        ["goety:soul_bolt_focus", "iceandfire:graveyard_soil", "goety:ectoplasm"]
    ])
    //观察者之呼唤
    event.replaceInput({output:"divinerpg:call_of_the_watcher"}, "divinerpg:watching_eye", "minecraft:ender_eye")
    //神圣细枝
    event.shaped(Item.of("iter_rpg:sacred_twig", 2),[
        ["iter_rpg:sacred_leaves"]
    ])
    //防爆板
    event.shaped(Item.of("savage_and_ravage:blast_proof_plating", 1),[
        ["", "minecraft:gold_ingot", ""],
        ["", "savage_and_ravage:creeper_spores", ""],
        ["minecraft:gold_ingot", "", "minecraft:gold_ingot"]
    ])
    //战斧
    event.smithing("undergarden:cloggrum_battleaxe", "undergarden:utherium_block", "undergarden:cloggrum_axe", "undergarden:regalium_block")
    //特有煤炭
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
            "item": "minecraft:charcoal"
            }
        ],
        "results": [
            {
            "item": "biomeswevegone:peat"
            }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
            "item": "biomeswevegone:peat"
            }
        ],
        "results": [
            {
            "item": "minecraft:coal"
            }
        ]
    })
    //魔源宝石快
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:amethyst_block"
        },
        "output": "ars_nouveau:source_gem_block",
        "pedestalItems": [
            {
            "item": {
                "item": "minecraft:lapis_block"
            }
            },
            {
            "item": {
                "item": "minecraft:lapis_block"
            }
            },
            {
            "item": {
                "item": "minecraft:lapis_block"
            }
            }
        ],
        "source": 3000
    })
    /*
    //梦之原木
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "botanicadds:elvenwood_log"
        },
        "mana": 2000,
        "output": {
            "item": "botania:dreamwood_log"
        }
    })
        */
    //不死之魂
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
            "item": "botania:life_essence"
            }
        ],
        "results": [
            {
            "item": "endrem:undead_soul"
            }
        ]
    })
    //空洞假面
    event.replaceInput({output:"iter_rpg:hollow_visage"}, "iter_rpg:bottle_of_obsidian_tears", "create:sturdy_sheet")
    //漆黑之眼
    event.shaped(Item.of("endrem:black_eye", 1),[
        ["iter_rpg:bottle_of_obsidian_tears", "", "iter_rpg:bottle_of_obsidian_tears"],
        ["", "nameless_trinkets:true_heart_of_the_sea", ""],
        ["", "iter_rpg:bottle_of_obsidian_tears", ""]
    ])
    //诅咒之眼
    event.shaped(Item.of("endrem:cursed_eye", 1),[
        ["minecraft:basalt", "minecraft:gilded_blackstone", "minecraft:basalt"],
        ["minecraft:gilded_blackstone", "cataclysm:monstrous_eye", "minecraft:gilded_blackstone"],
        ["minecraft:crying_obsidian", "minecraft:wither_rose", "minecraft:crying_obsidian"]
    ])
    //迷离之眼
    event.shaped(Item.of("endrem:lost_eye", 1),[
        ["botania:cosmetic_kamui_eye", "nameless_trinkets:blaze_nucleus", "botania:cosmetic_kamui_eye"],
        ["minecraft:map", "enigmaticaddons:forger_gem", "minecraft:map"],
        ["botania:cosmetic_kamui_eye", "minecraft:map", "botania:cosmetic_kamui_eye"]
    ])
    //傲慢诅咒
    event.replaceInput({output:"l2hostility:curse_of_pride"}, "l2hostility:dementor", "l2hostility:dispell")
    event.replaceInput({output:"l2hostility:curse_of_pride"}, "l2hostility:master", "l2hostility:undying")
    //扭曲之魂
    event.replaceInput({output:"l2hostility:abrahadabra"}, "l2hostility:repelling", "l2hostility:regenerate")
    //屹立不倒之戒
    event.replaceInput({output:"l2hostility:ring_of_life"}, "l2hostility:repelling", "l2hostility:regenerate")
    //恶魔熔炉
    event.shaped(Item.of("divinerpg:demon_furnace", 1),[
        ["", "divinerpg:twilight_demon_crystal", ""],
        ["goety:fireball_focus", "aether:altar", "botania:rune_fire"],
        ["", "botania:fel_pumpkin", ""]
    ])
    //永恒块
    event.replaceOutput({output:"l2complements:eternium_nugget", input:"l2complements:explosion_shard"}, "l2complements:eternium_nugget", "l2complements:eternium_block")
    //以太矿石
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated", 
        "ingredients": [
            {
            "item": "minecraft:end_stone"
            },
            {
            "item": "minecraft:end_stone"
            },
            {
            "item": "bedrock_edition_features:heat_block"
            },
            {
            "item": "iter_rpg:flawless_diamond"
            },
            {
            "item":"iter_rpg:etherbrew"
            }
        ],
        "results": [
            {
            "item": "enigmaticlegacy:etherium_ore"
            }
        ]
    })
    //创世者飞锤
    event.smithing("aether:hammer_of_kingbdogz", "aether:ambrosium_shard", "goety:bonehead_hammer", "aether:zanite_ring")
    //天使之祝
    event.shaped(Item.of("enigmaticlegacy:angel_blessing", 1),[
        ["", "goety:flying_focus", ""],
        ["minecraft:feather", "botania:flight_tiara", "minecraft:feather"],
        ["", "minecraft:elytra", ""]
    ])
    //逐日之翼
    event.shaped(Item.of("l2complements:sun_membrane", 1),[
        ["", "goety:fire_blast_focus", ""],
        ["", "minecraft:phantom_membrane", ""],
        ["", "l2complements:soul_flame", ""]
    ])
    //书龙护符
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
            "item": "ars_nouveau:bookwyrm_charm"
        },
        "pedestalItems": [
            {
            "item": "minecraft:iron_ingot",
            },
            {
            "item": "minecraft:iron_ingot",
            },
            {
            "item": "minecraft:iron_ingot",
            },
            {
            "item": "minecraft:iron_ingot",
            },
            {
            "item": "ars_nouveau:source_gem",
            },
            {
            "item": "ars_nouveau:source_gem",
            },
            {
            "item": "ars_nouveau:source_gem",
            },
            {
            "item": "ars_nouveau:source_gem",
            }
        ],
        "reagent": [
            {
            "item": "minecraft:writable_book"
            }
        ],
        "sourceCost": 300
    })
    //灵液滴
    event.shaped(Item.of("enigmaticaddons:ichor_droplet", 1),[
        ["", "l2complements:enchanted_totemic_apple", ""],
        ["botania:quartz_elven", "minecraft:ghast_tear", "botania:quartz_elven"],
        ["", "botania:quartz_elven", ""]
    ])
    //灵液瓶
    event.shaped(Item.of("enigmaticlegacy:ichor_bottle", 1),[
        ["enigmaticaddons:ichor_droplet"],
        ["iter_rpg:warped_goo"]
    ])
    //魔力之眼
    event.shaped(Item.of("endrem:magical_eye", 1),[
        ["minecraft:totem_of_undying", "", "minecraft:totem_of_undying"],
        ["", "minecraft:ender_eye", ""],
        ["ars_nouveau:ring_of_greater_discount", "", "botania:rune_mana"]
    ])
    //邪恶之眼
    event.shaped(Item.of("endrem:evil_eye", 1),[
        ["", "goety:soul_emerald", ""],
        ["iter_rpg:gold_ring", "cataclysm:monstrous_eye", "divinerpg:pure_aquatic_pellets"],
        ["", "goety:soul_emerald", ""]
    ])
    //末影之手
    event.shaped(Item.of("mutantmonsters:endersoul_hand", 1),[
        ["minecraft:end_rod", "minecraft:end_rod", "minecraft:end_rod"],
        ["minecraft:end_rod", "botania:ender_hand", "minecraft:end_rod"],
        ["", "", ""]
    ])
    //加热块
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated", 
        "ingredients": [
            {
            "item": "bedrock_edition_features:water"
            },
            {
            "item": "bedrock_edition_features:element_26"
            },
            {
            "item": "bedrock_edition_features:salt"
            },
            {
            "item": "minecraft:charcoal"
            },
        ],
        "results": [
            {
            "item": "bedrock_edition_features:heat_block"
            }
        ]
    })
    //下界合金锭
    event.shaped(Item.of("minecraft:netherite_ingot", 9),[
        ["minecraft:netherite_block"]
    ])
    //诡异霉烂肉
    event.replaceInput({output:"nethersdelight:warped_moldy_meat"}, "minecraft:warped_roots", "minecraft:twisting_vines")
    //暗影精髓
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
            "item": "goety:shadow_essence"
        },
        "pedestalItems": [
            {
            "item": "minecraft:ender_pearl"
            },
            {
            "item": "minecraft:ender_pearl"
            },
            {
            "item": "goety:ectoplasm"
            },
            {
            "item": "goety:ectoplasm"
            },
            {
            "item": "goety:ectoplasm"
            },
            {
            "item": "goety:ectoplasm"
            },
            {
            "item": "divinerpg:shadow_bar"
            },
        ],
        "reagent": [
            {
            "item": "iceandfire:witherbone"
            }
        ],
        "sourceCost": 2500
    })
    //各种元素锭
    event.replaceInput({output:"iter_rpg:earth_ingot"}, "iter_rpg:earth_fragment", "botania:manasteel_nugget")
    event.replaceInput({output:"iter_rpg:water_ingot"}, "iter_rpg:water_fragment", "botania:manasteel_nugget")
    event.replaceInput({output:"iter_rpg:air_ingot"}, "iter_rpg:air_fragment", "botania:manasteel_nugget")
    event.replaceInput({output:"iter_rpg:fire_ingot"}, "iter_rpg:fire_fragment", "botania:manasteel_nugget")
    //野蛮之牙
    event.replaceInput({output:"goety:savage_tooth"}, "minecraft:bone_block", "minecraft:bone")
    //破碎虚空石
    event.replaceInput({output:"nameless_trinkets:fractured_nullstone"}, "nameless_trinkets:glowing_dust", "iter_rpg:ether_dust")
    //深渊石英
    event.shaped(Item.of("iter_rpg:abyss_quartz", 1),[
        ["infinite_abyss:deepstone", "infinite_abyss:deepstone", "infinite_abyss:deepstone"],
        ["infinite_abyss:deepstone", "minecraft:quartz", "infinite_abyss:deepstone"],
        ["infinite_abyss:deepstone", "infinite_abyss:deepstone", "infinite_abyss:deepstone"]
    ])
    event.shaped(Item.of("iter_rpg:abyssquartz_shard", 4),[
        ["iter_rpg:abyss_quartz"]
    ])
    //大地之心
    event.shaped(Item.of("enigmaticlegacy:earth_heart", 1),[
        ["enigmaticaddons:earth_heart_fragment", "enigmaticaddons:earth_heart_fragment"],
        ["enigmaticaddons:earth_heart_fragment", "enigmaticaddons:earth_heart_fragment"]
    ])
    //神圣石
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
            "item": "divinerpg:divine_shards"
            }
        ],
        "results": [
            {
            "item": "divinerpg:divine_stone"
            }
        ]
    })
    //可疑的粉尘
    event.replaceInput({output:"nameless_trinkets:dubious_dust"}, "minecraft:iron_pickaxe", "minecraft:glowstone_dust")
    event.replaceInput({output:"nameless_trinkets:dubious_dust"}, "minecraft:redstone_block", "minecraft:redstone")
    //巨人之锤
    event.shaped(Item.of("mutantmonsters:hulk_hammer", 1),[
        ["botania:manasteel_ingot", "botania:manasteel_ingot", "botania:manasteel_ingot"],
        ["botania:manasteel_ingot", "goety:great_hammer", "botania:manasteel_ingot"],
        ["botania:manasteel_ingot", "botania:manasteel_ingot", "botania:manasteel_ingot"]
    ])
    //粗糙抢夺宝珠
    event.shaped(Item.of("l2hostility:charm_of_looting_1", 1),[
        ["", "create:brass_ingot", "minecraft:copper_ingot", "minecraft:copper_ingot", ""],
        ["create:brass_ingot", "create:brass_ingot", "goety:magic_emerald", "minecraft:copper_ingot", "minecraft:copper_ingot"],
        ["create:brass_ingot", "iter_rpg:netherite_ring", "slashblade:proudsoul_sphere", "goety:soul_emerald", "minecraft:copper_ingot"],
        ["create:brass_ingot", "create:brass_ingot", "goety:magic_emerald", "minecraft:copper_ingot", "minecraft:copper_ingot"],
        ["", "create:brass_ingot", "create:brass_ingot", "minecraft:copper_ingot", ""]
    ])
    //魔能抢夺宝珠
    event.shaped(Item.of("l2hostility:charm_of_looting_2", 1),[
        ["", "", "infinite_abyss:violet_diamond", "", ""],
        ["", "minecraft:diamond", "yuushya:shimmering_pearl", "minecraft:diamond", ""],
        ["apotheosis:infused_breath", "yuushya:shimmering_pearl", "l2hostility:hostility_orb", "yuushya:shimmering_pearl", "apotheosis:infused_breath"],
        ["", "ars_nouveau:fire_essence", "yuushya:shimmering_pearl", "ars_nouveau:fire_essence", ""],
        ["", "", "divinerpg:purple_blaze", "", ""]
    ])
    //混沌抢夺宝珠
    event.shaped(Item.of("l2hostility:charm_of_looting_3", 1),[
        ["", "botania:purple_petal_block", "l2hostility:witch_droplet", "botania:purple_petal_block", ""],
        ["minecraft:amethyst_block", "l2complements:life_essence", "l2hostility:chaos_ingot", "l2complements:life_essence", "minecraft:amethyst_block"],
        ["l2hostility:witch_droplet", "l2hostility:chaos_ingot", "l2complements:enchanted_totemic_apple", "l2hostility:chaos_ingot", "l2hostility:witch_droplet"],
        ["minecraft:amethyst_block", "l2complements:life_essence", "l2hostility:chaos_ingot", "l2complements:life_essence", "minecraft:amethyst_block"],
        ["", "botania:purple_petal_block", "l2hostility:witch_droplet", "botania:purple_petal_block", ""]
    ])
    //奇迹抢夺宝珠
    event.shaped(Item.of("l2hostility:charm_of_looting_4", 1),[
        ["l2hostility:miracle_ingot", "l2complements:force_field", "l2hostility:miracle_ingot"],
        ["l2complements:blackstone_core", "enigmaticlegacy:cosmic_heart", "l2complements:blackstone_core"],
        ["l2hostility:miracle_ingot", "l2complements:force_field", "l2hostility:miracle_ingot"]
    ])
    //无暇翡翠
    event.shaped(Item.of("iter_rpg:flawless_emerald", 1),[
        ["", "iter_rpg:flawless_diamond", ""],
        ["", "goety:jade", ""],
        ["iter_rpg:flawless_diamond", "", "iter_rpg:flawless_diamond"]
    ])
    //霜栋巨兽刷怪蛋
    event.shaped(Item.of("mowziesmobs:frostmaw_spawn_egg", 1),[
        ["goety:frost_nova_focus"],
        ["ars_nouveau:summon_focus"],
        ["l2complements:hard_ice"]
    ])
    //镶孔符石
    event.replaceInput({output:"apotheosis:sigil_of_socketing"}, "minecraft:amethyst_shard", "iter_rpg:etherbrew")
    //弹药装配台
    event.replaceInput({output:"tacz:workbench_a"}, "iron_ingot", "eeeabsmobs:guardian_core")
    //禁书片段
    event.shaped(Item.of("goety:forbidden_scroll", 1), [
        ["goety:forbidden_fragment", "goety:forbidden_fragment", "goety:forbidden_fragment"],
        ["goety:forbidden_fragment", "mythicbotany:kvasir_blood", "goety:forbidden_fragment"],
        ["goety:forbidden_fragment", "goety:forbidden_fragment", "goety:forbidden_fragment"]
    ])
    //各种面具合成出的奖励
    event.shaped(Item.of("l2complements:sculkium_block", 1),[
        ["mowziesmobs:sol_visage"]
    ])
    event.shaped(Item.of("minecraft:diamond", 1),[
        ["mowziesmobs:umvuthana_mask_rage"]
    ])
    event.shaped(Item.of("botania:terrasteel_nugget", 1),[
        ["mowziesmobs:umvuthana_mask_fury"]
    ])
    event.shaped(Item.of("corail_recycler:netherite_nugget", 1),[
        ["mowziesmobs:umvuthana_mask_misery"]
    ])
    event.shaped(Item.of("l2complements:totemic_gold_ingot", 1),[
        ["mowziesmobs:umvuthana_mask_faith"]
    ])
    event.shaped(Item.of("minecraft:copper_block", 1),[
        ["mowziesmobs:umvuthana_mask_bliss"]
    ])
    event.shaped(Item.of("create:brass_ingot", 1),[
        ["mowziesmobs:umvuthana_mask_fear"]
    ])
    //大师魔力之戒
    event.shaped(Item.of("extrabotany:mana_ring_master", 1),[
        ["extrabotany:orichalcos_ingot", "extrabotany:hero_medal", "extrabotany:orichalcos_ingot"],
        ["extrabotany:the_origin", "mythicbotany:mana_ring_greatest", "extrabotany:the_chaos"],
        ["extrabotany:orichalcos_ingot", "extrabotany:the_end", "extrabotany:orichalcos_ingot"]
    ])
    //滕炎块
    event.shaped(Item.of("cataclysm:ignitium_block", 1),[
        ["extrabotany:elementium_quartz", "cataclysm:ignitium_ingot", "extrabotany:elementium_quartz"],
        ["cataclysm:ignitium_ingot", "mythicbotany:fimbultyr_tablet", "cataclysm:ignitium_ingot"],
        ["extrabotany:elementium_quartz", "cataclysm:ignitium_ingot", "extrabotany:elementium_quartz"]
    ])
    //鱼刷怪蛋
    event.shaped(Item.of("aquamirae:anglerfish_spawn_egg", 1),[
        ["aquamirae:spinefish", "", "aquamirae:fin"],
        ["", "botania:hyacidus", ""],
        ["aquamirae:fin", "", "aquamirae:sharp_bones"]
    ])
    event.shaped(Item.of("aquamirae:maze_mother_spawn_egg", 1),[
        ["infinite_abyss:astarium_crystal", "minecraft:amethyst_shard", ""],
        ["minecraft:amethyst_shard", "aquamirae:anglerfish_spawn_egg", "ars_nouveau:source_gem"],
        ["", "ars_nouveau:source_gem", "minecraft:popped_chorus_fruit"]
    ])
    //注魔板
    event.replaceInput({output:"mythicbotany:mana_infuser"}, "botania:glimmering_dreamwood", "infinite_abyss:magical_conduit")
    //泥峭棒
    event.shaped(Item.of("mowziesmobs:bluff_rod", 1),[
        ["", "minecraft:mud", "minecraft:mud"],
        ["minecraft:mud", "minecraft:stick", "minecraft:mud"],
        ["minecraft:mud", "minecraft:mud", ""]
    ])
})