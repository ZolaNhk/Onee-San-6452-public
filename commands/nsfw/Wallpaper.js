const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "wallpaper",
 description: "drop Wallpaper porn/hentai pictures",
 run: async (client, message, args) => {
	const image = await nsfw.wallpaper();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`wallpaper Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}