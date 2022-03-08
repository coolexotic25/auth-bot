const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require('./../config.json')

module.exports = {
    name: "setup",
    description: "How to setup the bot.",

    async run (client, message, args) {

        let prefix = await db.get(`prefix_${message.guild.id}`);
        if(prefix === null) prefix = default_prefix;

        const embed = new Discord.MessageEmbed()
        .setTitle('Auth.gg Discord Bot | Setup')
        .setThumbnail(client.user.displayAvatarURL())
        .addField("Current Bot Prefix Is:", `\`${prefix}\``)
        .setColor("#00FFFF")
        .addField('`1 - Add API Admin`', `Place the order **setauthkey** To add your admin API.\nWithout having made this order, you will not be able to make the other orders.`)
        .addField('`2 - Where is my admin API`', `Go to **https://auth.gg/dashboard/**\nSelect the application you want to manage\nGo to Settings > Settings. Copy Authorization Key.`)
        .addField('`3 - Where is my admin API stored`', `Your admin api is stored in a local database. (json.sqlite)`)
        .setFooter('Auth.gg Discord Bot', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(embed)
        
    }
}

