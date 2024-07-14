# list-vc-users-bot
Simple discord bot that fetches a list of discord "display names" or server nicknames in the voice channel of the user that invoked the slashcommand. 

Writen using the discord.js library

## Setup
First clone the repository and install the necessary modules
```
git clone https://github.com/ambroshia/list-vc-users-bot && cd list-vc-users-bot
npm install discord.js dotenv
```
Go to the Discord Developer Portal https://discord.com/developers/applications and create an application and an accompanying discord bot.

Then, copy the example .env file
```
cp .env.example .env
```
Using an editor of your choice, edit the variables in `.env` to their desired values.

Add the bot to your discord server, run `node deploy-commands.js` to register the slashcommands in your server, then do `node index.js` to run the bot.

## Usage
`/getvcnicks` list the server nickname of all users currently in your voice channel

`/getvcusers` list the "display name" of all users currently in your voice channel

## Copyright 
Copyright (C) 2024 ambroshia

![](https://www.gnu.org/graphics/gplv3-with-text-136x68.png)

list-vc-users-bot is licenced under the GNU General Public Licence Version 3 or later, which is a free software licence. See the [licence file](LICENSE) for more info. 