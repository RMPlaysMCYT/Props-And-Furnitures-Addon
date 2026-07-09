////Code from Monorogu Modified by RMPlaysMC YT arranged with BlckboxAI
////Code from Monorogu Modified by RMPlaysMC YT arranged with BlckboxAI
////Code from Monorogu Modified by RMPlaysMC YT arranged with BlckboxAI
////Code from Monorogu Modified by RMPlaysMC YT arranged with BlckboxAI
import { world } from "@minecraft/server";

const chairTypes = [
    { 
        id: 'pafa:sit_player_component', 
        entity: 'pafa:pafa_seat', 
        yOffset: 0.5 
    },
    { 
        id: 'pafa:sofa_sit_player_component', 
        entity: 'pafa:pafa_seat_sofa', yOffset: 0.4 
    },
    { 
        id: 'pafa:sofa2_sit_player_component', 
        entity: 'pafa:pafa_seat_sofa', yOffset: 0.5 
    },
    { 
        id: 'pafa:sit_office_player_component', 
        entity: 'pafa:pafa_seat', yOffset: 0.5 
    },
    { 
        id: 'pafa:sit_ottoman_player_component', 
        entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 
    }

    /*Copied Just for other seat types to be arrived
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 },
    { id: 'pafa:sit_ottoman_player_component', entity: 'pafa:pafa_seat_ottoman', yOffset: 0.5 }*/
];







const directionOffsets = {
    north: { x: 0, y: 0, z: 1 },
    east: { x: -1, y: 0, z: 0 },
    south: { x: 0, y: 0, z: -1 },
    west: { x: 1, y: 0, z: 0 },
};

world.beforeEvents.worldInitialize.subscribe(eventData => {
    chairTypes.forEach(chair => {
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
////Psst I'll tell you a secret just scroll down and there's a tip"//////





























































/////Just Keep Scrolling///























































































/////Just Keep Scrolling///




































































////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////
////UNUSED CODE/////

////TADAA!!!!////
////TADAA!!!!////
////TADAA!!!!////
////TADAA!!!!////
////You can Copy and Paste to your addon///
////You can Copy and Paste to your addon///
////You can Copy and Paste to your addon///
////You can Copy and Paste to your addon///
////You can Copy and Paste to your addon///

/// JUST REMOVE THIS "/*" AND "*/"   ///
/// JUST REMOVE THIS "/*" AND "*/"   ///
/// JUST REMOVE THIS "/*" AND "*/"   ///

/*
import { world } from "@minecraft/server";
/** @type {import("@minecraft/server").BlockCustomComponent} 
world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockComponentRegistry.registerCustomComponent('pafa:sit_player_component', {
        onPlayerInteract(e) {
            const { block, player } = e;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const entity = block.dimension.spawnEntity('pafa:pafa_seat', { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
            const direction = block.permutation.getState("minecraft:cardinal_direction");
            const { x, y, z } = entity.location;

            // Apply rotation to the entity based on the block direction
            switch (direction) {
                case 'north': 
                    entity.teleport(entity.location, { facingLocation: { x, y, z: z + 1 } });
                    break;
                case 'east': 
                    entity.teleport(entity.location, { facingLocation: { x: x - 1, y, z } });
                    break;
                case 'south': 
                    entity.teleport(entity.location, { facingLocation: { x, y, z: z - 1 } });
                    break;
                case 'west': 
                    entity.teleport(entity.location, { facingLocation: { x: x + 1, y, z } });
                    break;
                default:
                    console.warn(`Unexpected direction: ${direction}`);
            }
        }
    });
});
world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockComponentRegistry.registerCustomComponent('pafa:sofa_sit_player_component', {
        onPlayerInteract(e) {
            const { block, player } = e;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const entity = block.dimension.spawnEntity('pafa:pafa_seat_sofa', { x: block.location.x + 0.5, y: block.location.y + 0.35, z: block.location.z + 0.5 });
            const direction = block.permutation.getState("minecraft:cardinal_direction");
            const { x, y, z } = entity.location;

            // Apply rotation to the entity based on the block direction
            switch (direction) {
                case 'north': 
                    entity.teleport(entity.location, { facingLocation: { x, y, z: z + 1 } });
                    break;
                case 'east': 
                    entity.teleport(entity.location, { facingLocation: { x: x - 1, y, z } });
                    break;
                case 'south': 
                    entity.teleport(entity.location, { facingLocation: { x, y, z: z - 1 } });
                    break;
                case 'west': 
                    entity.teleport(entity.location, { facingLocation: { x: x + 1, y, z } });
                    break;
                default:
                    console.warn(`Unexpected direction: ${direction}`);
            }
        }
    });
});
world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockComponentRegistry.registerCustomComponent('pafa:sit_office_player_component', {
        onPlayerInteract(e) {
            const { block, player } = e;
            const equipment = player.getComponent('equippable');
            const selectedItem = equipment.getEquipment('Mainhand');
            const entity = block.dimension.spawnEntity('pafa:pafa_seat', { x: block.location.x + 0.5, y: block.location.y + 0.5, z: block.location.z + 0.5 });
            const direction = block.permutation.getState("minecraft:cardinal_direction");
            const { x, y, z } = entity.location;

            // Apply rotation to the entity based on the block direction
            switch (direction) {
                case 'north': 
                    entity.teleport(entity.location, { facingLocation: { x, y, z: z + 1 } });
                    break;
                case 'east': 
                    entity.teleport(entity.location, { facingLocation: { x: x - 1, y, z } });
                    break;
                case 'south': 
                    entity.teleport(entity.location, { facingLocation: { x, y, z: z - 1 } });
                    break;
                case 'west': 
                    entity.teleport(entity.location, { facingLocation: { x: x + 1, y, z } });
                    break;
                default:
                    console.warn(`Unexpected direction: ${direction}`);
            }
        }
    });
});*/