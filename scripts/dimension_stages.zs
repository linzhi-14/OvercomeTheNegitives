import mods.redimstages.ReDimensionStages;

// 定义需要限制的维度列表，格式为：[维度ID, 阶段条件]
val restrictedDimensions as string[string] = {
    "infinite_abyss:first_layer":"d_first_layer",
    "infinite_abyss:second_layer":"d_second_layer",
    "infinite_abyss:fourth_layer":"d_fourth_layer",
    "infinite_abyss:fifth_layer":"d_fifth_layer",
    "infinite_abyss:sixth_layer":"d_sixth_layer",
    "infinite_abyss:seventh_layer":"d_seventh_layer",
    "minecraft:the_nether":"d_the_nether",
    "twilightforest:twilight_forest":"d_twilight_forest",
    "undergarden:undergarden":"d_undergarden",
    "divinerpg:iceika":"d_iceika",
    "divinerpg:eden":"d_eden",
    "divinerpg:wildwood":"d_wildwood",
    "divinerpg:apalachia":"d_apalachia",
    "divinerpg:skythern":"d_skythern",
    "divinerpg:arcana":"d_arcana",
    "divinerpg:mortum":"d_mortum",
    "minecraft:the_end":"d_the_end",
    "aether:the_aether":"d_the_aether",
};


// 公共限制消息
val restrictionMessage = "你刚踏入传送门，却被一股力量弹了回来，请完成相关任务再试试吧";

// 遍历并应用所有维度限制
for dimension,stage in restrictedDimensions {
    ReDimensionStages.restrictWithMessage(
        dimension,   // 维度ID
        restrictionMessage,
        stage    // 阶段条件
    );
}