import {world} from "@minecraft/server"

var PafaLightActivationSystemLampStall = class {
     onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("pafa:lamp_tall_activated");
        const sound = isOpen ? "close.wooden_trapdoor" : "open.wooden_trapdoor";
        block.setPermutation(block.permutation.withState("pafa:lamp_tall_activated", !isOpen));
        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    }
}

world.beforeEvents.worldInitialize.subscribe((event)=>{
    event.blockComponentRegistry.registerCustomComponent("pafa:lamp_interaction", new PafaLightActivationSystemLampStall)
})