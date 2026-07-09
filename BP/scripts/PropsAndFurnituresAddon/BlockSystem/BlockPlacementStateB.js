import { world } from "@minecraft/server";

const CrateStep = {
  onStepOn(event) {
    const { block } = event;
    const blockLocationes = block.location;
    const blockLocationes2 = `${blockLocationes.x} ${blockLocationes.y} ${blockLocationes.z}`;
    event.dimension.runCommand(`setblock ${blockLocationes2} air destroy`);
  }
};

world.beforeEvents.worldInitialize.subscribe(
  (
    {
      blockComponentRegistry
    }
  ) => {
    blockComponentRegistry.registerCustomComponent(
      "pafa:crate_step",
      CrateStep
    );
  }
);