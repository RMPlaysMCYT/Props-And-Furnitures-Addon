import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const PafaTableActivityComponent = {
    onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("pafa:table_v2_open");
        const sound = isOpen ? "close.wooden_trapdoor" : "open.wooden_trapdoor";
        block.setPermutation(block.permutation.withState("pafa:table_v2_open", !isOpen));
        dimension.playSound(
            sound, block.center(),
            {
                pitch: 0.9,
                volume: 0.9,
            }
        );
    }
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "pafa:cabinet_1_interaction",
        PafaTableActivityComponent
    )
});