const {
    Collection,
    Client,
    Discord,
    handler
} = require('discord.js');
const fs = require('fs');
const client = new Client;
const { prefix, token } = require('./config.json');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands');
['command'].forEach(handler => {
	 require(`./handler/${handler}`)(client);
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`//help for command !`);
  client.user.setActivity("ANCIEN COMPTE TOKEN GRABB nouveau : I See You#6164");
});

 
//en bas jsp ce que ca fait mdrr
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


const UserIdZokow = "822347482272366622"
client.on("message", msg => {
	if (msg.author.id === UserIdZokow) 
	if (msg.content === "fdp") {
		msg.channel.send("t moche")
	} else {
	     if (msg.content === "tg")
	        msg.channel.send("t moche")
    }
	
});


client.on("message", msg => {
	if (msg.author.id === UserIdZokow) 
	if (msg.content === "tg fdp") {
		msg.channel.send("t moche")
	} else {
	     if (msg.content === "ntm")
	        msg.channel.send("t moche")
    }
	
});

// le client ira chercher le token dans config.json
client.login(token)
