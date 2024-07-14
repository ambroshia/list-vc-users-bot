const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getvcnicks') // has to be all lower case no space
		.setDescription('Gets a list of server nicknames of users in your current voice channel, one per line.'),
	async execute(interaction) {
		try {
			if (!interaction.isChatInputCommand()) { // handle non slashcommands
				await interaction.reply({ content: 'Unknown error, please try again', ephemeral: true});
			} else if (interaction.member.voice.channel == null) { // if the user is not in a voice channel i.e this value is NULL
				await interaction.reply({ content: 'You are currently not in a voice channel, or in a private voice channel.', ephemeral: true});
			} else { // fetch user details from the channel
				let usernames = interaction.member.voice.channel.members.map(u => u.user.username);  // get array of usernames in the case that nickname for certain user is null
				let nickArray = interaction.member.voice.channel.members.map(n => n.nickname); // get the server nickname for each user in vc
				console.log(usernames);
				console.log(nickArray);
				for (i = 0; i < nickArray.length; ++i) { // iterate thru nickname array, in the case its null (i.e. user didn't set a custom nickname in the server, replace the value with the username)
					if (!nickArray[i]) nickArray[i] = usernames[i];
				}
				await interaction.reply({ content: 'Here is a list of all user\'s nicknames currently in your voice channel:\n```\n' + nickArray.join('\n') + '\n```', ephemeral: true});
			}
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Unknown error', ephemeral: true });
		}
	},
};
