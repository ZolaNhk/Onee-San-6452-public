const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "hentaiass",
 description: "drop hentai ass pictures",
 run: async (client, message, args) => {
	const image = await nsfw.hentaiass();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Hentai ass Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}