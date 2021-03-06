const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require('quick.db')
exports.run = async (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	  const duration = moment.duration(client.uptime).format(" D [day], H [hours], m [minutes], s [seconds]");
  
let aylartoplam = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "	June",
        "07": "	July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
  }
 let aylar = aylartoplam 

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Avethea ─░statistik`)
    .addField(
      "<a:krmz:733809296545939506> **Owner:**", "<@675593025468235806>,<@758786208892715010>",
	  false
    )
    .addField(
      "<a:krmz:733809296545939506> **member count:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **guilds size:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **channel size:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
  
    .addField("<a:krmz:733809296545939506> **Discord.js version:**", "v" + Discord.version, false)
    .addField("<a:krmz:733809296545939506> **Node.JS version:**", `${process.version}`, false)
    .addField("<a:krmz:733809296545939506> **Ping:**", client.ws.ping + " ms", false)
    .addField("<a:krmz:733809296545939506> **client online time**", duration)
    .addField("<a:krmz:733809296545939506> **bot created at**", s)
  return message.channel.send(msg);

} else {
	  const duration = moment.duration(client.uptime).format(" D [g├╝n], H [saat], m [dakika], s [saniye]");
  
let aylartoplam = {
        "01": "Ocak",
        "02": "┼×ubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "May─▒s",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "A─čustos",
        "09": "Eyl├╝l",
        "10": "Ekim",
        "11": "Kas─▒m",
        "12": "Aral─▒k"
  }
 let aylar = aylartoplam 

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Avethea ─░statistik`)
    .addField(
      "<a:krmz:733809296545939506> **Botun Ana Sahibi:**", "<@758786208892715010>",
	  false
    )
    .addField(
      "<a:krmz:733809296545939506> **Hizmet Verdi─či Kullan─▒c─▒ Say─▒s─▒:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **Hizmet Verdi─či Sunucu Say─▒s─▒:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **Hizmet Verdi─či Kanal Say─▒s─▒:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
  
    .addField("<a:krmz:733809296545939506> **Botun Discord.JS s├╝r├╝m:**", "v" + Discord.version, false)
    .addField("<a:krmz:733809296545939506> **Botun Node.JS s├╝r├╝m:**", `${process.version}`, false)
    .addField("<a:krmz:733809296545939506> **Ping:**", client.ws.ping + " ms", false)
    .addField("<a:krmz:733809296545939506> **Botun A├ž─▒k Oldu─ču S├╝re**", duration)
    .addField("<a:krmz:733809296545939506> **Botun Kurulu┼č Tarihi**", s)
  return message.channel.send(msg);

}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'i','statistics'],
    permLevel: 0
  };
   
  exports.help = {
    name: "istatistik",
    description: "Bot i",
    usage: "istatistik"
  };