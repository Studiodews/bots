
const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Whoo ho, I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login('NijKYX1xVFtfZ7J2zLyCW7jgQaBCTZsD');
//BOT_TOKEN is the Client Secret
