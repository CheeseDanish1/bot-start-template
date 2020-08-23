# Before you start
Make sure you have nodejs installed, you can check if you do by opening up the command terminal and typing `node -v` if it gives you an error, you can download it [here](https://nodejs.org/en/)

Also make sure you have git-bash installed so you can run the command `git clone` if you don't have it installed you can install it [here](https://git-scm.com/downloads)

# Instructions

1. Open up the command terminal 
2. cd to the location you want to put this folder
3. Run the command `git clone https://github.com/CheeseDanish1/bot-start-template.git`
4. Put your token and prefix in the config.json file
5. Run the command `npm init -y`
6. Run the command `npm i discord.js`

**Then finally, to start the bot you would run the command**
7. `node bot.js`



And there you have it, a start to a discord bot, complete with a command handler

# To use

Put commands in the commands folder, name the what you want the command to be. Start the command folder with the code
```js
module.exports.run = (client, message, args) => {
    //Code Here
}
```
There is already a basic ping command set up, so you can see what I mean


And for events, you would name the file the event you want to wait for, and start it with this code
```js
module.exports = (client, <Event Args>) {

}
```

Just to clarify the above, if you want a `guildMemberAdd` Event you would name the file `guildMemberAdd.js` and the code would look like this
```js
module.exports = (client, member) => {
    //Code here
}
```


I think that is it. If you have any problems, you can bring it up in the issues section