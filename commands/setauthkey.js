const db = require('quick.db')
const Discord = require('discord.js');

module.exports = {
    name: "setauthkey",
    description: "Sets The authkey",

    async run (client, message, args) {

    let authkey = args[0]

    if(!args[0]) return message.channel.send('Please Provide A Valid AuthKey');

    if(args[1]) return message.channel.send('The AuthKey Can\'t Have Two Spaces');

    await db.fetch(`token_${message.guild.id}`)
    await db.set(`token_${message.guild.id}`, args[0])

    message.channel.send(`Succesffully Set AuthKey To \`${authkey}\``)
    }

}