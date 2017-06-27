const Discord = require('Discord.js');
exports.run = (client, message, m) => {
  message.channel.send('Ping?').then(m => m.edit(`Roundtrip took: ${m.createdTimestamp - message.createdTimestamp}ms. Heartbeat: ${Math.round(client.ping)}ms.`))
  /*let api =  `${m.createdTimestamp - message.createdTimestamp}`
  let heartbeat = `${Math.round(client.ping)}`
  const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTimestamp()
    //.addField('API Ping', `${api}ms`)
    .addField('Ping', `${heartbeat}ms`);
    message.channel.send({ embed });*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
