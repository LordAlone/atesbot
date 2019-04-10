onst Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, args) => {
message.channel.sendMessage('Biraz Yardım Almak İstemişe Benziyorsun!  \n Eğlence komutları için **1** yazınız. \n Yetkili komutları için **2** yazınız. \n Müzik komutları için **3** yazınız. ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "1", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**:tada: Eğlence Komutları :tada:** \n Buraları ayarlayın...  \n Böylee..  \n Ya da şöyle :D`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri biraz eğlenmek için eğlence menüsünü açmış olmalı!`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('İşlem, hiçbir komut seçmediğiniz için iptal edildi.')
    });
})

.then(() => {
  message.channel.awaitMessages(response => response.content === "2", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**:tools: Yetkili Komutları :tools:** \n Buraları ayarlayın...`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri yetkili menüsünü açtı (interesting dimi)`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('İşlem, hiçbir komut seçmediğiniz için iptal edildi.')
    });
})

.then(() => {
  message.channel.awaitMessages(response => response.content === "3", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**:notes: Müzik Komutları :notes:** \n Buraları ayarlayın...`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] saatinde birileri müzik menüsünü istedi ^^`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('İşlem, hiçbir komut seçmediğiniz için iptal edildi.');
    });
});
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yardım menüsünü açarsınız.',
  usage: 'yardım'
};
