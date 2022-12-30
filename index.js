const Discord = require("discord.js"), 
    Client = new Discord.Client({
        fetchAllMembers: true
    }),
    conf_token = require('./conf'),
    config = require('./config.json'),
    fs = require('fs')

Client.login(conf_token.jwtSecret)
Client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return 
        const command = require(`./commands/${file}`)
        Client.commands.set(command.name, command)
    })
})

Client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = Client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, Client)
})

Client.on("guildMemberAdd", member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member}`, new Discord.MessageEmbed()
        .setDescription(`${member} a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
        .setColor('#00ff00'))
    member.roles.add(config.greeting.role)
})

Client.on("guildMemberRemove", member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member.user.tag} a quitté le serveur... 😢`)
        .setColor('#ff0000'))
})





