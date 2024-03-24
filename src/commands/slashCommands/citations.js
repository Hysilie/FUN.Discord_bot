const { SlashCommandBuilder  } = require('discord.js');
const meowCitations = [
    "Meoow !",
    "Meow meow meow… Meow me. Meow.",
    "Meow meow mooooow, meooooow meow meow meow meow",
    "Meow meow meow meow",
    "Meow meow meow meow meow, meoooow meow meow meow meow. Meow…",
    "Meooooooooow meow meow meow. Memeowow. Meeeeow. Meoow ? Meow.",
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('citation')
        .setDescription('Get the best citation from Sergueï !'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        })
        const newMessage = `\n  >>> ${meowCitations[Math.floor(Math.random() * meowCitations.length)]}`
        await interaction.editReply(newMessage)
    }
}