const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
  let createguildt = new Date(message.guild.createdTimestamp)
  let accjoint = new Date(message.member.joinedAt)
  let embed = new Discord.MessageEmbed()
    .setTitle("Информация о сервере")
    .setColor("#bb0000")
    .setAuthor("Запросил(а): "+message.author.username, message.author.displayAvatarURL({dynamic : true, size: 1024}))
    .addField("```Название сервера```", "``"+message.guild.name+"``", true)
    .addField("```Участников```","``"+`${message.guild.memberCount}`+"``", false)
    .addField("```Каналов```", "``📁"+message.guild.channels.cache.size+"``", true)
    .addField("```Владелец```", `${message.guild.owner.user}`, false)
    .addField("```Создан```", "``"+createguildt+"``")
    .addField("```Вы вступили```", "``"+accjoint+"``")
    .setThumbnail(message.guild.iconURL({dynamic : true}))
    .setTimestamp();
  message.channel.send(embed);
};

module.exports.help = {
  name: "server"
};
