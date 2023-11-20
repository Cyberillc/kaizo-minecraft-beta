player.onDied(function () {
    player.say("You dIeD n0oB!")
})
player.onTravelled(WALK, function () {
    player.teleport(randpos(
    pos(0, 0, 0),
    pos(100000, 256, 100000)
    ))
})
loops.forever(function () {
    gameplay.setWeather(THUNDER)
})
loops.forever(function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
blocks.print(
"Kaizo Minecraft Beta By Cyberillc",
BEDROCK,
pos(0, 256, 0),
NORTH
)
player.say("Ha Ha Ha Ha Ha You Will Never Get Out Of Here!")
player.teleport(pos(0, 256, 0))
mobs.spawnParticle(VILLAGER_ANGRY, pos(0, 256, 0))
player.say("Good Luck!")
mobs.give(
mobs.target(LOCAL_PLAYER),
WATER,
1
)
gameplay.setDifficulty(HARD)
mobs.applyEffect(SLOWNESS, mobs.target(NEAREST_PLAYER), 999999, 2)
player.execute(
"/give @s minecraft.iron_sword"
)
