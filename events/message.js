const  { prefix } = require('../config/config.json')

module.exports = (client, message) => {
    //Leave's if you are in a DM Or if the bot sends a message or if they have admin only mode set to true
    if (message.guild === null || message.author.bot) return;
    
    //Return's if the message does not start with the set prefix
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    // Parse Commands
    cmd ? cmd.run(client, message, args) : message.channel.send("Command doesn't exist.");

}