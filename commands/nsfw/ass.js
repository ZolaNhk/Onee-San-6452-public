const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "ass",
 description: "drop hentai pictures",
 run: async (client, message, args) => {
    if (message.channel.nsfw) {
	const image = await nsfw.ass();
	const embed = new Discord.MessageEmbed()
   		.setTitle(`ass image`)
    		.setColor("RED")
    		.setImage(image);
			message.channel.send(embed);
    } else {
	    message.channel.send("only in NSFW channel");
    }
  }
}
