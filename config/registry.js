const { token } = require('./config.json')

const path = require('path');
const fs = require('fs').promises;

module.exports = function(client) {
    // Register Events, Commands.
    client.login(token);
    registerEvents(client)
    registerCommands(client)
}

function registerEvents(client) {
    fs.readdir(path.join(__dirname, '..', 'events'))
    .then(files => files.filter(file => file.endsWith(".js")))
    .then(files => files.forEach(file => {
        let eventName = file.substr(0, file.indexOf(".js"));
        let event = require(path.join(__dirname, '..', 'events', eventName));
        client.on(eventName, event.bind(null, client));
    }))
    .catch(err => console.log(err));
}

function registerCommands(client) { 
    client.commands = new Map();
    recurDir(client, 'commands')
    .then(() => console.log("Good"))
    .catch(err => console.log(err));
}

async function recurDir(client, curr) {
    let dirs = await fs.readdir(path.join(__dirname, '..', curr));
    if(dirs.length === 0) return; // If current dir is empty, return.
    else {
        await dirs.forEachAsync(client, dirs, curr, fs.lstat); // Iterate through each file in the current directory.
    }
}

Array.prototype.forEachAsync = async function(client, dirs, currDir, cb) {
    for (let i = 0; i < dirs.length; i++) {
        // Call fs.lstat.
        let curr = await cb(path.join(__dirname, '..', currDir, dirs[i]), i, dirs);
        // If the file is a directory, call readRecur.
        if(curr.isDirectory()) 
            await recurDir(client, path.join(currDir, dirs[i]))
        else
        {
            let cmdName = dirs[i].substring(0, dirs[i].indexOf(".js"));
            let cmdModule = require(path.join(__dirname, '..', currDir, dirs[i]));
            client.commands.set(cmdName.toLowerCase(), cmdModule);
        }
    }
};
