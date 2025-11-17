//你小子，在看我是吧！被我发现了！不许乱改喵！

// 使用玩家tick事件，每个玩家独立触发

let players_list = []

function __Player(event_obj, name) {
    let player = {
        event_obj: event_obj,
        name: name,
        tick: 0,
        isHasName: function (name) {
            return this.name === name
        }
    }
    return player
}

PlayerEvents.loggedIn(event => {
    const name = event.player.name.getString()
    // 检测玩家是否已经在列表中
    for (let player of players_list) {
        if (player.isHasName(name)) {
            return
        }
    }
    const player = new __Player(event, name)
    players_list.push(player)
});

PlayerEvents.loggedOut(event => {
    const name = event.player.name.getString()
    for (let i = 0; i < players_list.length; i++) {
        if (players_list[i].isHasName(name)) {
            players_list.splice(i, 1)
            return
        }
    }
});

PlayerEvents.tick(event => {
    const player = event.player
    const name = player.name.getString()

    // 获取玩家列表中的索引
    let index = -1
    for (let i = 0; i < players_list.length; i++) {
        if (players_list[i].isHasName(name)) {
            index = i
            break
        }
    }

    if (index == -1) {
        // 玩家不在列表中强制添加
        let _player = new __Player(event, name)
        players_list.push(_player)
        index = players_list.length - 1
    }

    // 玩家信息更新
    players_list[index].tick += 1
    let tick = players_list[index].tick

    if (tick > 360){
        players_list[index].tick = 0
    }
    

    if (tick % 10 == 0){
        if (event.hasGameStage("s") != true){
            player.inventory.clear()
            player.give("ftbquests:book")
        }
        if (event.hasGameStage("start") != true){
            //任务书未完成前言限制玩家
            if (tick % 60 == 0){
                player.tell('你无法移动，请先完成任务书前言部分，并进入第一章【五个基础化】')
                event.server.runCommandSilent("title " + name + ' title "请完成任务书前言全部部分"')
            }
            if (player.hasEffect("minecraft:blindness") == false && player.hasEffect("minecraft:slowness") == false) {
                player.potionEffects.add("slowness", 1000, 255, false, false)
            }
        }
        if (event.hasGameStage("start") == true){
            //移除开局效果
            if (event.hasGameStage("starteffectclear") != true){
                if (player.hasEffect("minecraft:blindness") == true || player.hasEffect("minecraft:slowness") == true) {
                    event.addGameStage("starteffectclear")
                    player.potionEffects.clear()
                }
            }
            //===========buff加成方面========================
            //五个基础化的debuff状态效果
            //破甲 自上而下消除debuff
            {if (event.hasGameStage("e_sundering_a")){
                if (player.hasEffect("attributeslib:sundering") != true){
                    player.potionEffects.add("attributeslib:sundering", 900, 1, false, false)
                }
            }
            if (event.hasGameStage("e_sundering_b")){
                if (player.hasEffect("attributeslib:sundering") != true){
                    player.potionEffects.add("attributeslib:sundering", 900, 0, false, false)
                }
                if (event.hasGameStage("e_sundering_a") == true){
                        event.removeGameStage("e_sundering_a")
                }
            }
            if (event.hasGameStage("e_sundering_c")){
                if (player.hasEffect("attributeslib:sundering") != true){
                }
                if (event.hasGameStage("e_sundering_b") == true){
                        event.removeGameStage("e_sundering_b")
                }
            }
            if (event.hasGameStage("e_sundering_r")){
                if (event.hasGameStage("e_sundering_c") == true){
                        event.removeGameStage("e_sundering_c")
                    }
            }}
            //缓慢
            {if (event.hasGameStage("e_slowness_b")){
                if (player.hasEffect("minecraft:slowness") != true){
                    player.potionEffects.add("minecraft:slowness", 900, 1, false, false)
                }
            }
            if (event.hasGameStage("e_slowness_c")){
                if (player.hasEffect("minecraft:slowness") != true){
                    player.potionEffects.add("minecraft:slowness", 900, 0, false, false)
                }
                if (event.hasGameStage("e_slowness_b") == true){
                        event.removeGameStage("e_slowness_b")
                }
            }
            if (event.hasGameStage("e_slowness_r")){
                if (event.hasGameStage("e_slowness_c") == true){
                        event.removeGameStage("e_slowness_c")
                }
            }}
            //挖掘疲劳
            {if (event.hasGameStage("e_fatigue_b")){
                if (player.hasEffect("minecraft:mining_fatigue") != true){
                    player.potionEffects.add("minecraft:mining_fatigue", 900, 1, false, false)
                }
            }
            if (event.hasGameStage("e_fatigue_c")){
                if (player.hasEffect("minecraft:mining_fatigue") != true){
                    player.potionEffects.add("minecraft:mining_fatigue", 900, 0, false, false)
                }
                if (event.hasGameStage("e_fatigue_b") == true){
                        event.removeGameStage("e_fatigue_b")
                }
            }
            if (event.hasGameStage("e_fatigue_r")){
                if (event.hasGameStage("e_fatigue_c") == true){
                        event.removeGameStage("e_fatigue_c")
                }
            }}
            //虚弱
            {if (event.hasGameStage("e_weakness_a")){
                    player.setAttributeBaseValue("minecraft:generic.attack_damage", 0.3)
            }
            if (event.hasGameStage("e_weakness_b")){
                    player.setAttributeBaseValue("minecraft:generic.attack_damage", 0.5)
                if (event.hasGameStage("e_weakness_a") == true){
                        event.removeGameStage("e_weakness_a")
                }
            }
            if (event.hasGameStage("e_weakness_c")){
                    player.setAttributeBaseValue("minecraft:generic.attack_damage", 0.8)
                if (event.hasGameStage("e_weakness_b") == true){
                        event.removeGameStage("e_weakness_b")
                }
            }
            if (event.hasGameStage("e_weakness_r")){
                if (event.hasGameStage("e_weakness_c") == true){
                        event.removeGameStage("e_weakness_c")
                }
            }}
            //霉运
            {if (event.hasGameStage("e_unluck_a")){
                if (player.hasEffect("minecraft:unluck") != true){
                    player.potionEffects.add("minecraft:unluck", 900, 2, false, false)
                }
            }
            if (event.hasGameStage("e_unluck_b")){
                if (player.hasEffect("minecraft:unluck") != true){
                    player.potionEffects.add("minecraft:unluck", 900, 1, false, false)
                }
                if (event.hasGameStage("e_unluck_a") == true){
                        event.removeGameStage("e_unluck_a")
                }
            }
            if (event.hasGameStage("e_unluck_c")){
                if (player.hasEffect("minecraft:unluck") != true){
                    player.potionEffects.add("minecraft:unluck", 900, 0, false, false)
                }
                if (event.hasGameStage("e_unluck_b") == true){
                        event.removeGameStage("e_unluck_b")
                }
            }
            if (event.hasGameStage("e_unluck_r")){
                if (event.hasGameStage("e_unluck_c") == true){
                        event.removeGameStage("e_unluck_c")
                }
            }}
            //血量限制或加成
            {if (event.hasGameStage("e_health_d")){
                player.maxHealth = 10
            }
            if (event.hasGameStage("e_health_c")){
                player.maxHealth = 14
                if (event.hasGameStage("e_health_d")){
                    event.removeGameStage("e_health_d")
                }
            }
            if (event.hasGameStage("e_health_b")){
                player.maxHealth = 16
                if (event.hasGameStage("e_health_c")){
                    event.removeGameStage("e_health_c")
                }
            }
            if (event.hasGameStage("e_health_a")){
                player.maxHealth = 20
                if (event.hasGameStage("e_health_b")){
                    event.removeGameStage("e_health_b")
                }
            }
            if (event.hasGameStage("e_health_s")){
                player.maxHealth = 30
                if (event.hasGameStage("e_health_a")){
                    event.removeGameStage("e_health_a")
                }
            }
            if (event.hasGameStage("e_health_ss")){
                player.maxHealth = 40
                if (event.hasGameStage("e_health_s")){
                    event.removeGameStage("e_health_s")
                }
            }
            if (event.hasGameStage("e_health_sss")){
                player.maxHealth = 60
                if (event.hasGameStage("e_health_ss")){
                    event.removeGameStage("e_health_ss")
                }
            }}
            //村庄英雄加成
            {if (event.hasGameStage("e_village_hero_s")){
                if (player.hasEffect("minecraft:hero_of_the_village") != true){
                    player.potionEffects.add("minecraft:hero_of_the_village", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_village_hero_sss")){
                if (player.hasEffect("minecraft:hero_of_the_village") != true){
                    player.potionEffects.add("minecraft:hero_of_the_village", 900, 2, false, false)
                }
                if (event.hasGameStage("e_village_hero_s") == true){
                    event.removeGameStage("e_village_hero_s")
                }

            }}
            //力量加成
            {if (event.hasGameStage("e_strength_s")){
                if (player.hasEffect("minecraft:strength") != true){
                    player.potionEffects.add("minecraft:strength", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_strength_ss")){
                if (player.hasEffect("minecraft:strength") != true){
                    player.potionEffects.add("minecraft:strength", 900, 1, false, false)
                }
                if (event.hasGameStage("e_strength_s") == true){
                    event.removeGameStage("e_strength_s")
                }
            }
            if (event.hasGameStage("e_strength_sss")){
                if (player.hasEffect("minecraft:strength") != true){
                    player.potionEffects.add("minecraft:strength", 900, 2, false, false)
                }
                if (event.hasGameStage("e_strength_ss") == true){
                    event.removeGameStage("e_strength_ss")
                }
            }}
            //速度
            if (event.hasGameStage("e_speed_s")){
                if (player.hasEffect("minecraft:speed") != true){
                    player.potionEffects.add("minecraft:speed", 900, 0, false, false)
                }
            }
            //海豚的恩惠
            {if (event.hasGameStage("e_dolphin_s")){
                if (player.hasEffect("minecraft:dolphins_grace") != true){
                    player.potionEffects.add("minecraft:dolphins_grace", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_dolphin_ss")){
                if (player.hasEffect("minecraft:dolphins_grace") != true){
                    player.potionEffects.add("minecraft:dolphins_grace", 900, 1, false, false)
                }
                if (event.hasGameStage("e_dolphin_s") == true){
                    event.removeGameStage("e_dolphin_s")
                }
            }}
            //潮涌能量
            {if (event.hasGameStage("e_tide_s")){
                if (player.hasEffect("minecraft:conduit_power") != true){
                    player.potionEffects.add("minecraft:conduit_power", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_tide_ss")){
                if (player.hasEffect("minecraft:conduit_power") != true){
                    player.potionEffects.add("minecraft:conduit_power", 900, 1, false, false)
                }
                if (event.hasGameStage("e_tide_s") == true){
                    event.removeGameStage("e_tide_s")
                }
            }}
            //急迫
            {if (event.hasGameStage("e_haste_s")){
                if (player.hasEffect("minecraft:haste") != true){
                    player.potionEffects.add("minecraft:haste", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_haste_ss")){
                if (player.hasEffect("minecraft:haste") != true){
                    player.potionEffects.add("minecraft:haste", 900, 1, false, false)
                }
                if (event.hasGameStage("e_haste_s") == true){
                    event.removeGameStage("e_haste_s")
                }
            }
            if (event.hasGameStage("e_haste_sss")){
                if (player.hasEffect("minecraft:haste") != true){
                    player.potionEffects.add("minecraft:haste", 900, 2, false, false)
                }
                if (event.hasGameStage("e_haste_ss") == true){
                    event.removeGameStage("e_haste_ss")
                }
            }}
            //运气
            {if (event.hasGameStage("e_luck_s")){
                if (player.hasEffect("minecraft:luck") != true){
                    player.potionEffects.add("minecraft:luck", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_luck_sss")){
                if (player.hasEffect("minecraft:luck") != true){
                    player.potionEffects.add("minecraft:luck", 900, 2, false, false)
                }
                if (event.hasGameStage("e_luck_s") == true){
                    event.removeGameStage("e_luck_s")
                }
            }}
            //抗火
            if (event.hasGameStage("e_fire_resist_s")){
                if (player.hasEffect("minecraft:fire_resistance") != true){
                    player.potionEffects.add("minecraft:fire_resistance", 900, 0, false, false)
                }
            }
            //活力迸发
            if (event.hasGameStage("e_vitality_s")){
                if (player.hasEffect("attributeslib:vitality") != true){
                    player.potionEffects.add("attributeslib:vitality", 900, 0, false, false)
                }
            }
            //二段跳
            if (event.hasGameStage("e_frog_leg_s")){
                if (player.hasEffect("goety:frog_leg") != true){
                    player.potionEffects.add("goety:frog_leg", 900, 0, false, false)
                }
            }
            //寒庇
            if (event.hasGameStage("e_chill_hide_s")){
                if (player.hasEffect("goety:chill_hide") != true){
                    player.potionEffects.add("goety:chill_hide", 900, 1, false, false)
                }
            }
            //抗性
            if (event.hasGameStage("e_resistance_s")){
                if (player.hasEffect("minecraft:resistance") != true){
                    player.potionEffects.add("minecraft:resistance", 900, 0, false, false)
                }
            }
            if (event.hasGameStage("e_resistance_ss")){
                if (player.hasEffect("minecraft:resistance") != true){
                    player.potionEffects.add("minecraft:resistance", 900, 1, false, false)
                }
                if (event.hasGameStage("e_resistance_s") == true){
                    event.removeGameStage("e_resistance_s")
                }
            }
            {if (event.hasGameStage("e_resistance_sss")){
                if (player.hasEffect("minecraft:resistance") != true){
                    player.potionEffects.add("minecraft:resistance", 900, 2, false, false)
                }
                if (event.hasGameStage("e_resistance_ss") == true){
                    event.removeGameStage("e_resistance_ss")
                }
            }}
            //太阳祝福
            if (event.hasGameStage("e_sun_blessing_s")){
                if (player.hasEffect("mowziesmobs:suns_blessing") != true){
                    player.potionEffects.add("mowziesmobs:suns_blessing", 900, 255, false, false)
                }
            }
        }
        //===========剧情选择方面========================
        //黑暗线选择
        if (event.hasGameStage("stay_at_home") == false && event.hasGameStage("event_don_kill_v") == false){ //杀了维齐尔
            event.addGameStage("stay_at_home")
        }
        if (event.hasGameStage("event_remove_stay_at_home")){
            event.removeGameStage("stay_at_home")
            event.removeGameStage("event_remove_stay_at_home")
        }
        //继往开来章节的谈判判定
        if (event.hasGameStage("event_meeting_check") == true){
            if (event.hasGameStage("event_first_success") == true && event.hasGameStage("event_second_success") == true && event.hasGameStage("event_third_success") == true){
                event.addGameStage("event_meeting_great_end")//道阻且长结局
                event.removeGameStage("event_meeting_check")
            }
            else if(event.hasGameStage("event_first_fail") == true && event.hasGameStage("event_second_fail") == true && event.hasGameStage("event_third_fail") == true){
                event.addGameStage("event_meeting_fail_end")//谈判失败触发战争结局
                event.removeGameStage("event_meeting_check")
            }
            else{
                event.addGameStage("event_meeting_success_end")//谈判成功
                event.removeGameStage("event_meeting_check")
            }
        }
        //月明花开章节结局判定
        if (event.hasGameStage("event_check_strongest") == true){
            if (event.hasGameStage("e_strength_sss") == true && event.hasGameStage("e_tide_ss") == true && event.hasGameStage("e_haste_sss") == true && event.hasGameStage("e_health_sss") == true && event.hasGameStage("e_resistance_sss") == true){
                event.addGameStage("event_strongest_end")//最厉害的！
                event.removeGameStage("event_check_strongest")
            }
            else{
                event.addGameStage("event_not_strongest_end") //死掉了（悲
                event.removeGameStage("event_check_strongest")
            }
        }

        //隐藏结局判定
        if (event.hasGameStage("event_weakest_check") == true){ //成长性为E，真的是太逊啦
            if (event.hasGameStage("e_strength_s") == false && event.hasGameStage("e_speed_s") == false && event.hasGameStage("e_haste_s") == false && event.hasGameStage("e_resistance_s") == false && event.hasGameStage("e_health_s") == false){
                event.addGameStage("event_weakest_end") //弱爆了！
                event.removeGameStage("event_weakest_check")
            }
            else{
                event.removeGameStage("event_weakest_check") //检查直接结束
            }
        }
        if (event.hasGameStage("end") == true){
             // 难度结局判定
            if (event.hasGameStage("hard") == true){
                event.addGameStage("hard_end") // 困难结局
            }
            else if (event.hasGameStage("easy") == true){
                event.addGameStage("easy_end") // 简单结局
            }
            else{
                event.addGameStage("normal_end") // 普通结局
            }
            //周目判定
            if (event.hasGameStage("the_first_playthrough") == false && event.hasGameStage("the_second_playthrough") == false && event.hasGameStage("the_third_playthrough") == false){
                event.addGameStage("the_first_playthrough")
            }
            if (event.hasGameStage("the_first_playthrough")){
                event.addGameStage("the_second_playthrough")
                event.removeGameStage("the_first_playthrough")
            }
            if (event.hasGameStage("the_second_playthrough")){
                event.addGameStage("the_third_playthrough")
                event.removeGameStage("the_second_playthrough")
            }//最多进行三周目判定
            event.removeGameStage("end")
        }

        //全结局下给予所有物品阶段和维度阶段
        if (event.hasGameStage("all_end_stage")){
            let all_stages = [
                "cursed_opal_armor",
                "ironwood_armor",
                "ametrine_armor",
                "void_armor",
                "terrasteel_armor",
                "netherite_armor",
                "eden_armor",
                "frozen_armor",
                "warden_armor",
                "ender_armor",
                "sculkium_armor",
                "shulkerate_armor",
                "jet_suit_armor",
                "abyssal_armor",
                "etherium_armor",
                "gravitite_armor",
                "poseidite_armor",
                "dragonsteel_armor",
                "ignitium_armor",
                "cursium_armor",
                "damned_armor",
                "bedrock_armor",
                "black_iron_armor",
                "dark_armor",
                "d_first_layer",
                "d_second_layer",
                "d_fourth_layer",
                "d_fifth_layer",
                "d_sixth_layer",
                "d_seventh_layer",
                "d_the_nether",
                "d_twilight_forest",
                "d_undergarden",
                "d_iceika",
                "d_eden",
                "d_wildwood",
                "d_apalachia",
                "d_skythern",
                "d_arcana",
                "d_mortum",
                "d_the_end",
                "d_the_aether",
                "diamond_greatsword",
                "violet_diamond_sword",
                "poseidite_sword",
                "flaming_fury",
                "ghost_sword",
                "earth_sword",
                "divine_sword",
                "eden_blade",
                "totemic_gold_sword",
                "golden_spear",
                "eden_shickaxe",
                "wand_of_freezing",
                "void_sword",
                "sculkium_sword",
                "ender_sword",
                "shulkerate_sword",
                "dread_queen_sword",
                "dragonsteel_sword",
                "netherite_sword",
                "dark_sword",
                "dark_scythe",
                "dark_metal_scythe",
                "death_scythe",
                "zanite_sword",
                "elemental_sword",
                "ceraunus",
                "the_incinerator",
                "soul_render",
                "diamond_heavy_crossbow",
                "ghast_cannon",
                "serenade_of_death",
                "netherite_heavy_crossbow",
                "eden_bow",
                "eden_blitz",
                "golden_fury",
                "bowhead_anchor",
                "wildwood_bow",
                "dragon_bow",
                "skythern_bow",
                "mortum_bow",
                "undeath_true",
                "alfsteel_armor"
            ]
            all_stages.forEach(stage_id => {
                event.addGameStage(stage_id)
            })
            event.removeGameStage("all_end_stage")
        }
        

        //重置难度
        if (event.hasGameStage("difficulty_reset")){
            if (event.hasGameStage("hard")){
                event.removeGameStage("hard")
            }
            if (event.hasGameStage("easy")){
                event.removeGameStage("easy")
            }
            if (event.hasGameStage("starteffectclear") && event.hasGameStage("start")){
                event.removeGameStage("starteffectclear")
                event.removeGameStage("start")
            }
        }
        if (event.hasGameStage("difficulty_reset_finish")){
            event.removeGameStage("difficulty_reset")
            event.addGameStage("start")
            event.server.runCommandSilent("ftbquests change_progress " + name + " reset 192893813FE5B026")
            event.server.runCommandSilent("ftbquests change_progress " + name + " reset 78695725811A521A")
            event.server.runCommandSilent("ftbquests change_progress " + name + " reset 2ADF62B383B09B50")
            event.server.runCommandSilent("ftbquests change_progress " + name + " reset 75451A98A929A461")
            event.removeGameStage("difficulty_reset_finish")
        }

        //到指定时刻后清除某个开局物品
        if (event.hasGameStage("compelete_chapter_one") == true && event.hasGameStage("difficulty_reset_button_cleared") == false){
            if (player.inventory.find("linzhi:difficulty_reset_button") != -1){ //该物品存在
                player.inventory.clear("linzhi:difficulty_reset_button")
                event.addGameStage("difficulty_reset_button_cleared")
           }
        }
    }
});


// 随机生成冰结球
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 包含最小值和最大值
}

EntityEvents.spawned(event => {
    let id = event.entity.getType()
    if (id == "minecraft:snowball"){
        let random_number = getRandomIntInclusive(1, 3)
        if (random_number == 2){
            event.server.runCommandSilent("execute at @e[type=minecraft:snowball] run summon aether:ice_crystal ~ ~ ~")
        }
    }
})