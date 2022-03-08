const db = require('quick.db')
const fetch = require('node-fetch')
const Discord = require('discord.js');

module.exports = {
    name: "del",
    description: "Delete a key from the auth system",

    async run (client, message, args) {

    let key = args[0]

    let authkey = await db.get(`token_${message.guild.id}`)
    if(authkey === null) return message.channel.send(new Discord.MessageEmbed().setDescription(`The \`AuthKey\` **Has Not Been Set!**\n In Order To Use This Bot You Must Run The \`setauthkey\` Command First.`).setColor("RED").setTimestamp());


    if(!args[0]) return message.channel.send('Please Provide A Valid Key');

    try {
    await fetch(`https://developers.auth.gg/LICENSES/?type=delete&license=${key}&authorization=${authkey}`)
    .then(res => res.json())
    .then(json => message.channel.send(new Discord.MessageEmbed().setTitle('Key Successfully Deleted!').addField('Deleted By:', message.author).addField('Key Deleted:', `\`${args[0]}\``).setColor("PURPLE").setTimestamp()));
    }catch(e) {
        message.channel.send(`ERROR: ${error}`)
    }
    }
}