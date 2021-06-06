const Discord = require("discord.js");

module.exports = {
       name: "kick",
       usage: "kick user.mention",
          run: async (client, message, prefix) => {

             const embedTrue = new Discord.MessageEmbed()
             		.setColor("GREEN")
			   		 .setDescription("This User has been kicked")
	     const embedFalse = new Discord.MessageEmbed()
	     			.setColor("PURPLE")
			   		 .setDescription("you don't have the permission for that (kick members)")
	     const embedSup = new Discord.MessageEmbed()
	     		   .setColor("RED")
	     			 .setDescription("you can't kick this user")
	     const embedYou = new Discord.MessageEmbed()
	     			.setColor("RED")
	     			 .setDescription("you can't kick yourself")
	     var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
		if(message.member.hasPermission("KICK_MEMBERS")) { 
			if (kickMember.id === message.member.id) return message.channel.send(embedYou)
			if (!kickMember.kickable) return message.channel.send(embedSup)
			if (message.mentions.members.first()) { 
				message.mentions.members.first().kick() 
					message.channel.send(embedTrue);
				}
				
		 }  else {
					message.channel.send(embedFalse)
		}
   }
};
