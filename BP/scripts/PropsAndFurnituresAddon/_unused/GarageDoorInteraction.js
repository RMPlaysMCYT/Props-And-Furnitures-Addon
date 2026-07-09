/*import { CommandTarget } from "./HCFCustomComponents/CustomBlockComponents/interfaces";
export const HCFBlockComponents = [
    {
        componentID: "pafa:garage_fill_door_component",
        events: {
            onPlayerInteract: {
                queue_commands: {
                    simple: {
                        target: CommandTarget.Entity,
                        commands: [
                            "playsound block.door.open @p ~~~ 1 1",
                            "playanimation @e[type=pafa:garage_door,r=5] animation.pafa_garage_door.open b 1 f root",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockX replace pafa:garage_doorblockX2",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockY replace pafa:garage_doorblockY2",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockX3 replace pafa:garage_doorblockX2",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockY3 replace pafa:garage_doorblockY2"
                        ]
                    }
                }
            }
        }
    },
    {
        componentID: "pafa:garage_fill_door_component2",
        events: {
            onPlayerInteract: {
                queue_commands: {
                    simple: {
                        target: CommandTarget.Entity,
                        commands: [
                            "playsound block.door.close @p ~~~ 1 1",
                            "playanimation @e[type=pafa:garage_door,r=5] animation.pafa_garage_door.close b 1 f root",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockX2 replace pafa:garage_doorblockX3",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockY2 replace pafa:garage_doorblockY3"
                        ]
                    }
                }
            }
        }
    }
];
*/