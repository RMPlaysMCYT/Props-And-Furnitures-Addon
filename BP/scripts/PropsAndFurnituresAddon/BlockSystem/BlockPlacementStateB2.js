////If you try to use the code it's okay, but please but my name on your addon too "RMPlaysMC YT" so that it's a good idea
////If you try to use the code it's okay, but please but my name on your addon too "RMPlaysMC YT" so that it's a good idea
////If you try to use the code it's okay, but please but my name on your addon too "RMPlaysMC YT" so that it's a good idea

import { world, system } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(
  (
    { blockComponentRegistry }
  ) => {
    /*blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorX0Inital",
      GargeDoorXInit
    );*/
    blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorY4Component",
      GarageDoorY4Component
    );
    blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorY2Component",
      GarageDoorY2Component
    );
    blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorY1Component",
      GarageDoorY1Component
    );
    blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorX4Component",
      GarageDoorX4Component
    );
    blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorX1Component",
      GarageDoorX1Component
    );
    blockComponentRegistry.registerCustomComponent(
      "pafa:garagedoorX2Component",
      GarageDoorX2Component
    );
  }
);

/*const GargeDoorXInit = {
  onPlace(event){
    const {
      block
    } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y - 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y - 8} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoory1');
    event.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_z replace pafa_garagedoor_init []`);
  }
};*/

/** @type {import("@minecraft/server").BlockCustomComponent} */
const GarageDoorY1Component = {
  onPlace(event) {
    const { dimension, block } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y - 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y - 8} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoory1');*/
    event.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_z replace air`);
  }
};
const GarageDoorY2Component = {
  onPlace(event) {
    const { dimension, block } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y - 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y - 8} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoory2');*/
    event.dimension.runCommand(`fill ${blockLocationes} air replace pafa:garage_doorblock_z2`);
  }
};
const GarageDoorY4Component = {
  onPlace(event) {
    const { dimension, block } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y + 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y + 1} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoory4');*/
    event.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_z2 replace pafa:garage_doorblock_z`);
  }
};
const GarageDoorX1Component = {
  onPlace(event) {
    const { dimension, block } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y - 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y - 8} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoorx1');*/
    event.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_x replace air`);
  }
};
const GarageDoorX2Component = {
  onPlace(event) {
    const { dimension, block } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y - 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y - 8} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoorx2');*/
    event.dimension.runCommand(`fill ${blockLocationes} air replace pafa:garage_doorblock_x2`);
  }
};
const GarageDoorX4Component = {
  onPlace(event) {
    const { dimension, block } = event;
    const blockLocaction = block.location;
    const blockLocationes = `${blockLocaction.x} ${blockLocaction.y + 1} ${blockLocaction.z} ${blockLocaction.x} ${blockLocaction.y + 1} ${blockLocaction.z}`;
    /*event.dimension.runCommand('function garage_doors/garagedoorx4');*/
    event.dimension.runCommand(`fill ${blockLocationes} pafa:garage_doorblock_x2 replace pafa:garage_doorblock_x`);
  }
};



////If it's up to you if you want to learn it, I'm crazy asking some help just to know some codes about using fill command but anyway I did it 😭😭😭😭
////If it's up to you if you want to learn it, I'm crazy asking some help just to know some codes about using fill command but anyway I did it 😭😭😭😭
////If it's up to you if you want to learn it, I'm crazy asking some help just to know some codes about using fill command but anyway I did it 😭😭😭😭