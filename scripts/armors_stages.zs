import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

val armors as string[IItemStack] = {
    <item:infinite_abyss:cursed_opal_armor_helmet>: "cursed_opal_armor",
    <item:infinite_abyss:cursed_opal_armor_chestplate>: "cursed_opal_armor",
    <item:infinite_abyss:cursed_opal_armor_leggings>: "cursed_opal_armor",
    <item:infinite_abyss:cursed_opal_armor_boots>: "cursed_opal_armor",

    <item:twilightforest:ironwood_helmet>: "ironwood_armor",
    <item:twilightforest:ironwood_chestplate>: "ironwood_armor",
    <item:twilightforest:ironwood_leggings>: "ironwood_armor",
    <item:twilightforest:ironwood_boots>: "ironwood_armor",

    <item:iter_rpg:ametrine_helmet>: "ametrine_armor",
    <item:iter_rpg:ametrine_chestplate>: "ametrine_armor",
    <item:iter_rpg:ametrine_leggings>: "ametrine_armor",
    <item:iter_rpg:ametrine_boots>: "ametrine_armor",

    <item:iter_rpg:void_armor_helmet>: "void_armor",
    <item:iter_rpg:void_armor_chestplate>: "void_armor",
    <item:iter_rpg:void_armor_leggings>: "void_armor",
    <item:iter_rpg:void_armor_boots>: "void_armor",

    <item:botania:terrasteel_helmet>: "terrasteel_armor",
    <item:botania:terrasteel_chestplate>: "terrasteel_armor",
    <item:botania:terrasteel_leggings>: "terrasteel_armor",
    <item:botania:terrasteel_boots>: "terrasteel_armor",

    <item:minecraft:netherite_helmet>: "netherite_armor",
    <item:minecraft:netherite_chestplate>: "netherite_armor",
    <item:minecraft:netherite_leggings>: "netherite_armor",
    <item:minecraft:netherite_boots>: "netherite_armor",

    <item:divinerpg:eden_helmet>: "eden_armor",
    <item:divinerpg:eden_chestplate>: "eden_armor",
    <item:divinerpg:eden_leggings>: "eden_armor",
    <item:divinerpg:eden_boots>: "eden_armor",

    <item:divinerpg:frozen_helmet>: "frozen_armor",
    <item:divinerpg:frozen_chestplate>: "frozen_armor",
    <item:divinerpg:frozen_leggings>: "frozen_armor",
    <item:divinerpg:frozen_boots>: "frozen_armor",

    <item:deeperdarker:warden_helmet>: "warden_armor",
    <item:deeperdarker:warden_chestplate>: "warden_armor",
    <item:deeperdarker:warden_leggings>: "warden_armor",
    <item:deeperdarker:warden_boots>: "warden_armor",

    <item:divinerpg:ender_helmet>: "ender_armor",
    <item:divinerpg:ender_chestplate>: "ender_armor",
    <item:divinerpg:ender_leggings>: "ender_armor",
    <item:divinerpg:ender_boots>: "ender_armor",

    <item:l2complements:sculkium_helmet>: "sculkium_armor",
    <item:l2complements:sculkium_chestplate>: "sculkium_armor",
    <item:l2complements:sculkium_leggings>: "sculkium_armor",
    <item:l2complements:sculkium_boots>: "sculkium_armor",

    <item:l2complements:shulkerate_helmet>: "shulkerate_armor",
    <item:l2complements:shulkerate_chestplate>: "shulkerate_armor",
    <item:l2complements:shulkerate_leggings>: "shulkerate_armor",
    <item:l2complements:shulkerate_boots>: "shulkerate_armor",

    <item:ad_astra:jet_suit_helmet>: "jet_suit_armor",
    <item:ad_astra:jet_suit>:"jet_suit_armor",
    <item:ad_astra:jet_suit_pants>:"jet_suit_armor",
    <item:ad_astra:jet_suit_boots>:"jet_suit_armor",

    <item:aquamirae:abyssal_heaume>:"abyssal_armor",
    <item:aquamirae:abyssal_brigantine>:"abyssal_armor",
    <item:aquamirae:abyssal_leggings>:"abyssal_armor",
    <item:aquamirae:abyssal_boots>:"abyssal_armor",

    <item:enigmaticlegacy:etherium_helmet>:"etherium_armor",
    <item:enigmaticlegacy:etherium_chestplate>:"etherium_armor",
    <item:enigmaticlegacy:etherium_leggings>:"etherium_armor",
    <item:enigmaticlegacy:etherium_boots>:"etherium_armor",

    <item:aether:gravitite_helmet>:"gravitite_armor",
    <item:aether:gravitite_chestplate>:"gravitite_armor",
    <item:aether:gravitite_leggings>:"gravitite_armor",
    <item:aether:gravitite_boots>:"gravitite_armor",

    <item:l2complements:poseidite_helmet>:"poseidite_armor",
    <item:l2complements:poseidite_chestplate>:"poseidite_armor",
    <item:l2complements:poseidite_leggings>:"poseidite_armor",
    <item:l2complements:poseidite_boots>:"poseidite_armor",

    <item:iceandfire:dragonsteel_lightning_helmet>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_lightning_chestplate>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_lightning_leggings>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_lightning_boots>:"dragonsteel_armor",

    <item:iceandfire:dragonsteel_fire_helmet>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_fire_chestplate>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_fire_leggings>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_fire_boots>:"dragonsteel_armor",

    <item:iceandfire:dragonsteel_ice_helmet>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_ice_chestplate>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_ice_leggings>:"dragonsteel_armor",
    <item:iceandfire:dragonsteel_ice_boots>:"dragonsteel_armor",

    <item:cataclysm:ignitium_helmet>:"ignitium_armor",
    <item:cataclysm:ignitium_elytra_chestplate>:"ignitium_armor",
    <item:cataclysm:ignitium_leggings>:"ignitium_armor",
    <item:cataclysm:ignitium_boots>:"ignitium_armor",

    <item:cataclysm:cursium_helmet>:"cursium_armor",
    <item:cataclysm:cursium_chestplate>:"cursium_armor",
    <item:cataclysm:cursium_leggings>:"cursium_armor",
    <item:cataclysm:cursium_boots>:"cursium_armor",

    <item:iter_rpg:damned_helmet>:"damned_armor",
    <item:iter_rpg:damned_chestplate>:"damned_armor",
    <item:iter_rpg:damned_leggings>:"damned_armor",
    <item:iter_rpg:damned_boots>:"damned_armor",

    <item:divinerpg:bedrock_helmet>:"bedrock_armor",
    <item:divinerpg:bedrock_chestplate>:"bedrock_armor",
    <item:divinerpg:bedrock_leggings>:"bedrock_armor",
    <item:divinerpg:bedrock_boots>:"bedrock_armor",

    <item:goety:black_iron_helmet>:"black_iron_armor",
    <item:goety:black_iron_chestplate>:"black_iron_armor",
    <item:goety:black_iron_leggings>:"black_iron_armor",
    <item:goety:black_iron_boots>:"black_iron_armor",

    <item:goety:dark_helmet>:"dark_armor",
    <item:goety:dark_chestplate>:"dark_armor",
    <item:goety:dark_leggings>:"dark_armor",
    <item:goety:dark_boots>:"dark_armor",

    <item:mythicbotany:alfsteel_chestplate>:"alfsteel_armor",
    <item:mythicbotany:alfsteel_helmet>:"alfsteel_armor",
    <item:mythicbotany:alfsteel_leggings>:"alfsteel_armor",
    <item:mythicbotany:alfsteel_boots>:"alfsteel_armor",

    <item:extrabotany:starry_idol_headgear>:"alfsteel_armor",
    <item:extrabotany:starry_idol_suit>:"alfsteel_armor",
    <item:extrabotany:starry_idol_skirt>:"alfsteel_armor",
    <item:extrabotany:starry_idol_boots>:"alfsteel_armor",

    <item:extrabotany:pleiades_combat_maid_headgear>:"alfsteel_armor",
    <item:extrabotany:pleiades_combat_maid_suit>:"alfsteel_armor",
    <item:extrabotany:pleiades_combat_maid_skirt>:"alfsteel_armor",
    <item:extrabotany:pleiades_combat_maid_boots>:"alfsteel_armor",
    <item:extrabotany:sanguine_pleiades_combat_maid_suit>:"alfsteel_armor",
};

for armor,stage in armors{
    // 限制物品阶段
    val restrictedItem = ItemStages.restrict(armor, stage);
    
    // 设置配方阶段
    //mods.recipestages.Recipes.setRecipeStage(stage, armor);
    
    // 配置具体限制
    restrictedItem.preventInventory(false);     // 允许放入背包
    restrictedItem.preventAttacking(true);      // 禁止攻击
    restrictedItem.preventPickup(false);        // 允许拾取
    restrictedItem.preventUsing(true);          // 禁止使用
    restrictedItem.setHiddenInJEI(false);       // 允许在JEI中显示
}