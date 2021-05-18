const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "gonewild",
 description: "drop gonewild pictures",
 run: async (client, message, args) => {
     if (message.channel.nsfw) {
	const image = await nsfw.gonewild();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Gonewild Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
     } else {
	     message.channel.send("only in NSFW channel");
     }
  }
}
