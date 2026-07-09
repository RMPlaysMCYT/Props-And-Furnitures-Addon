import { world } from "@minecraft/server";
import { CommandTarget } from "../interfaces";
export const HCFBlockComponents = [
    {
        componentID: "pafa:garage_fill_door_component",
        events: {
            onPlayerInteract: {
                condition: {
                    blockStates: [
                        {
                            stateID: "pafa:garage_open2",
                            value: true
                        }
                    ]
                },
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
                condition: {
                    blockStates: [
                        {
                            stateID: "pafa:garage_open2",
                            value: false
                        }
                    ]
                },
                queue_commands: {
                    simple: {
                        target: CommandTarget.Entity,
                        commands: [
                            "playsound block.door.close @p ~~~ 1 1",
                            "playanimation @e[type=pafa:garage_door,r=5] animation.pafa_garage_door.close b 1 f root",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockX2 [] replace pafa:garage_doorblockX3 []",
                            "fill ~5 ~5 ~5 ~-5 ~-1 ~-5 pafa:garage_doorblockY2 [] replace pafa:garage_doorblockY3 []"
                        ]
                    }
                }
            }
        }
    }/*,
    {
        componentID: "hcf:test_block_component",
        events: {
            onTick: {
                code: (data) => {
                    world.sendMessage(`<${data.block.typeId}> tick`);
                }
            },
            onRandomTick: {
                condition: {
                    blockStates: [
                        {
                            stateID: "hcf:state",
                            value: 0
                        }
                    ]
                },
                queue_commands: {
                    simple: {
                        commands: [
                            "say random tick"
                        ]
                    }
                },
                setBlockStates: [
                    {
                        stateID: "hcf:state",
                        value: 1
                    }
                ]
            },
            onEntityFallOn: {
                condition: {
                    hasFamily: "player"
                },
                queue_commands: {
                    simple: {
                        commands: [
                            "say fall on"
                        ]
                    }
                }
            },
            onStepOff: {
                condition: {
                    hasFamily: "player"
                },
                queue_commands: {
                    simple: {
                        target: CommandTarget.Entity,
                        commands: [
                            "say step off"
                        ]
                    }
                }
            },
            onStepOn: {
                condition: {
                    hasFamily: "player"
                },
                queue_commands: {
                    simple: {
                        commands: [
                            "say step on"
                        ]
                    }
                }
            },
            onPlayerInteract: {
                condition: {
                    holdingItem: "minecraft:apple"
                },
                queue_commands: {
                    simple: {
                        target: CommandTarget.Entity,
                        commands: [
                            "say interact with apple"
                        ]
                    }
                }
            },
            onPlayerDestroy: {
                condition: {
                    blockStates: [
                        {
                            stateID: "hcf:state1",
                            value: 1
                        }
                    ]
                },
                queue_commands: {
                    simple: {
                        target: CommandTarget.Entity,
                        commands: [
                            "say destroyed state1"
                        ]
                    }
                }
            },
            onPlace: {
                condition: {
                    lastBlockID: "minecraft:water"
                },
                queue_commands: {
                    simple: {
                        commands: [
                            "say placed in water source block"
                        ]
                    }
                }
            }
        }
    }*/
];
