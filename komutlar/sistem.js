const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506> **_${client.x.prefix}say_**
\`shows server information.\`                      
<a:krmz:733809296545939506> **_${client.x.prefix}capslock-blocking <open> / <close>_**
\`prevents capslock on the server.\`                  
<a:krmz:733809296545939506> **_${client.x.prefix}swearing-obstacle <open>/<close>_**
\`prevents swearing on your server.\`
<a:krmz:733809296545939506> **_${client.x.prefix}spam-protection <open>/<close>_**
\`blocks the spammer on the server.\`
<a:krmz:733809296545939506> **_${client.x.prefix}ehengel <open>/<close>_**
\`blocked everyone here on your server.\`
<a:krmz:733809296545939506> **_${client.x.prefix}otorol_**
\`shows autoroll command.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oto-rol-bot_**
\`shows autoroll command.\`
 <a:krmz:733809296545939506> **_${client.x.prefix}bansay_**
\`List of banned from the server.\`
<a:krmz:733809296545939506> **_${client.x.prefix}voting_**
\`votes on your server.\`
<a:krmz:733809296545939506> **_${client.x.prefix}votingchannel_**
\`sends the message to the channel where the voting will take place.\`
<a:krmz:733809296545939506> ***support to server.*** <a:krmz:733809296545939506> [***click***](https://discord.gg/wMTfpAC)
<a:krmz:733809296545939506> ***to add the bot.*** <a:krmz:733809296545939506> [***click***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=8)
<a:krmz:733809296545939506> ***dbl the vote.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);





message.channel.send(master)
}else{
	const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506> **_${client.x.prefix}say_**
\`sunucunun toplam ka?? ki??i oldu??unu g??sterir.\`   
<a:krmz:733809296545939506> **_${client.x.prefix}k??f??r k??s??t/kapat_**
\`k??f??r sistemini kapat??r.\`                   
<a:krmz:733809296545939506> **_${client.x.prefix}capslock-engelleme <a??>/<kapat>_**
\`sunucuda capslock engeller.\`                  
<a:krmz:733809296545939506> **_${client.x.prefix}spam-koruma <a??>/<kapat>_**
\`sunucuda spam yapan ki??iyi engeller.\`
<a:krmz:733809296545939506> **_${client.x.prefix}ehengel <a??>/<kapat>_**
\`sunucunuzda ever here engeller.\`
<a:krmz:733809296545939506> **_${client.x.prefix}otorol_**
\`otorol sistemini g??sterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oto-rol-bot_**
\`otorol sistemini g??sterir.\`
 <a:krmz:733809296545939506> **_${client.x.prefix}bansay_**
\`sunucudan banlananlar??n listesi.\`
<a:krmz:733809296545939506> **_${client.x.prefix}yetkililer_**
\`yetkilileri g??sterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oylama_**
\`oylama yapar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oylamakanal_**
\`oylaman??n yap??laca???? kanala mesaj?? g??nderir.\`
<a:krmz:733809296545939506> ***Destek Sunucumuza Gelmek ??sterseniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://discord.gg/wMTfpAC)
<a:krmz:733809296545939506> ***Botu Sunucunuza Eklemek ??sterseniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=8)
<a:krmz:733809296545939506> ***dblde botumuza oy vermek i??in.*** <a:krmz:733809296545939506> [***TIKLA***](https://top.gg/bot/768765003166646272)
`);



message.channel.send(master)	
	
}
}

exports.conf =
{
  aliases: ["sistem","system"]
}

exports.help =
{
  name: "sistem",
  description: "",
  usage: "sistem"
}