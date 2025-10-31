StartupEvents.registry("item", event => {
    event.create("linzhi:left", "basic").tooltip("提交到任务书以解锁左边的路线")
    event.create("linzhi:right", "basic").tooltip("提交到任务书以解锁右边的路线")
    event.create("linzhi:mid", "basic").tooltip("提交到任务书以解锁中间的路线")
    event.create("linzhi:special_point", "basic").tooltip("提交到任务书以提升玩家的某样特定属性")
    event.create("linzhi:game_reset_button", "basic").tooltip("提交到任务书以重置游戏")
    event.create("linzhi:difficulty_reset_button", "basic").tooltip("提交到任务书以重置难度")
    event.create("linzhi:z_coin", "basic").tooltip(Text.of("--------雅柏芝序大陆通行货币--------\n可以在任务书中购买相应物品").yellow())
})

//懒得创建文件了直接在这里修改吧
MoreJSEvents.registerPotionBrewing((event) => {
    event.addPotionBrewing("infinite_abyss:warmth_talisman", "minecraft:fire_resistance", "infinite_abyss:cold_resistance_potion")
})