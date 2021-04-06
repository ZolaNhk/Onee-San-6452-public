const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "hentai",
 description: "drop hentai pictures",
 run: async (client, message, args) => {
	const image = await nsfw.ass();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`...`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}
