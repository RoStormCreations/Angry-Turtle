const ms = module.require("ms");

module.exports = {
  name: "hack",
  description: "Another Fun Command",
  run: async(client, message, args) => {
    if (!args[0]) {
    return message.channel.send("Woah.... Slow Down!! Who are we hacking..??")
    }
    const tohack = message.mentions.members.first()
    let msg = await message.channel.send(`Hacking ${tohack.displayName}....`);

    let time = '1s'
    setTimeout(function(){
    msg.edit(`Finding ${tohack.displayName}'s Email and Password.....`);
  }, ms(time));

    let time1 = '4s'
    setTimeout(function(){
    msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nPassword: ********`);
  }, ms(time1));

    let time2 = '6s'
    setTimeout(function(){
    msg.edit("Finding Other Accounts.....");
  }, ms(time2));

    let time3 = '8s'
    setTimeout(function(){
    msg.edit("Setting up Epic Games Account.....");
  }, ms(time3));

    let time4 = '10s'
    setTimeout(function(){
    msg.edit("Hacking Epic Games Account......");
  }, ms(time4));

    let time5 = '14s'
    setTimeout(function(){
    msg.edit("Hacked Epic Games Account!!");
  }, ms(time5));

    let time6 = '16s'
    setTimeout(function(){
    msg.edit("Collecting Info.....");
  }, ms(time6));

    let time7 = '20s'
    setTimeout(function(){
    msg.edit("Selling data to FBI....");
  }, ms(time7));

    let time8 = '22s'
    setTimeout(function(){ 
    msg.edit(`Finished Hacking ${tohack}`);
  }, ms(time8));

  }
}
