const Neko = require("neko-love");
const perm =  new Neko.Client();
const Discord = require("discord.js");

module.exports = {
	name: "neko",
    run: async (client, message) => {

    
	perm.neko().then((url) => {
        const embed = new Discord.MessageEmbed() 
                .setColor("BLACK")
                .setImage(url)
                .setTimestamp()
                .setFooter("discord.gg/PGww3kE4eN")
		            message.channel.send(embed); 

                });
		    }
		};
