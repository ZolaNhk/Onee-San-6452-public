const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "boobs",
 description: "drop boobs pictures",
 run: async (client, message, args) => {
	const image = await nsfw.boobs();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Boobs Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}