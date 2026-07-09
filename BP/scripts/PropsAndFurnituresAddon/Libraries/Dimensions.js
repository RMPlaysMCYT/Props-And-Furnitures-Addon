const dimensions = [
  "minecraft:overworld",
  "minecraft:nether",
  "minecraft:the_end",
].map(d => world.getDimension(d));

export{
  dimensions
}