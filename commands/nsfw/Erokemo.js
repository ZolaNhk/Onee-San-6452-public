const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "erokemo",
 description: "drop erokemo pictures",
 run: async (client, message, args) => {
	const image = await nsfw.erokemo();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`erokemo Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}