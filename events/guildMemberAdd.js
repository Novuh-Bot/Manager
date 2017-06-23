const Discord = require('discord.js');
module.exports = member => {
  let logchannel = message.guild.channels.find('name', 'logs');
  if (!logchannel) return message.reply('I cannot find a logs channel');

const embed = new Discord.RichEmbed()
  .setColor(0x7289DA)
  .setTimestamp()
  .addField(`${user.username}#${user.discriminator}`);
client.channels.get(logchannel.id).send({embed});
};
