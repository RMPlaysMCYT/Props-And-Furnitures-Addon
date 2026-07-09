import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const PafaBlockEntitySummonComponent ={
    onPlace({dimension}){
        dimension.runCommand('summon pafa:seat_classroom ~ ~ ~')
        dimension.runCommand('execute @e[type=pafa:seat_classroom,c=1 ] ~ ~ ~ tp @s ~ ~ ~ facing ~ ~ ~')
    }
}

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "pafa:chair_seat_placement",
        PafaBlockEntitySummonComponent
    );
});