const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506> **_${client.x.prefix}registerer-role_**
\`Sets the registrar role.\`   
<a:krmz:733809296545939506> **_${client.x.prefix}register-kanal_**
\`set the channel to register.\`                   
<a:krmz:733809296545939506> **_${client.x.prefix}manrole_**
\`Sets the male role.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}girlrole_**
\`Sets the role of the girl.\`
<a:krmz:733809296545939506> **_${client.x.prefix}take-registerer-role_**
\`Takes the role of registrar from the official.\`
<a:krmz:733809296545939506> **_a!registerer-give_**
\`Gives the enroller role to your chosen one.\`
<<a:krmz:733809296545939506> **_${client.x.prefix}unregisterrole_**
\`sets an indifferent role.\`
<a:krmz:733809296545939506> **_${client.x.prefix}man @mention name age_**
\`give a man role.\`
<a:krmz:733809296545939506> **_${client.x.prefix}girl @mention name age_**
\`girl a man role.\`
<a:krmz:733809296545939506> **_${client.x.prefix}auto-name_**
\`auto determines the name of your server when someone enters.\`
<a:krmz:733809296545939506> **_${client.x.prefix}auto-tag_**
\`Auto tag who enters your server.\`
<a:krmz:733809296545939506> **_${client.x.prefix}auto-tag-channel_**
\`auto tag o channel.\`
<a:krmz:733809296545939506> **_${client.x.prefix}auto-tag-close_**
\`auto tag close.\`
<a:krmz:733809296545939506> **_${client.x.prefix}tag-role-system_**
\`show tag role system.\`
<a:krmz:733809296545939506> **_${client.x.prefix}banned-tag_**
\`Once you add your banned tag, they cannot enter the server.\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
<a:krmz:733809296545939506> ***support the server.*** <a:krmz:733809296545939506> [***click***](https://discord.gg/wMTfpAC)
<a:krmz:733809296545939506> ***add to server.*** <a:krmz:733809296545939506> [***click***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=136)

`);






message.channel.send(master)
}else{
	const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506> **_${client.x.prefix}kay??t????rol_**
\`Kay??t???? rol??n?? ayarlar.\`   
<a:krmz:733809296545939506> **_${client.x.prefix}kay??tkanal_**
\`kay??t yap??l??cak kanal?? belirleyiniz.\`                   
<a:krmz:733809296545939506> **_${client.x.prefix}erkekrol_**
\`Erkek rol??n?? ayarlar.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}k??zrol_**
\`K??z rol??n?? ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}kay??t????-al_**
\`Yetkiliden kay??t???? rol??n?? al??r.\`
<a:krmz:733809296545939506> **_${client.x.prefix}kay??t????-ver_**
\`kay??t???? rol??n?? se??ti??iniz ki??iye verir.\`
<<a:krmz:733809296545939506> **_${client.x.prefix}kay??ts??zrol_**
\`kay??ts??z rolunu ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}erkek @et??ket isim ya??_**
\`erkek r??l?? verir kaydeder.\`
<a:krmz:733809296545939506> **_${client.x.prefix}k??z @etiket isim ya??_**
\`k??z rol?? verir kaydeder.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oto-isim_**
\`sununucunuza birisi girdi??inde oto ismini belirler.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oto-tag_**
\`sunucunuza girene oto tag verir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oto-tag-kanal_**
\`oto tag kanal??n?? belirler.\`
<a:krmz:733809296545939506> **_${client.x.prefix}oto-tag-kapat_**
\`oto tag kapat??r.\`
<a:krmz:733809296545939506> **_${client.x.prefix}tag-rol-sistem_**
\`tag sisteminin detaylar??n?? g??sterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}yasakl??-tag_**
\`belirtti??iniz tagdaki ki??iler sunucuya giremez.\`
<a:krmz:733809296545939506> **_${client.x.prefix}kay??t-hg_**
\` belirtti??iniz kanala oto ho??geldin mesaj?? atar.\`
<a:krmz:733809296545939506> ***Dblde botumuza oy vermek i??in.*** <a:krmz:733809296545939506> [***TIKLA***](https://top.gg/bot/768765003166646272)
<a:krmz:733809296545939506> ***Destek Sunucumuza Gelmek ??sterseniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://discord.gg/wMTfpAC)
<a:krmz:733809296545939506> ***Botu Sunucunuza Eklemek ??sterseniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=136)

`);

message.channel.send(master)	
	
}
}

exports.conf =
{
  aliases: ["kay??t-sistemi","register-system"]
}

exports.help =
{
  name: "kay??t-sistemi",
  description: "",
  usage: "kay??t-sistemi"
}