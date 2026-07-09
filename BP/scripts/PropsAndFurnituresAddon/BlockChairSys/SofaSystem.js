////Credit to EndXenoc from Decodrop Addon
////Credit to EndXenoc from Decodrop Addon
////Credit to EndXenoc from Decodrop Addon
////Credit to EndXenoc from Decodrop Addon

import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(
    (
        event
    ) => {
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:sofa_connections",
            new PafaSofaSystem()
        );
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:sofa_cabriole_connections",
            new PafaCabrioleSystem()
        );
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:sofa_chesterfield_connections",
            new PafaChesterfieldSystem()
        );
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:sofa_lawson_connections", new PafaLawsonSystem()
        );
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:sofa_mid_century_connections",
            new PafaMidCenturySystem()
        );
        event.blockComponentRegistry.registerCustomComponent(
            "pafa:sofa_patio_flower_connections",
            new PafaOutdoorPatioSystem()
        );
        event.blockComponentRegistry.registerCustomComponent(
            "pafa_outdoor:sofa_patio_flower_connections",
            new PafaOutdoorPatioSystem2()
        );
    }
)


var PafaSofaSystem = class {
    /**
* @param {{ block: any; }} event
*/
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:SofaNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:SofaSouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:SofaWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:SofaEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const PafaSofaRight = block.offset(OffsetPosition.right);
            const PafaSofaLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa:sofa_left",
                    PafaSofaLeft.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa:sofa_right", PafaSofaRight.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}

var PafaCabrioleSystem = class {
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:CabrioleNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:CabrioleSouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:CabrioleWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:CabrioleEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const PafaCabrioleRight = block.offset(OffsetPosition.right);
            const PafaCabrioleLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa:cabriole_left",
                    PafaCabrioleLeft.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa:cabriole_right",
                    PafaCabrioleRight.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}
var PafaChesterfieldSystem = class {
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:ChesterfieldNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:ChesterfieldSouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:ChesterfieldWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:ChesterfieldEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const PafaChesterfieldRight = block.offset(OffsetPosition.right);
            const PafaChesterfieldLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa:chesterfield_left",
                    PafaChesterfieldLeft.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa:chesterfield_right",
                    PafaChesterfieldRight.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}
var PafaLawsonSystem = class {
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:LawsonNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:LawsonSouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:LawsonWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:LawsonEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const PafaLawsonRight = block.offset(OffsetPosition.right);
            const PafaLawsonLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa:lawson_left", PafaLawsonLeft.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa:lawson_right", PafaLawsonRight.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}

var PafaMidCenturySystem = class {
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:MidCenturyNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:MidCenturySouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:MidCenturyWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:MidCenturyEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const PafaMidCenturyRight = block.offset(OffsetPosition.right);
            const PafaMidCenturyLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa:mid_century_left",
                    PafaMidCenturyLeft.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa:mid_century_right",
                    PafaMidCenturyRight.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}



/*PRETEST ONLY
import { world } from "@minecraft/server";

const sofaSystems = [
  { id: "pafa:sofa_connections", tagPrefix: "pafa:Sofa" },
  { id: "pafa:sofa_cabriole_connections", tagPrefix: "pafa:Cabriole" },
  { id: "pafa:sofa_chesterfield_connections", tagPrefix: "pafa:Chesterfield" },
  { id: "pafa:sofa_lawson_connections", tagPrefix: "pafa:Lawson" },
  { id: "pafa:sofa_mid_century_connections", tagPrefix: "pafa:MidCentury" },
];

const directionOffsets = {
  north: { right: { x: 1, y: 0, z: 0 }, left: { x: -1, y: 0, z: 0 } },
  south: { right: { x: -1, y: 0, z: 0 }, left: { x: 1, y: 0, z: 0 } },
  west: { right: { x: 0, y: 0, z: -1 }, left: { x: 0, y: 0, z: 1 } },
  east: { right: { x: 0, y: 0, z: 1 }, left: { x: 0, y: 0, z: -1 } },
};

world.beforeEvents.worldInitialize.subscribe(eventData => {
  sofaSystems.forEach(sofaSystem => {
    eventData.blockComponentRegistry.registerCustomComponent(sofaSystem.id, {
      onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState("minecraft:cardinal_direction");
        const OffsetPosition = directionOffsets[directionLook];
        if (OffsetPosition) {
          const rightOffset = block.offset(OffsetPosition.right);
          const leftOffset = block.offset(OffsetPosition.left);
          const tag = `${sofaSystem.tagPrefix}${directionLook}`;
          block.setPermutation(block.permutation.withState(`${sofaSystem.id}_left`, leftOffset.hasTag(tag)));
          block.setPermutation(block.permutation.withState(`${sofaSystem.id}_right`, rightOffset.hasTag(tag)));
        }
      },
    });
  });
});
*/


var PafaOutdoorPatioSystem = class {
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:ChesterfieldNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:ChesterfieldSouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:ChesterfieldWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:ChesterfieldEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const Pafaoutdoor_patio_flower_sofaRight = block.offset(OffsetPosition.right);
            const Pafaoutdoor_patio_flower_sofaLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa:outdoor_patio_flower_sofa_right",
                    Pafaoutdoor_patio_flower_sofaRight.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa:outdoor_patio_flower_sofa_left",
                    Pafaoutdoor_patio_flower_sofaLeft.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}

var PafaOutdoorPatioSystem2 = class {
    onTick(event) {
        const { block } = event;
        const directionLook = block.permutation.getState('minecraft:cardinal_direction');
        const directionOffsetsPosition = {
            north: {
                right: { x: 1, y: 0, z: 0 },
                left: { x: -1, y: 0, z: 0 },
                tag: "pafa:ChesterfieldNorth"
            },
            south: {
                right: { x: -1, y: 0, z: 0 },
                left: { x: 1, y: 0, z: 0 },
                tag: "pafa:ChesterfieldSouth"
            },
            west: {
                right: { x: 0, y: 0, z: -1 },
                left: { x: 0, y: 0, z: 1 },
                tag: "pafa:ChesterfieldWest"
            },
            east: {
                right: { x: 0, y: 0, z: 1 },
                left: { x: 0, y: 0, z: -1 },
                tag: "pafa:ChesterfieldEast"
            }
        };
        const OffsetPosition = directionOffsetsPosition[directionLook];
        if (OffsetPosition) {
            const Pafaoutdoor_patio_flower_sofaRight = block.offset(OffsetPosition.right);
            const Pafaoutdoor_patio_flower_sofaLeft = block.offset(OffsetPosition.left);
            block.setPermutation(
                block.permutation.withState(
                    "pafa_outdoor:outdoor_patio_flower_sofa_right",
                    Pafaoutdoor_patio_flower_sofaRight.hasTag(OffsetPosition.tag)
                )
            )
            block.setPermutation(
                block.permutation.withState(
                    "pafa_outdoor:outdoor_patio_flower_sofa_left",
                    Pafaoutdoor_patio_flower_sofaLeft.hasTag(OffsetPosition.tag)
                )
            )
        }
    };
}