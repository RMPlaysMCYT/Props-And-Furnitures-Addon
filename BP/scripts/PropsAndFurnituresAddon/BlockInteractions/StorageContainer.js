import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((event)=>{
    event.blockComponentRegistry.registerCustomComponent("pafa:cabinet1", new PropsAndFurnituresAddonStorageSystem());
    event.blockComponentRegistry.registerCustomComponent("pafa:cabinet2", new PropsAndFurnituresAddonStorageSystem2());
})

function propsAndFurnituresAddonLocationes(block) {
    return {x: block.x + 0.5,y: block.y + 0.5,z: block.z + 0.5};
};

var PropsAndFurnituresAddonStorageSystem = class {
    onPlace(event) {event.dimension.spawnEntity("pafa:container", propsAndFurnituresAddonLocationes(event.block)); };
    onPlayerInteract(event){toggleBlockState(event, "pafa:cabinet_open", "block.barrel.close", "block.barrel.open");}
}

var PropsAndFurnituresAddonStorageSystem2 = class {
    onPlace(event) {event.dimension.spawnEntity("pafa:container", propsAndFurnituresAddonLocationes(event.block)); };
}