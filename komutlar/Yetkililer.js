const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
	 
  var str = ''
for(var i = 0; i < message.guild.members.cache.size; i++) {
   if(message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "dnd" && !message.guild.members.cache.array()[i].user.bot) {
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
    else if(message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "online" && !message.guild.members.cache.array()[i].user.bot){
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
    else if(message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "idle" && !message.guild.members.cache.array()[i].user.bot){
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
      else if (message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "offline" && !message.guild.members.cache.array()[i].user.bot){
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
}

  var embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`${message.guild.name} - Server Authorizer`)
  .setDescription(str.replace(message.guild.owner.user.tag, `:crown: **${message.guild.owner.user.tag}**`))
  .setThumbnail(message.guild.iconURL)
  .setFooter("This command listing have administrator permissions members.")
message.channel.send(embed)
	
}  else {
	 
  var str = ''
for(var i = 0; i < message.guild.members.cache.size; i++) {
   if(message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "dnd" && !message.guild.members.cache.array()[i].user.bot) {
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
    else if(message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "online" && !message.guild.members.cache.array()[i].user.bot){
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
    else if(message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "idle" && !message.guild.members.cache.array()[i].user.bot){
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
      else if (message.guild.members.cache.array()[i].hasPermission("ADMINISTRATOR") && message.guild.members.cache.array()[i].presence.status === "offline" && !message.guild.members.cache.array()[i].user.bot){
      str += `${message.guild.members.cache.array()[i].user.tag}\n`
    }
}

  var embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`${message.guild.name} - Sunucu Yetkilileri`)
  .setDescription(str.replace(message.guild.owner.user.tag, `:crown: **${message.guild.owner.user.tag}**`))
  .setThumbnail(message.guild.iconURL)
  .setFooter("NOT: Bu komut sunucudaki \"Mesajlar?? Y??net\" iznine sahip kullan??c??lar?? listeler.")
message.channel.send(embed)
	
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-listesi', 'sunucu-yetkilileri', 'moderatorler', 'modlar', 'moderat??rler', 'staffs','authorities'],
  permLevel: 0,
  
  kategori: "sunucu"
};

exports.help = {
  name: 'yetkililer',
  category: 'sunucu',
  description: 'Bulundu??unuz sunucudaki yetkilileri ??evrimi??i, ??evr??md??????/g??r??nmez, rahats??z etmeyin ve bo??ta modlar??nda olup olmad??klar??n?? g??stererek listeler. \n(Mesajlar?? Y??net yetkisine sahip kullan??c??lar?? yetkili olarak sayar.)',
  usage: 'yetkililer'
};