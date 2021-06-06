const Discord = require("discord.js");
const {
	Client,
        Collection,
	handler
} = require('discord.js');
const fs = require('fs');
const client = new Client;
const { prefix, token, OwnerId, BotId } = require('./config.json');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands');
['command'].forEach(handler => {
	 require(`./handler/${handler}`)(client);
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(prefix+"help for command !");
  client.user.setActivity(prefix+"help | By I See You#7043",{
			  type: "STREAMING",
			  url: "https://www.twitch.tv/i_see_you_z"
  })
});

client.on('message', message => { //this event is fired, whenever the bot sees a new message
   if (message.mentions.has(client.user.id)) {
        message.channel.send(new Discord.MessageEmbed()
			    .setDescription(`**use ${prefix}help !**`)
     )
   }
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLocaleLowerCase();
    if (cmd.length == 0) return;
    const command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args)
 
});


client.on('message', message => {
	
	if (message.content === prefix) {
		message.channel.send("hi, my prefix is "+prefix+", use "+prefix+"help , for see my commands !")
	}
});




// le client ira chercher le token dans config.json
client.login(token)
