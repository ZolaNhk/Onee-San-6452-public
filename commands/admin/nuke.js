const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
	name: "nuke",
	usage: `${prefix}nuke`,
	description: "delete and clone channel",
	run: async(client, message ) => {
		if(message.member.hasPermission("MANAGE_CHANNELS")) {
			message.channel.clone();
			message.channel.delete();
			
		} else { 
			message.channel.send("you don't have the permission for that ! (manage channel)")}
	}

}