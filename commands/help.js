const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require('./../config.json')

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args) {

        let prefix = await db.get(`prefix_${message.guild.id}`);
        if(prefix === null) prefix = default_prefix;

        const embed = new Discord.MessageEmbed()
        .setTitle('Auth.gg Discord Bot | Help')
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Current Bot Prefix Is:", `\`${prefix}\``)
        .setColor("#00FFFF")
        .addField('`setup`', `How to setup the bot.`)
        .addField('`gen`', `Generate a key from the auth.gg panel. \nUsage: **${prefix}gen [days] [amount] [level] [length]  [format]**`)
        .addField('`del`', `Delete a key from the auth.gg panel. \nUsage: **${prefix}del [Key]**`)
        .addField('`resethwid`', `Reset a user hwid from the auth.gg panel. \nUsage: **${prefix}resethwid [Username]**`)
        .addField('`setauthkey`', `Sets The auth.gg API key. \nUsage: **${prefix}setauthkey [API key]**`)
        .addField('`setprefix`', `Change the bot prefix. \nUsage: **${prefix}setprefix [Prefix]**`)
        .addField('**Remind**', 'Make sure to set the authkey before use the bot or it will not work!')
        .setFooter('Auth.gg Discord Bot', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(embed)
        
    }
}

