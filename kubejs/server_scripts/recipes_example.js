/*
ServerEvents.recipes(event => {
    //三种款式，芜湖湖
    event.shaped(Item.of("", 1),[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])
    event.shaped(Item.of("", 1),[
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""]
    ])
    event.shaped(Item.of("", 1),[
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ])
    event.replaceInput({output:""}, "", "")
})
//其他模组工作台
ServerEvents.recipes(e => {
	e.custom({
        //新生魔艺附魔装置
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
            "item": "物品"
        },
        "pedestalItems": [
            {
            "item": "周围"
            }
        ],
        "reagent": [
            {
            "item": "中心"
            }
        ],
        "sourceCost": 0

        //新生魔艺灌注室
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "tag": "forge:gems/source"
        },
        "output": "",
        "pedestalItems": [
            {
            "item": {
                "item": ""
            }
            },
            {
            "item": {
                "item": ""
            }
            },
            {
            "item": {
                "item": ""
            }
            }
        ],
        "source": 0

        //枪械工作台
        "materials": [
            {
                "item": {
                    "": ""
                },
                "count": 1
            },
            {
                "item": {
                    "":""
                },
                "count": 1
            }
        ],
        "result": {
            "type": "gun",
            "id": ""
        },
        "type": "tacz:gun_smith_table_crafting"

        //子弹工作台
        "materials": [
            {
                "item": {
                    "": ""
                },
                "count": 1
            },
            {
            "item": {
                "": ""
            },
            "count": 1
            }
        ],
        "result": {
            "type": "ammo",
            "id": "",
            "count": 50
        },
        "type": "tacz:gun_smith_table_crafting"

        //花药台
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
            "tag": "botania:seed_apothecary_reagent"
        }

        //魔力池灌注
        "type": "botania:mana_infusion",
        "input": {
            "item": "minecraft:cookie"
        },
        "mana": 20000,
        "output": {
            "item": "botania:mana_cookie"
        }
        
        //符文祭坛
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "tag": "botania:mana_dusts"
            },
            {
            "tag": "botania:manasteel_ingots"
            },
            {
            "item": "minecraft:bone_meal"
            },
            {
            "item": "minecraft:sugar_cane"
            },
            {
            "item": "minecraft:fishing_rod"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_water"
        }

        //泰拉凝聚板
        "type": "botania:terra_plate",
        "ingredients": [
            {
            "item": "botania:manasteel_ingot"
            },
            {
            "item": "botania:mana_pearl"
            },
            {
            "item": "botania:mana_diamond"
            }
        ],
        "mana": 500000,
        "result": {
            "item": "botania:terrasteel_ingot"
        }
        
        //精灵交易
        "type": "botania:elven_trade",
        "ingredients": [
            {
            "item": "botania:mana_pearl"
            }
        ],
        "output": [
            {
            "item": "botania:pixie_dust"
            }
        ]

        //抄写台
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
            {
            "item": {
                "item": "ars_nouveau:water_essence"
            }
            },
            {
            "item": {
                "item": "minecraft:snow_block"
            }
            },
            {
            "item": {
                "item": "minecraft:snow_block"
            }
            }
        ],
        "output": "ars_nouveau:glyph_freeze"
    })

    //机械动力混合搅拌 加热方式："heated" | "superheated"，不需要则可以删除"heatRequirement"
    "type": "create:mixing",
    "heatRequirement": "superheated", 
    "ingredients": [
        {
        "tag": "forge:cobblestone"
        }
    ],
    "results": [
        {
        "amount": 50,
        "fluid": "minecraft:lava"
        }
    ]
})

*/
/*
ServerEvents.recipes(e => {
    event.custom({

    })
})
*/
