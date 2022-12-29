const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setTitle('La création n\'a aucune limite')
            .setDescription('[**CV**](https://romaindoyen.netlify.app/)')
            .setColor('RANDOM')
            // .addField('', '', true)
            // .addField('', '', true)
            .setAuthor('Design And Creation', 'https://cdn.discordapp.com/attachments/783379273813590056/886654154280427541/DAC__-_Copie_-_Copie.png', 'https://designandcreation.netlify.app/')
            .setImage('https://cdn.discordapp.com/attachments/783379273813590056/886654261692362803/fond_ecran.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/783379273813590056/886654154280427541/DAC__-_Copie_-_Copie.png')
            .setFooter('Mon bot perso', 'https://cdn.discordapp.com/attachments/783379273813590056/886654154280427541/DAC__-_Copie_-_Copie.png')
            .setTimestamp()
            .setURL('https://designandcreation.netlify.app/'))
    },
    name: 'embed'
}

