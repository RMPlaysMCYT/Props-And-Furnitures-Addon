import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const PafaBlockSeatEntitySummonComponent ={
    onPlace({dimension}){
        dimension.spawnEntity('pafa:seat')
    }
}

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "pafa:chair_seat_component",
        PafaBlockSeatEntitySummonComponent
    );
});