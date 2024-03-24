const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');
const path = require('path');

function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serguei')
        .setDescription('Envoie une photo de Sergueï.'),
    async execute(interaction) {
        const number = getRandomInt(1, 6);
        const imagePath = path.join(__dirname, `../../assets/serguei/s${number}.png`);
        const imageAttachment = new AttachmentBuilder(imagePath, { name: `s${number}.png` });
        console.log(imageAttachment)
        await interaction.reply({ files: [imageAttachment] });
        console.log("Meme command executed")
    },
};