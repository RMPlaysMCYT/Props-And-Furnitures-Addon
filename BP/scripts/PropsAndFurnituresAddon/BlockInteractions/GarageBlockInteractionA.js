import { world, system, BlockPermutation } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(
  (
    {
      blockComponentRegistry
    }
  ) => {
    blockComponentRegistry.registerCustomComponent(
      "pafa:garage_door_setup",
      GarageDoorInteractComponent
    );
  }
);

const GarageDoorInteractComponent = {
  onPlayerInteract(
    event
  ) {
    const {
      block,
      player
    } = event;
    const dimension = player.dimension;
    const blockOpenState = block.permutation.getState(
      "pafa:garage_open"
    );
    const sound = blockOpenState ? "close.wooden_trapdoor" : "open.wooden_trapdoor";
    const newOpenState = !blockOpenState;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x + 5} ${blockLocaction.y + 5} ${blockLocaction.z + 5} ${blockLocaction.x - 5} ${blockLocaction.y - 8} ${blockLocaction.z - 5}`;
    const blockLocationes2 = `${blockLocaction.x + 5} ${blockLocaction.y} ${blockLocaction.z + 5} ${blockLocaction.x - 5} ${blockLocaction.y - 1} ${blockLocaction.z - 5}`;
    const newPermutation = BlockPermutation.resolve(
      block.typeId, {
      ...block.permutation.getAllStates(),
      "pafa:garage_open": newOpenState
    }
    );
    block.setPermutation(newPermutation);
    dimension.playSound(
      sound,
      block.center(), {
      pitch: 0.9,
      volume: 0.9,
    }
    );
    if (blockOpenState) {
      /*world.sendMessage('The Door Is Close');*/
      block.dimension.runCommand('playsound block.door.close @p ~~~ 1 100');
      block.dimension.runCommand('playanimation @e[type=pafa:garage_door,c=1,r=5] animation.pafa_garage_door.open f 100 f');
      block.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_x replace pafa:garage_doorblock_x2`);
      block.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_z replace pafa:garage_doorblock_z2`);
    } else {
      /*world.sendMessage('The Door Is Open');*/
      block.dimension.runCommand('playsound block.door.open @p ~~~ 1 1');
      block.dimension.runCommand('playanimation @e[type=pafa:garage_door,c=1,r=5] animation.pafa_garage_door.close f 1');
      block.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_x2 replace pafa:garage_doorblock_x`);
      block.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_z2 replace pafa:garage_doorblock_z`);
    }
  }
};