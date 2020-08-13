const Discord = module.require("discord.js");

module.exports = {
    name: "google",
    description: "Search anything on google",
    run: async(client, message, args) => {
    const text1 = args.join(' ');
    const text2 = args.join('+');
    const google = `https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg`;
    if (!text) {
    return message.channel.send("Enter some to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor("Google", `https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg`)
    .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg`)
    .setDescription(`Searched for: \n${text1} \nResult: \n[Here's What I found](https://google.com/search/q?=${text2}`)
    .setThumbnail(google);
message.channel.send(embed);
}
}