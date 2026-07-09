/*import { world, system } from '@minecraft/server';
import { HCFComponentManager } from "./HCFCustomComponents/manager";
import './ScriptUI/main1';

import './GarageDoorInteraction';

import './BlockInteractions/LightsInteraction';
import './BlockInteractions/ItemInteractStateA';
import './BlockInteractions/BlockPlacementStateB';
import './BlockInteractions/WindowShutterSystem';

import './BlockChairSys/SofaSystem';
import './BlockChairSys/SeatSystem';
import './BlockSystem/BlockPlacementStateA';
import './BlockSystem/GarageBlockInteractA';
import './BlockSystem/BlockPlacementStateB2';
import './BlockSystem/Glass_Interaction';

const pafaBookInit = "pafa:PropsAndFurnituresAddonBookInital";

system.runTimeout(() => {
    try {
        world.sendMessage('Props and Furnitures Addon has been loaded to your device')
        console.warn('Props and Furnitures Addon has been loaded to your device and its safe for non-experimental users')
    } catch {
        console.error('It seems the addon has a error join the discord server to learn more')
    }
});

world.afterEvents.playerSpawn.subscribe(event => {
    if(!event.initialSpawn) return
    const {player} = event;
    if (player.getDynamicProperty(pafaBookInit)) return;
    player.runCommand("give @s pafa:book 1 0");
    player.setDynamicProperty(pafaBookInit, true);
})

world.afterEvents.playerJoin.subscribe(event => {
    const {player} = event;
    if (player.getDynamicProperty(pafaBookInit)) return;
    player.runCommand("give @s pafa:book 1 0");
    player.setDynamicProperty(pafaBookInit, true);
})

world.beforeEvents.worldInitialize.subscribe((data) => {
    HCFComponentManager.loadAll(data);
});*/