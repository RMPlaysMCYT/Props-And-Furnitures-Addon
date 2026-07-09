//// Code Credit to Monorugu
//// Code Credit to Monorugu
//// Code Credit to Monorugu

import { world } from "@minecraft/server";

function playClickSound(block) {
  block.dimension.playSound("random.click", block.location);
}

world.beforeEvents.worldInitialize.subscribe(eventData => {
  eventData.blockComponentRegistry.registerCustomComponent("pafa:sink_interactive", {
    onPlayerInteract(event) {
      const { block } = event;
      const permutation = block.permutation;
      const kasalukuyang_estado = permutation.getState ('pafa:open_sink') ?? 0;
      if (kasalukuyang_estado < 1) {
        block.setPermutation(
          permutation.withState(
            'pafa:open_sink', kasalukuyang_estado + 1
          )
        );
      } else if (
        kasalukuyang_estado === 1
      ) {
        block.setPermutation(
          permutation.withState(
            'pafa:open_sink', 0
          )
        )
      }
      playClickSound(block);
    }
  });
});