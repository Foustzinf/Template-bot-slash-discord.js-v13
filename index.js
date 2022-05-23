require('./server')
const { Client, Collection } = require("discord.js");

const client = new Client({ intents: 32767, partials: ['CHANNEL', 'MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER'] })

module.exports = client;


client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.js");


require("./handler")(client);

// client
//   .on("debug", console.log)
//   .on("warn", console.log)
// 	.on("erro",
client.login("OTcxODQxMDkyNzA0MTcwMDU0.GdUH5t.BiTRlkUF18-h2VnfumzqTkb0tn63GBt9wVWtVA");
