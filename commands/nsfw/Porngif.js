const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "pgif",
 description: "drop Porn git ",
 run: async (client, message, args) => {
	const image = await nsfw.pgif();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Porno gif`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}