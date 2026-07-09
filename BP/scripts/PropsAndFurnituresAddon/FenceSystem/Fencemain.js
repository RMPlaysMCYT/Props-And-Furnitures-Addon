import { system, world } from '@minecraft/server';
import { decrementStack, getOppositeDirection, DirectionType, cardinalSides } from './utils/helper';
import { directionToVector3 } from './utils/math';

world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('pafa:normal_fence_trigger', {
        onPlayerDestroy: e => {
            for (const direction of DirectionType.HORIZONTAL) {
                const directionOpposite = getOppositeDirection(direction);
                const blockToCheck = e.block.offset(directionToVector3(directionOpposite));

                for (const directionChild of DirectionType.HORIZONTAL) {
                    const directionOppositeChild = getOppositeDirection(directionChild);
                    const blockToCheckChild = blockToCheck.offset(directionToVector3(directionOppositeChild));

                    try {
                        blockToCheck.setPermutation(blockToCheck.permutation.withState(`pafa:${directionOppositeChild.toLowerCase()}`, !blockToCheckChild.typeId.includes("minecraft:air")));
                    } catch (error) { }
                }
            }
        },
        beforeOnPlayerPlace: e => {
            e.permutationToPlace = e.permutationToPlace.withState("pafa:in_world", true);

            for (const direction of DirectionType.HORIZONTAL) {
                const directionOpposite = getOppositeDirection(direction);
                const blockToCheck = e.block.offset(directionToVector3(directionOpposite));

                if (blockToCheck.typeId.includes("minecraft:air")) continue;
                e.permutationToPlace = e.permutationToPlace.withState(`pafa:${directionOpposite.toLowerCase()}`, !blockToCheck.typeId.includes("minecraft:air"));
                try {
                    blockToCheck.setPermutation(blockToCheck.permutation.withState(`pafa:${direction.toLowerCase()}`, true));
                } catch (error) { }
            }
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent('pafa:bamboo_fence_trigger', {
        onPlayerDestroy: e => {
            for (const direction of DirectionType.HORIZONTAL) {
                const directionOpposite = getOppositeDirection(direction);
                const blockToCheck = e.block.offset(directionToVector3(directionOpposite));

                for (const directionChild of DirectionType.HORIZONTAL) {
                    const directionOppositeChild = getOppositeDirection(directionChild);
                    const blockToCheckChild = blockToCheck.offset(directionToVector3(directionOppositeChild));

                    try {
                        blockToCheck.setPermutation(blockToCheck.permutation.withState(`pafa:${directionOppositeChild.toLowerCase()}`, !blockToCheckChild.typeId.includes("minecraft:air")));
                    } catch (error) { }
                }
            }
        },
        beforeOnPlayerPlace: e => {
            e.permutationToPlace = e.permutationToPlace.withState("pafa:in_world", true);

            for (const direction of DirectionType.HORIZONTAL) {
                const directionOpposite = getOppositeDirection(direction);
                const blockToCheck = e.block.offset(directionToVector3(directionOpposite));

                if (blockToCheck.typeId.includes("minecraft:air")) continue;
                e.permutationToPlace = e.permutationToPlace.withState(`pafa:${directionOpposite.toLowerCase()}`, !blockToCheck.typeId.includes("minecraft:air"));
                try {
                    blockToCheck.setPermutation(blockToCheck.permutation.withState(`pafa:${direction.toLowerCase()}`, true));
                } catch (error) { }
            }
        }
    });
});