const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "nekopussy",
 description: "drop Neko pussy pictures",
 run: async (client, message, args) => {
    if (message.channel.nsfw) {
	const image = await nsfw.nekopussy();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Neko pussy Image`)
    		.setColor("RED")
    		.setImage(image);
			message.channel.send(embed);
    } else  {
	   message.channel.send("only in NSFW channel");
    }
  }
}
