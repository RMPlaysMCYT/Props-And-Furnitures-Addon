import { world, system } from '@minecraft/server';
/*
import { HCFComponentManager } from "./HCFCustomComponents/manager";
*/
import { pafagetOrientationRotation, PafaPlayerTo90DegreeRotations } from "./Libraries/PlayerRotations";
import { wallBarrier } from "./Libraries/OtherStuff2";

import './Scripts/main1';
import './main2';


import './FenceSystem/Fencemain';

import './BlockInteractions/Cabinet1OpenInteract';
import './BlockInteractions/Cabinet2OpenInteract';
import './BlockInteractions/LightsInteraction';
import './BlockInteractions/ItemInteractStateA';
import './BlockInteractions/GarageBlockInteractionA';
import './BlockInteractions/PCBlockInteraction';
import './BlockInteractions/BathRoomBlockInteraction';
import './BlockInteractions/WindowShutterSystem';
import './BlockInteractions/StorageContainer';
import './BlockChairSys/SofaSystem';
import './BlockChairSys/SeatSystem';
// import './BlockChairSys/SeatSystem2';
import './BlockSystem/BlockPlacementStateB2';
import './BlockSystem/BlockPlacementStateB';
import './BlockSystem/Glass_Interaction';

const pafaBookInit = "pafa:PropsAndFurnituresAddonBookInital";

system.runTimeout(
    () => {
        try {
            world.sendMessage('Props and Furnitures Addon has been loaded to your device')
            console.warn('Props and Furnitures Addon has been loaded to your device and its safe for non-experimental users')
        } catch {
            console.error('It seems the addon has a error join the discord server to learn more')
        }
    }
);

world.afterEvents.playerSpawn.subscribe(
    event => {
        if (!event.initialSpawn) return
        const { player } = event;
        if (player.getDynamicProperty(pafaBookInit)) return;
        player.runCommand("give @s pafa:book 1 0");
        player.setDynamicProperty(pafaBookInit, true);
    }
)

/*
world.afterEvents.playerJoin.subscribe(event => {
    const {player} = event;
    if (player.getDynamicProperty(pafaBookInit)) return;
    player.runCommand("give @s pafa:book 1 0");
    player.setDynamicProperty(pafaBookInit, true);
})
*/

/*
world.beforeEvents.worldInitialize.subscribe((data) => {
    HCFComponentManager.loadAll(data);
});
*/

world.afterEvents.itemUseOn.subscribe((event) => {
    const { source, block } = event;
    const entityLocation = { ...block.location, y: block.location.y + 1 };
    const entity = source.dimension
        .getEntitiesAtBlockLocation(entityLocation)
        .find((entity) => wallBarrier.includes(entity.typeId));
    if (!entity) return;
    const { x, y, z } = entity.location;
    const ry = source.getRotation().y;
    const entityOrientation = PafaPlayerTo90DegreeRotations[pafagetOrientationRotation(ry)];

    entity.dimension.runCommandAsync(
        `summon ${[entity.typeId]} ${x} ${y} ${z} ${entityOrientation}`
    );
    entity.triggerEvent("hf_fur:despawn");
});