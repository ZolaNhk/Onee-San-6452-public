const Discord = require("discord.js");

module.exports = {
       name: "ban",
       usage: "ban user.mention",
          run: async (client, message, prefix) => {
           
		 const embedTrue = new Discord.MessageEmbed()
			   		 .setDescription("This User has been banned")
	     const embedFalse = new Discord.MessageEmbed()
			   		 .setDescription("you don't have the permission for that (ban members)")
	     const embedSup = new Discord.MessageEmbed()
	     			 .setDescription("you can't ban this user")
	     const embedYou = new Discord.MessageEmbed()
	     			 .setDescription("you can't ban yourself")
	     var banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
		if(message.member.hasPermission("BAN_MEMBERS")) { 
			if (banMember.id === message.member.id) return message.channel.send(embedYou)
			if (banMember.banable) return message.channel.send(embedSup)
			if (message.mentions.members.first()) { 
				message.mentions.members.first().ban() 
					message.channel.send(embedTrue);
				}
				
		 }  else {
					message.channel.send(embedFalse)
		}
	
             
   }
};
