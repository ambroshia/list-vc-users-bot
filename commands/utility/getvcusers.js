const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getvcusers') // has to be all lower case no space
		.setDescription('Gets a list of usernames of users in your current voice channel, one per line.'),
	async execute(interaction) {
		try {
			if (!interaction.isChatInputCommand()) { // handle non slashcommands
				await interaction.reply({ content: 'Unknown error, please try again', ephemeral: true});
			} else if (interaction.member.voice.channel == null) { // if the user is not in a voice channel i.e this value is NULL
				await interaction.reply({ content: 'You are currently not in a voice channel, or in a private voice channel.', ephemeral: true});
			} else { // fetch user details from the channel
				let usernames = interaction.member.voice.channel.members.map(u => u.user.username); // get array of usernames in the case that globalName for certain user is null
				let usrArray = interaction.member.voice.channel.members.map(u => u.user.globalName); // get the discord "display name" for each user in vc
				console.log(usernames);
				console.log(usrArray);
				for (i = 0; i < usrArray.length; ++i) { // iterate thru display name array, in the case its null (i.e. user didn't set a custom display name on discord, replace the value with the username)
					if (!usrArray[i]) usrArray[i] = usernames[i];
				}
				await interaction.reply({ content: 'Here is a list of all user\'s display names currently in your voice channel:\n```\n' + usrArray.join('\n') + '\n```', ephemeral: true});
			}
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Unknown error', ephemeral: true });
		}
	},
};
