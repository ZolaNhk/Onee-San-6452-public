const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "thigh",
 description: "drop thigh pictures",
 run: async (client, message, args) => {
	const image = await nsfw.thigh();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`thigh Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}