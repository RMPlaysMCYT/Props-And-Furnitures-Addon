import { world } from "@minecraft/server";
import { pafagetOrientationRotation, PafaPlayerTo90DegreeRotations } from "./Libraries/PlayerRotations";

world.afterEvents.itemUseOn.subscribe(event => {
    const { source, block } = event;
    const entityLocation = { ...block.location, y: block.location.y + 1 };
    const entity = source.dimension.getEntitiesAtBlockLocation(entityLocation).find(entity => entity.typeId == "pafa:garage_door");
    if (!entity) return;
    const { x, y, z } = entity.location;
    const ry = source.getRotation().y
    const entityOrientation = PafaPlayerTo90DegreeRotations[pafagetOrientationRotation(ry)];

    entity.dimension.runCommandAsync(`summon pafa:garage_door ${x} ${y} ${z} ${entityOrientation}`);
    /*entity.triggerEvent("pafa:");*/
});