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
  console.log(prefix+"help for command !");
  client.user.setActivity("Chill Bot | By I See You#0001");
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


const UserIdOwner = "698949245985882212"
client.on("message", msg => {
	if (msg.author.id === UserIdOwner) {
	 if (msg.content === "huhughue") {
		msg.channel.send("true")
	} else {
	     if (msg.content === ("gjihjiajh"))
	        msg.channel.send("false")
	}
    }
	
});
	

// le client ira chercher le token dans config.json
client.login(token)
