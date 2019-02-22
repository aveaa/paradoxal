   const Discord = require('discord.js');
   const request = require('request');
    const client = new Discord.Client();
    let p = '!';
    let c = "#a142f4";
    let nsfw = "<#544133935089713167>"
    
    const emojis = {
    yes:'548538686237704202',
    no:'548538689572175902'
    }

    // 0 - Играть, 1 - Стримить, 2 - Слушать, 3 - Смотреть

    client.on('ready', () => {
        console.log('Бот успешно запущен!');
    });

    client.login(process.env.TOKEN);

    client.on('message', message => {
        const args = message.content.slice(p.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    });

    client.on('message', async message => {
          
        if (message.content.startsWith(`${p}аватар`)) {
            let userok = message.mentions.users.first();
            if (!userok)
                userok = message.author;    

            const embed = new Discord.RichEmbed()
                .setDescription(`${client.emojis.get(emojis.yes)} Аватар пользователя ${userok}`)
                .setImage(`${userok.avatarURL}`)
                .setColor(c);
            await message.channel.send(embed);
            message.delete();
        }
                if (message.content.startsWith(`${p}обнять`)) {
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/hug')
        let userok = message.mentions.users.first();
        let description = `${message.author} обнял ${userok}`
        if(!userok) {
           error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``!обнять @пользователь``"
           
           const err_embed = new Discord.RichEmbed()
           .setDescription(error_description)
           .setColor(c)
           await message.channel.send(err_description)
           }
                    
        const embed = new Discord.RichEmbed()
            .setDescription(description)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete();
                   
        }
        
                        if (message.content.startsWith(`${p}самолюбование`)) {
        let page = await r.get('https://nekos.life/api/v2/img/smug')
                    
        const embed = new Discord.RichEmbed()
            .setDescription(`${message.author} посамолюбовался.`)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
        
                                if (message.content.startsWith(`${p}погладить`)) {
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/pat')
        let userok = message.mentions.users.first();
        if(!userok) 
           userok = "себя";
                    
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " погладил " + userok + ".(っ´ω`c)")
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete();
        }
        
                        if (message.content.startsWith(`${p}ударить`)) {
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/slap')
        let userok = message.mentions.users.first();
        if(!userok) 
           userok = "себя";
                    
        const embed = new Discord.RichEmbed()
            .setDescription(`${message.author} ударил ${userok}. (ﾟΘﾟ)`)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete();
        }
                         if (message.content.startsWith(`${p}поцеловать`)) {
                let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/kiss')
        let userok = message.mentions.users.first();
        if(!userok) 
           userok = "себя";
                    
        const embed = new Discord.RichEmbed()
            .setDescription(`${message.author} поцеловал ${userok}. 💙`)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete();
        }
        
        // 18+
                                if (message.content.startsWith(`${p}хентай`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите в " + nsfw)
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.react("❌")
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/hentai');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete()
        }
        
                                        if (message.content.startsWith(`${p}эротика`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите в " + nsfw)
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.react("❌")
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/ero');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete()
        }
        
                                        if (message.content.startsWith(`${p}анал`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите в " + nsfw)
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.delete()
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/anal');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete()
        }
        
                                        if (message.content.startsWith(`${p}трап`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите в " + nsfw)
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.react("❌")
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/trap');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete()
        }
        
                                        if (message.content.startsWith(`${p}грудь`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите в " + nsfw)
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.react("❌")
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/tits');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete()
        }
        
                                        if (message.content.startsWith(`${p}пусси`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите в " + nsfw)
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.react("❌")
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/pussy');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.delete()
        }
        
       if (message.content.startsWith(`${p}порнгиф`)) {
    const embederr = new Discord.RichEmbed()
         .setDescription("У данного канала нету метки ``NSFW``. Для использования команды перейдите " + nsfw)
         .setColor(c);
    if(message.channel.nsfw === false) {
         message.channel.send(embederr);
         message.react("❌") 
    } else {
request('https://nekobot.xyz/api/image?type=pgif', function (error, response, body) {
let arr = JSON.parse(body); 
const embed = new Discord.RichEmbed() 
.setImage(arr["message"])
.setColor(c)
 message.channel.send(embed) 
   message.delete()
}) }
}
    });
