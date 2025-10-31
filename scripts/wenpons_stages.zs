import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

val weapons as string[IItemStack] = {
    <item:spartanweaponry:diamond_greatsword>:"diamond_greatsword",
    <item:infinite_abyss:violet_diamond_sword>:"violet_diamond_sword",
    <item:l2complements:poseidite_sword>:"poseidite_sword",
    <item:divinerpg:flaming_fury>:"flaming_fury",
    <item:iceandfire:ghost_sword>:"ghost_sword",
    <item:iter_rpg:earth_sword>:"earth_sword",
    <item:divinerpg:divine_sword>:"divine_sword",
    <item:divinerpg:eden_blade>:"eden_blade",
    <item:l2complements:totemic_gold_sword>:"totemic_gold_sword",
    <item:iter_rpg:golden_spear>:"golden_spear",
    <item:divinerpg:eden_shickaxe>:"eden_shickaxe",
    <item:savage_and_ravage:wand_of_freezing>:"wand_of_freezing",
    <item:iter_rpg:void_sword>:"void_sword",
    <item:l2complements:sculkium_sword>:"sculkium_sword",
    <item:divinerpg:ender_sword>:"ender_sword",
    <item:l2complements:shulkerate_sword>:"shulkerate_sword",
    <item:iceandfire:dread_queen_sword>:"dread_queen_sword",
    <item:iceandfire:dragonsteel_fire_sword>:"dragonsteel_sword",
    <item:iceandfire:dragonsteel_ice_sword>:"dragonsteel_sword",
    <item:iceandfire:dragonsteel_lightning_sword>:"dragonsteel_sword",
    <item:minecraft:netherite_sword>:"netherite_sword",
    <item:goety:dark_sword>:"dark_sword",
    <item:goety:dark_scythe>:"dark_scythe",
    <item:goety:dark_metal_scythe>:"dark_metal_scythe",
    <item:goety:death_scythe>:"death_scythe",
    <item:aether:zanite_sword>:"zanite_sword",
    <item:iter_rpg:elemental_sword>:"elemental_sword",
    <item:cataclysm:ceraunus>:"ceraunus",
    <item:cataclysm:the_incinerator>:"the_incinerator",
    <item:cataclysm:soul_render>:"soul_render",

    //远程
    <item:spartanweaponry:diamond_heavy_crossbow>:"diamond_heavy_crossbow",
    <item:divinerpg:ghast_cannon>:"ghast_cannon",
    <item:divinerpg:serenade_of_death>:"serenade_of_death",
    <item:spartanweaponry:netherite_heavy_crossbow>: "netherite_heavy_crossbow",
    <item:divinerpg:eden_bow>:"eden_bow",
    <item:divinerpg:eden_blitz>:"eden_blitz",
    <item:divinerpg:golden_fury>:"golden_fury",
    <item:divinerpg:bowhead_anchor>:"bowhead_anchor",
    <item:divinerpg:wildwood_bow>:"wildwood_bow",
    <item:enigmaticaddons:dragon_bow>:"dragon_bow",
    <item:divinerpg:skythern_bow>:"skythern_bow",
    <item:divinerpg:mortum_bow>:"mortum_bow",
    //特殊万灵药
    <item:goety:undeath_potion>:"undeath_true"
};

for weapon,stage in weapons {
    // 限制物品阶段
    val restrictedItem = ItemStages.restrict(weapon, stage);
    
    // 设置配方阶段
    //mods.recipestages.Recipes.setRecipeStage(stage, weapon);
    
    // 配置具体限制
    restrictedItem.preventInventory(false);     // 允许放入背包
    restrictedItem.preventAttacking(true);      // 禁止攻击
    restrictedItem.preventPickup(false);        // 允许拾取
    restrictedItem.preventUsing(true);          // 禁止使用
    restrictedItem.setHiddenInJEI(false);        // JEI中隐藏
}