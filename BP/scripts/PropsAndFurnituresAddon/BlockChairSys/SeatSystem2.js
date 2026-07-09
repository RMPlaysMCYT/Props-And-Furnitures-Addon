// Error may occur UNLESS The 1986 Expansion Pack us added
import { chair2Types } from '../../scripts/seatsystem2comp';

import { world } from "@minecraft/server";


const directionOffsets = {
    north: { x: 0, y: 0, z: 1 },
    east: { x: -1, y: 0, z: 0 },
    south: { x: 0, y: 0, z: -1 },
    west: { x: 1, y: 0, z: 0 },
};

world.beforeEvents.worldInitialize.subscribe(eventData => {
    chair2Types.forEach(chair => {
        eventData.blockComponentRegistry.registerCustomComponent(chair.id, {
            onPlayerInteract(e) {
                const { block, player } = e;
                const equipment = player.getComponent('equippable');
                const selectedItem = equipment.getEquipment('Mainhand');
                const entity = block.dimension.spawnEntity(chair.entity, {
                    x: block.location.x + 0.5,
                    y: block.location.y + chair.yOffset,
                    z: block.location.z + 0.5,
                });
                const direction = block.permutation.getState("minecraft:cardinal_direction");
                const offset = directionOffsets[direction];

                if (!offset) {
                    throw new Error(`Unexpected direction: ${direction}`);
                }

                entity.teleport(entity.location, {
                    facingLocation: {
                        x: entity.location.x + offset.x,
                        y: entity.location.y,
                        z: entity.location.z + offset.z,
                    },
                });
            },
        });
    });
});