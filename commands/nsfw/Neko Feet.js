const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "nekofeet",
 description: "drop Neko feet pictures",
 run: async (client, message, args) => {
	const image = await nsfw.nekofeet();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Neko feet Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}