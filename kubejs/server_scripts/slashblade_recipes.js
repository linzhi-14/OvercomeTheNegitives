ServerEvents.recipes(event => {

    //木偶
    event.replaceInput({output:"slashblade:slashblade_wood"}, "minecraft:wooden_sword", "spartanweaponry:wooden_katana")
    //竹
    event.shaped(Item.of("slashblade:slashblade_bamboo", 1),[
        ["", "minecraft:lapis_lazuli", "minecraft:bamboo"],
        ["", "slashblade:slashblade_wood", ""],
        ["spartanweaponry:handle", "minecraft:emerald", ""]
    ])
    //银纸竹光
    event.shaped(Item.of("slashblade:slashblade_silverbamboo", 1),[
        ["", "botania:manasteel_ingot", "iceandfire:silver_ingot"],
        ["botania:mana_string", "slashblade:slashblade_bamboo", "botania:manasteel_ingot"],
        ["spartanweaponry:handle", "botania:mana_string", ""]
    ])
    //白鞘
    event.shaped(Item.of("slashblade:slashblade_white", 1),[
        ["", "slashblade:proudsoul_ingot", "minecraft:gold_block"],
        ["botania:rune_winter", "slashblade:slashblade_silverbamboo", "slashblade:proudsoul_ingot"],
        ["spartanweaponry:handle", "botania:rune_winter", ""]
    ])
    //无名
    event.shaped(Item.of("slashblade:slashblade", 1),[
        ["infinite_abyss:cut_red_crystal", "divinerpg:arlemite_ingot", "infinite_abyss:fire_crystal"],
        ["divinerpg:arlemite_ingot", "slashblade:slashblade_white", "minecraft:gold_ingot"],
        ["minecraft:magma_cream", "minecraft:gold_ingot", ""]
    ])
    //伪物 鄂门
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:agito",
        "category": "equipment",
        "key": {
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 10,
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "A": {
                "item": "slashblade:proudsoul_ingot"
            },
            "C":{
                "item":"infinite_abyss:deepsilver_plate"
            },
            "D":{
                "item":"trials:ominous_bottle"
            },
            "E":{
                "item":"infinite_abyss:cursed_opal"
            }
        },
        "pattern": [
            "ACD",
            "EBC",
            "AEA"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //刚剑
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:doutanuki",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 35,
                    "name": "slashblade:agito",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "divinerpg:soulfire_stone"
            },
            "C": {
                "item": "divinerpg:fury_fire"
            },
            "D": {
                "item": "cataclysm:monstrous_horn"
            },
            "E": {
                "item": "iter_rpg:awakened_sanguarnet"
            },
            "F": {
                "item": "slashblade:proudsoul_sphere"
            }
        },
        "pattern": [
            "BED",
            "FCF",
            "AEB"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //黑狐
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:fox_black",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 50,
                    "name": "slashblade:doutanuki",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "S": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 25,
                    "name": "slashblade:agito_rust",
                }
            },
            "B": {
                "item": "twilightforest:ironwood_ingot"
            },
            "C": {
                "item": "l2complements:poseidite_ingot"
            },
            "D": {
                "item": "minecraft:crying_obsidian"
            },
            "E": {
                "item": "botania:blacker_lotus"
            },
            "F": {
                "item": "ars_nouveau:fire_essence"
            },
            "G": {
                "item": "botania:rune_pride"
            }
        },
        "pattern": [
            "CGB",
            "FES",
            "BAD",
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //白狐
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:fox_white",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 75,
                    "name": "slashblade:fox_black",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "slashblade:proudsoul_sphere"
            },
            "C": {
                "item": "iceandfire:hydra_heart"
            },
            "D": {
                "item": "botania:flare_chakram"
            },
            "E": {
                "item": "ars_nouveau:mendosteen_pod"
            }
            ,
            "F": {
                "item": "infinite_abyss:cursed_opal_block"
            }
        },
        "pattern": [
            "BCE",
            "DAD",
            "EFB"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //鄂门
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:orotiagito_sealed",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 100,
                    "name": "slashblade:fox_white",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "goety:soul_ruby"
            },
            "C": {
                "item": "undergarden:forgotten_block"
            },
            "D": {
                "item": "infinite_abyss:enchanted_puffball_heart"
            }
        },
        "pattern": [
            "  B",
            "DAD",
            "C  "
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //大蛇鄂门
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:orotiagito",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 125,
                    "name": "slashblade:orotiagito_sealed",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 100,
                    "name": "slashblade:sange"
                }
            },
            "C": {
                "item": "create:experience_block"
            },
            "D": {
                "item": "mythicbotany:faded_nether_star"
            },
            "E": {
                "item": "slashblade:proudsoul_crystal"
            },
            "F": {
                "item": "infinite_abyss:dead_crystal_heart"
            }
        },
        "pattern": [
            "DCF",
            "EAE",
            " B "
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //击柝
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:rodai_wooden",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 175,
                    "name": "slashblade:orotiagito",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "divinerpg:eden_heart"
            },
            "C": {
                "item": "botania:terrasteel_block"
            },
            "D": {
                "item": "infinite_abyss:deep_prismarine"
            },
            "E": {
                "item": "minecraft:netherite_ingot"
            }
        },
        "pattern": [
            "B C",
            "DA ",
            "EDB"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //山吹
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:rodai_golden",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 200,
                    "name": "slashblade:rodai_wooden",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "slashblade:proudsoul_sphere"
            },
            "C": {
                "item": "l2complements:enchanted_totemic_carrot"
            },
            "D": {
                "item": "goety:dark_metal_block"
            },
            "E": {
                "item": "enigmaticlegacy:blazing_core"
            },
            "F": {
                "item": "nethersdelight:golden_machete"
            }
        },
        "pattern": [
            "F C",
            " AB",
            "EBD"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //锐岩
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:rodai_stone",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 250,
                    "name": "slashblade:rodai_golden",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "botania:marimorphosis"
            },
            "C": {
                "item": "l2complements:explosion_shard"
            },
            "D": {
                "item": "botania:dragonstone_block"
            },
            "E": {
                "item": "spartanweaponry:stone_katana"
            }
        },
        "pattern": [
            "ECC",
            "CAD",
            "CDB"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //利刀·铁
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:rodai_iron",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 300,
                    "name": "slashblade:rodai_stone",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "spartanweaponry:iron_katana"
            },
            "C": {
                "item": "slashblade:proudsoul_crystal"
            },
            "D": {
                "item": "twilightforest:fiery_block"
            },
            "E": {
                "item": "iter_rpg:iron_ring_magmanum"
            },
            "F": {
                "item": "l2complements:cursed_droplet"
            }
        },
        "pattern": [
            "BFE",
            "CAF",
            " FD"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //金刚
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:rodai_diamond",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 400,
                    "name": "slashblade:rodai_iron",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "spartanweaponry:diamond_katana"
            },
            "C": {
                "item": "slashblade:proudsoul_trapezohedron"
            },
            "D": {
                "item": "infinite_abyss:violet_diamond"
            },
            "E": {
                "item": "botania:mana_diamond_block"
            },
            "F": {
                "item": "l2complements:captured_wind"
            }
        },
        "pattern": [
            "FEC",
            "DAE",
            "BDF"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //玄钰
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:rodai_netherite",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 500,
                    "name": "slashblade:rodai_diamond",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "spartanweaponry:netherite_katana"
            },
            "C": {
                "item": "divinerpg:sandslash"
            },
            "D": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 50,
                    "name": "slashblade:orotiagito_rust",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "E": {
                "item": "minecraft:netherite_block"
            },
            "F": {
                "item": "infinite_abyss:astarium_crystal"
            },
            "G": {
                "item": "infinite_abyss:vicerite_crystal"
            },
            "H": {
                "item": "l2hostility:hostility_orb"
            }
        },
        "pattern": [
            "FHC",
            "EAG",
            "BDG"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //木刀
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:tagayasan",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 600,
                    "name": "slashblade:rodai_netherite",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "twilightforest:fiery_block"
            },
            "C": {
                "item": "twilightforest:ironwood_block"
            },
            "D": {
                "item": "yuushya:everlasting_wood"
            },
            "E": {
                "item": "iter_rpg:sacred_twig"
            },
            "F":{
                "item":"slashblade:proudsoul_sphere"
            }
        },
        "pattern": [
            "DCF",
            "BAB",
            "ECD"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //锈刀
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:sabigatana",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 700,
                    "name": "slashblade:tagayasan",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "item": "slashblade:proudsoul_ingot"
            },
            "C": {
                "item": "cataclysm:laser_gatling"
            },
            "D": {
                "item": "botania:super_lava_pendant"
            },
            "E": {
                "item": "infinite_abyss:perfect_red_crystal"
            },
            "F": {
                "item": "iceandfire:dragonscale_red"
            }
        },
        "pattern": [
            "EFB",
            "DBF",
            "ACE"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //红玉
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:ruby",
        "category": "equipment",
        "key": {
            "G": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 800,
                    "name": "slashblade:sabigatana",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "A": {
                "item": "iter_rpg:bottle_of_obsidian_tears"
            },
            "B": {
                "item": "apotheosis:infused_breath"
            },
            "C": {
                "item": "l2complements:explosion_shard"
            },
            "D": {
                "item": "iceandfire:dragonegg_sapphire"
            },
            "E": {
                "item": "goety:jade_block"
            },
            "F": {
                "item": "slashblade:proudsoul_trapezohedron"
            },
            "H": {
                "item": "infinite_abyss:perfect_red_crystal"
            },
            "I": {
                "item": "l2complements:soul_flame"
            }
        },
        "pattern": [
            "ABC",
            "DEF",
            "GHI"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //千鹤
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:muramasa",
        "category": "equipment",
        "key": {
            "A": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 900,
                    "name": "slashblade:ruby",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 500,
                    "name": "slashblade:koseki",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "C": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 100,
                    "name": "slashblade:yasha",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "D": {
                "item": "l2hostility:divinity_cross"
            },
            "E": {
                "item": "iter_rpg:primordial_ingot"
            },
            "F": {
                "item": "cataclysm:enderite_ingot"
            },
            "G": {
                "item": "l2hostility:miracle_ingot"
            }
        },
        "pattern": [
            "DAD",
            "EBG",
            "FCE"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    //付丧
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:yuzukitukumo",
        "category": "equipment",
        "key": {
            "E": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 1000,
                    "name": "slashblade:muramasa",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "A": {
                "item": "mythicbotany:alfsteel_sword"
            },
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 100,
                    "name": "slashblade:yasha_true",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "C": {
                "item": "aquamirae:whisper_of_the_abyss"
            },
            "D": {
                "item": "enigmaticlegacy:eldritch_pan"
            },
            "F": {
                "item": "l2hostility:abyssal_thorn"
            },
            "G": {
                "item": "enigmaticlegacy:evil_ingot"
            },
            "H": {
                "item": "l2hostility:witch_droplet"
            },
            "I": {
                "item": "aether:zanite_block"
            }
        },
        "pattern": [
            "ABC",
            "DEF",
            "GHI"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })

    //阎魔刀
    event.custom({
        "type": "slashblade:shaped_blade",
        "blade": "slashblade:yamato",
        "category": "equipment",
        "key": {
            "B": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 3000,
                    "name": "slashblade:yuzukitukumo",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "E": {
                "type": "slashblade:blade",
                "item": "slashblade:slashblade",
                "request": {
                    "kill": 300,
                    "name": "slashblade:yamato",
                    "sword_type": [
                        "broken"
                        ]
                }
            },
            "A": {
                "item": "ad_astra:etrium_ingot"
            },
            "C": {
                "item": "cataclysm:soul_render"
            },
            "D": {
                "item": "l2complements:heirophant_green"
            },
            "F": {
                "item": "iceandfire:dragonsteel_lightning_block"
            },
            "G": {
                "item": "mythicbotany:mjoellnir"
            },
            "H": {
                "item": "slashblade:proudsoul_trapezohedron"
            },
            "I": {
                "item": "l2hostility:imagine_breaker"
            }
        },
        "pattern": [
            "ABC",
            "DEF",
            "GHI"
        ],
        "result": {
            "item": "slashblade:slashblade"
        },
        "show_notification": true
    })
    
})