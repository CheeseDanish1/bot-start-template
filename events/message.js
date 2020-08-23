module.exports = (client, message) => {

    //Gets the prefix with object destructuring 
    const  { prefix } = require('../config/config.json')

    //Leave's if you are in a DM or if a bot sends a message
    if (message.guild === null || message.author.bot) return;
    
    //Return's if the message does not start with the set prefix
    if (!message.content.startsWith(prefix)) return;

    //Sets some standard var's
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    // Parse Commands
    cmd ? cmd.run(client, message, args) : message.channel.send("Command doesn't exist.");

}