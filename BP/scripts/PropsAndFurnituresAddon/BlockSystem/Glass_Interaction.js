/////Credit to EndXenoc from DecoDrop Addon
/////Credit to EndXenoc from DecoDrop Addon
/////Credit to EndXenoc from DecoDrop Addon
/////Credit to EndXenoc from DecoDrop Addon

import { world, BlockPermutation } from "@minecraft/server";
import { airBlocksSpacer } from "../Libraries/OtherStuff1"

const upperBlockLocation = {
    "north": {
        x: 0,
        y: 1,
        z: 0
    },
    "south": {
        x: 0,
        y: 1,
        z: 0
    },
    "west": {
        x: 0,
        y: 1,
        z: 0
    },
    "east": {
        x: 0,
        y: 1,
        z: 0
    }
};

const lowerBlockLocation = {
    "north": {
        x: 1,
        y: 0,
        z: 0
    },
    "south": {
        x: -1,
        y: 0,
        z: 0
    },
    "west": {
        x: 0,
        y: 0,
        z: -1
    },
    "east": {
        x: 0,
        y: 0,
        z: 1
    }
};

world.beforeEvents.worldInitialize.subscribe(
    (event) => {
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:glassShutter", new PafaGlassShutterPosition()
        );
    }
)
var PafaGlassShutterPosition = class {
    beforeOnPlayerPlace(event) {
        const {
            block,
            permutationToPlace,
            dimension
        } = event;
        const direction = permutationToPlace.getState("minecraft:cardinal_direction");
        const upperBlock = block.offset(
            upperBlockLocation[direction]
        );
        if (airBlocksSpacer.includes(
            upperBlock.typeId
        )
        ) {
            upperBlock.setPermutation(
                BlockPermutation.resolve(
                    "pafa:pafa_shutter_window1Up",
                    {
                        "minecraft:cardinal_direction": direction
                    }
                )
            );
        } else {
            event.cancel = true;
        }
    }
}