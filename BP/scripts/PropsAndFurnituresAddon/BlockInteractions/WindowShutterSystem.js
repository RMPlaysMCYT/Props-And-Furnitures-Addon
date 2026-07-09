import {world} from "@minecraft/server"

var PAFAGlassShutterInteract = class {
     onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("pafa:glass_window_interact");
        const sound = isOpen ? "close.wooden_trapdoor" : "open.wooden_trapdoor";
        block.setPermutation(block.permutation.withState("pafa:glass_window_interact", !isOpen));
        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    }
}

world.beforeEvents.worldInitialize.subscribe((event)=>{
    event.blockComponentRegistry.registerCustomComponent("pafa:glass_window_interact_compo", new PAFAGlassShutterInteract)
})