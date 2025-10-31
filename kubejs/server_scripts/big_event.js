PlayerEvents.tick(event => {
    const player = event.player
    const name = player.name.getString()

    let stage_title_and_music = {
        //值的第一个是副标题，第二个主标题，第三个是音乐文件名
        "tm_start":["林 芝 制 造，欢 迎 游 玩","§b涤 秽 布 新","trials:music_disc_creator"],
        "tm_second_chapter":["糟糕的事情发生了", "§0凝 固 计 划","minecraft:music.nether.crimson_forest"],
        "tm_third_chapter":["恶 行 反 噬", "§c西 北 大 动 乱", "sth_i_need:music.gkgroup"],
        "tm_second_zhibo_war":["生者继续前行", "§a第 二 次 枝 柏 战 争", "minecraft:music.keluodiyakuangxiangqu"],
        "tm_drak_ahead":["命运果然如此弄人吗？", "§d前 途 黑 暗", "sth_i_need:music.heart"],
        "tm_final_find":["世界的齿轮开始扭动了", "§7最 终 发 现", "minecraft:music.peacockfeatherfatality"],
        "tm_great_leberation":["解放战争拉开了帷幕", "§c第 三 次 雅 柏 芝 序 大 战", "minecraft:music.peoplesliberationarmysong"],
        "tm_third_world_war":["如果那一天来临", "§c谈 无 可 谈，无 需 再 谈", "sth_i_need:music.war"],
        "tm_first_end":["雅柏芝序迎来自由", "§c第 一 结 局：向 阳 而 生", "sth_i_need:music.cccp"],
        "tm_second_end":["他的冒险才刚刚开始", "§c第 二 结 局：曦 光 同 路", "sth_i_need:music.guojige"],
        "tm_third_end":["还有很多事等着他们去做呢", "§a第 三 结 局：道 阻 且 长", "minecraft:music.zhengtu"],
        "tm_fourth_end":["新世界已经开始了，他的人生也是", "§3第 四 结 局：铁 窗 生 藤", "minecraft:music.tiechuang"],
        "tm_fifth_end":["我们的友谊地久天长", "§d第 五 结 局：万 古 长 青", "sth_i_need:music.grass"],
        "tm_sixth_end":["打败过去的自己很难，打造一个新世界更难", "§e第 六 结 局：魇 散 风 平", "minecraft:music.thatsthewayitis"],
        "tm_seventh_end":["洁方只想要过平静的生活", "§1第 七 结 局：重 整 乾 坤", "minecraft:music.yuxueheibang"],
        "tm_eighth_end":["连仅剩的光也躲藏起来了", "§0第 八 结 局：阴 影 笼 罩", "minecraft:music.ironmoon"],
        "tm_ninth_end":["在桃花源的平凡生活", "§a第 九 结 局：尘 间 日 常", "minecraft:music.fudebeizhong"]
    }

    for(const [stage, value] of Object.entries(stage_title_and_music)){
        if (event.hasGameStage(stage) == true){
            event.server.runCommandSilent("stopsound " + name)//停止音乐
            event.server.runCommandSilent("title " + name + " times 1s 10s 1s") //标题时间判定
            event.server.runCommandSilent("title " + name + ' subtitle "' + value[0] + '"') //副标题
            event.server.runCommandSilent("title " + name + ' title "' + value[1] + '"') //标题
            event.server.runCommandSilent('playsound '+ value[2] +' music '+ name + " ~ ~ ~ 10000 1 1")//音乐
            event.removeGameStage(stage)
        }
    }
})
