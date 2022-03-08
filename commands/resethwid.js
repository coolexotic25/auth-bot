const db = require('quick.db')
const fetch = require('node-fetch')
const Discord = require('discord.js');


module.exports = {
    name: "resethwid",
    description: "Reset a user hwid from the auth.gg panel",

    async run (client, message, args) {

    let authkey = await db.get(`token_${message.guild.id}`)
    if(authkey === null) return message.channel.send(new Discord.MessageEmbed().setDescription(`The \`AuthKey\` **Has Not Been Set!**\n In Order To Use This Bot You Must Run The \`setauthkey\` Command First.`).setColor("RED").setTimestamp());

    let user = args[0]

    if(!user) return message.channel.send('Please Provide A Valid Username');

    try {
    await fetch(`https://developers.auth.gg/HWID/?type=reset&authorization=${authkey}&user=${user}`)
    .then(res => res.json())
    .then(message.channel.send(new Discord.MessageEmbed().setTitle('Username HWID Successfully Resetted!').addField('Resetted By:', message.author).addField('User Resetted:', `\`${args[0]}\``).setColor("YELLOW").setTimestamp()));
    }catch(e) {
        message.channel.send(`ERROR: ${error}`)
    }
    }
}