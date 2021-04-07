const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "nekopussy",
 description: "drop Neko pussy pictures",
 run: async (client, message, args) => {
	const image = await nsfw.nekopussy();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Neko pussy Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}