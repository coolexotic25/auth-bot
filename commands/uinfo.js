const Settings = require("./../config.json")
const req = require("request");
const discord = require("discord.js");
module.exports.run = (client, message, args)=>
{
    var ok = message.member.guild.roles.cache.find(lol => lol.id == Settings.supportrole)
    if(!ok) return message.reply(":x: | Setup Support Role");
    var perms = message.member.roles.cache.get(Settings.supportrole);
    if(!perms) return message.reply(":x: | You Don't Have Access To Use This Command");
    var username = args[0];
    if(!username) return message.reply(":x: | Mention Username");
    try{
    req({
        uri: `https://developers.auth.gg/USERS/?type=fetch&authorization=${authkey}&user=${user}`,
        method: "GET"
    },function(error, response, data)
    {
var lol = JSON.parse(data)["info"];
switch(lol)
{
case "No application found":
message.reply(`:x: | Invalid Auth Key!`)
break;
case "No user found":
message.reply(`:x: | Couldn't Find That User!`)
break;
default:
    var embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(Settings.thumbnail)
    .addField("Username", JSON.parse(data)["username"])
    .addField("Rank", JSON.parse(data)["rank"])
    .addField("Email", JSON.parse(data)["email"])
    .addField("Expiry", JSON.parse(data)["expiry"])
message.channel.send(embed)
break;
}
});
}
catch(e)
{
return message.reply(`:x: | ${e}`)
}
};

exports.help = {
    name: "uinfo",
    aliases: ['userinfo'],
    desc: "Fetch User Information"
  }