   const Discord = require('discord.js');
    const client = new Discord.Client();
    let p = 'b!';
    let c = '#f40000';
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
          
        if (message.content.startsWith(`${p}avatar`)) {
            let userok = message.mentions.users.first();
            if (!userok)
                userok = message.author;    

            const embed = new Discord.RichEmbed()
                .setDescription(`Аватар пользователя ${userok}`)
                .setImage(`${userok.avatarURL}`)
                .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
                if (message.content.startsWith(`${p}hug`)) {
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/hug')
        let userok = message.mentions.users.first();
        if(!userok) 
           userok = message.author;
                    
        const embed = new Discord.RichEmbed()
            .setDescription(`${message.author} обнялся с ${userok}. ﾟωﾟﾉ`)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
        
                        if (message.content.startsWith(`${p}smug`)) {
        let page = await r.get('https://nekos.life/api/v2/img/smug')
                    
        const embed = new Discord.RichEmbed()
            .setDescription(`${message.author} посамолюбовался.`)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
        
                                if (message.content.startsWith(`${p}pat`)) {
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/pat')
        let userok = message.mentions.users.first();
        if(!userok) 
           userok = message.author;
                    
        const embed = new Discord.RichEmbed()
            .setDescription(message.author + " погладил " + userok + ".(っ´ω`c)")
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
        
                        if (message.content.startsWith(`${p}slap`)) {
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/slap')
        let userok = message.mentions.users.first();
        if(!userok) 
           userok = message.author;
                    
        const embed = new Discord.RichEmbed()
            .setDescription(`${message.author} ударил ${userok}. (ﾟΘﾟ)`)
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
        
        // 18+
                                if (message.content.startsWith(`${p}hentai`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У канала нету метки ``NSFW``")
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
            message.react("✅");
        }
        
                                        if (message.content.startsWith(`${p}ero`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У канала нету метки ``NSFW``")
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
            message.react("✅");
        }
        
                                        if (message.content.startsWith(`${p}anal`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У канала нету метки ``NSFW``")
                                    .setColor(c);
                        	if(!message.channel.nsfw) {
                                return message.channel.send(embederr);
                                message.react("❌")
                                }
                                    
        let r = require('snekfetch')
        let page = await r.get('https://nekos.life/api/v2/img/anal');
                    
        const embed = new Discord.RichEmbed()
            .setImage(`${page.body.url}`)
            .setColor(c);
            await message.channel.send(embed);
            message.react("✅");
        }
        
                                        if (message.content.startsWith(`${p}trap`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У канала нету метки ``NSFW``")
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
            message.react("✅");
        }
        
                                        if (message.content.startsWith(`${p}tits`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У канала нету метки ``NSFW``")
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
            message.react("✅");
        }
        
                                        if (message.content.startsWith(`${p}pussy`)) {
                                    const embederr = new Discord.RichEmbed()
                                    .setDescription("У канала нету метки ``NSFW``")
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
            message.react("✅");
        }
    });
