const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "hentai",
 description: "drop hentai pictures",
 run: async (client, message, args) => {
   if (message.channel.nsfw) {
	const image = await nsfw.hentai();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Hentai Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
   } else { 
	   message.channel.send("only in NSFW channel");
   }
  }
}
