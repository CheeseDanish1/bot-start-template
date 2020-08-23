const discord = require('discord.js');
const client = new discord.Client({ partials: ['REACTION', 'MESSAGE']});
const registry = require('./config/registry')(client);