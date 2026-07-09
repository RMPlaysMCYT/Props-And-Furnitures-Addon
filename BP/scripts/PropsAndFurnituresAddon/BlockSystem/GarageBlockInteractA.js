import { world, BlockPermutation } from "@minecraft/server";
import { runCommandsAsync } from '../Libraries/run_commands';

/** @type {import("@minecraft/server").BlockCustomComponent} */
const PafaGarageDoorInteractA = {
  onPlayerInteract({ block, dimension }) {
    if (block.getPermutation().getProperty("pafa:garage_open") === false) {
      block.setPermutation(
        BlockPermutation.resolve(block.typeId, {
          "pafa:garage_open": true,
        })
      );
      dimension.runCommandAsync('playsound block.door.open @p ~~~ 1 1');
      dimension.runCommandAsync('playanimation @e[type=pafa:garage_door,r=5] animation.pafa_garage_door.open b 1 f root');
      dimension.runCommandAsync('fill ~5 ~5 ~5 ~-5 ~-1 ~-5 air replace pafa:garage_doorblockX2');
      dimension.runCommandAsync('fill ~5 ~5 ~5 ~-5 ~-1 ~-5 air replace pafa:garage_doorblockY2');
      dimension.runCommandAsync('fill ~5 ~5 ~5 ~-5 ~-1 ~-5 air replace pafa:garage_doorblockX2');
      dimension.runCommandAsync('fill ~5 ~5 ~5 ~-5 ~-1 ~-5 air replace pafa:garage_doorblockY2');
    } else {
      block.setPermutation(
        BlockPermutation.resolve(block.typeId, {
          "pafa:garage_open": false,
        })
      );
      dimension.runCommandAsync('playsound block.door.close @p ~~~ 1 1');
      dimension.runCommandAsync('playanimation @e[type=pafa:garage_door,r=5] animation.pafa_garage_door.close b 1 f root');
      dimension.runCommandAsync('fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockX2 replace pafa:garage_doorblockX3');
      dimension.runCommandAsync('fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockY2 replace pafa:garage_doorblockY3');
    }
  }
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
  blockComponentRegistry.registerCustomComponent(
    "pafa:garage_door_interact",
    PafaGarageDoorInteractA
  );
});