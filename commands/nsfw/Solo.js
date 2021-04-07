const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "solo",
 description: "drop Solo porn pictures",
 run: async (client, message, args) => {
	const image = await nsfw.solo();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Solo Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}