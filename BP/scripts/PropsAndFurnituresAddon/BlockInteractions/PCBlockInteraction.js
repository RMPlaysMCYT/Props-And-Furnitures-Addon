import { world } from "@minecraft/server";

function playClickSound(block) {
  block.dimension.playSound("random.click", block.location);
}

world.beforeEvents.worldInitialize.subscribe(eventData => {
  eventData.blockComponentRegistry.registerCustomComponent("pafa:pc_interactiones", {
    onPlayerInteract(event) {
      const { block } = event;
      const permutation = block.permutation;
      const kasalukuyang_estado = permutation.getState ('pafa:pc_switch_pages') ?? 0;
      if (kasalukuyang_estado < 2) {
        block.setPermutation(
          permutation.withState(
            'pafa:pc_switch_pages', kasalukuyang_estado + 1
          )
        );
      } else if (
        kasalukuyang_estado === 2
      ) {
        block.setPermutation(
          permutation.withState(
            'pafa:pc_switch_pages', 0
          )
        )
      }
      playClickSound(block);
    }
  });
});

/*
const PC_Interactiones2 = {
  onPlayerInteract(event){
    const {block} = event;
    const permutationes = block.permutation;
    const kasalukuyang_estado = permutation.getState('pafa:pc_switch_pages2');
    if (kasalukuyang_estado < 5){
      block.setPermutation(
        permutationes.withState(
          'pafa:pc_switch_pages', kasalukuyang_estado + 1
        )
        );
    } else if (
      kasalukuyang_estado === 5
    ){
      block.setPermutation(
        permutationes.withState(
          'pafa:pc_switch_pages', 0
        )
      )
    }
    playClickSound(block);
  }
}
*/