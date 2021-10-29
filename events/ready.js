const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix

module.exports = client => {
  console.log(
    `[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`
  )
  console.log(
    `[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  )
  client.user.setStatus('online')
  var oyun = [
`${ayarlar.prefix}lang en/tr / ${ayarlar.prefix}dil tr/en`,
`a!yardım / a!davet`,
]
//PLAYING Oynuyor //WATCHING İzliyor
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0)
    client.user.setActivity(oyun[random], {type: 'PLAYING'})
  }, 2 * 2500)
}