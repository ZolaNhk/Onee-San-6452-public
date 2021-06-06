const db = require("quick.db");
const discord = require("discord.js");
const {OwnerId} = require("../../config.json")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  ownerOnly: true,
      run: async (client, message, args) => {
      	if (message.author.id === OwnerId) {


			    //ARGUMENT
			    if(!args.length) {
			      return message.channel.send("Please give status message")
			    } 
			  

			    db.set(`status`, args.join(" "))
			    client.user.setActivity(args.join(" ")); 
			    message.channel.send("Updated the bot status");
			    } else {
			    	  message.channel.send("**only the owner of this bot can do it**");
			    }
			 }		   
		 };

