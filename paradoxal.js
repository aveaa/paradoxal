/* 
* ----------------------------------------------
* 
*
*
*
*
* Бот, созданный специально для сервера Paradoxal 
* Библиотеки | Discord.js | Request
* Ссылка на дискорд | https://discord.gg/9gAxxx
* Разрешается использовать на вашем сервере
*
*
*
*
* ----------------------------------------------
*/

// Библиотеки
const Discord = require('discord.js');
const request = require('request');

// Клиент
const client  = new Discord.Client();
var botstatus = "Bot"

// Конфиг
let p    = '\.';
let c    = "#a142f4";
let nsfw = "<#544133935089713167>"
  
// Глобальные эмодзи
const emojis = {
    yes:'548538686237704202',
    no:'548538689572175902'
    }

// Ивент при запуске бота 👤
client.on('ready', () => {
    console.log('//--------------------//');
    console.log(' ');
    console.log('Бот успешно запущен');
    console.log(' ');
    console.log('Информация о боте:');
    console.log('Авторизация: ' + client.user.tag);
    console.log('Статус: ' + botstatus);
    console.log(' ');
    console.log('Бот написан специально для сервера "Paradoxal"');
    console.log(' ');
    console.log('//--------------------//');
    function randomStatus() {
        let status = [`за Paradoxal`, `.help`, client.guilds.get('544082820621139968').memberCount + ` участников`, `идем к 200 участникам`];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 3});
 }; setInterval(randomStatus, 10000)
});

// Ивент при заходе человека на сервер ➕
client.on('guildMemberAdd',(member) => member.guild.channels.get('548599362867953758').send(`◉ ${member}`, 
       new Discord.RichEmbed()
   .setThumbnail(member.user.avatarURL)                                                                                         
   .setTitle("Приветствуем вас на нашем сервере!")
                .setDescription(`Приветствуем на Paradoxal. Ты стал ${member.guild.memberCount} участником нашего сервера!
Прочитай <#547759714574794762> и начинай общаться!`)
                .setFooter("Спасибо за то, что присоединились к нам!")
                .setColor(c)
              ).then( msg => {
    msg.react("🎉")
    } )
)

// Авторизация
client.login(process.env.TOKEN);

// Основной код:
    client.on('message', async message => {
        const args = message.content.slice(p.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
          
if (command == 'eval') && message.author.id == "341988428457705482" {
  // Эмбед .-.
  const noeval = new Discord.RichEmbed()
  
   let code = args.join(' ');
   try {
   let evaled = eval(code);
   if (!code) {
   return message.channel.send('Для выполнения команды eval необходим код');
   }
   if (typeof evaled !== 'string')
   evaled = require('util').inspect(evaled)
   const embed = new Discord.RichEmbed()
   .setColor(c)
   .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
   message.channel.send(`${client.emojis.get(emojis.yes)} Команда успешно выполнена`, embed)
   message.delete()
   message.author.send(`${client.emojis.get(emojis.yes)} На случай, если вы потеряли код.`)
   message.author.send(code)
   } catch (err) {
   const embed = new Discord.RichEmbed()
   .setColor(c)
   .setDescription(`📥 Input: \n \`\`\`${code}\`\`\`\n 📤 Output:\n  \`\`\`${(err)}\`\`\``)
   message.channel.send(`${client.emojis.get(emojis.no)} При выполнении команды обнаружена ошибка`, embed)
  }
  } else if(!message.author.id == "341988428457705482") {
    const embed = new Discord.RichEmbed()
    .setTitle("Ошибка")
    .setDescription(`${client.emojis.get(emojis.no)} У вас нет необходимых прав для выполнения команды.`)
    .setColor(c)
    message.channel.send(embed);
    }
      
if (command == 'help' || command == 'помощь') {
    const embed = new Discord.RichEmbed()
    .addField("Эмоции", "``.hug``, ``.slap``, ``.kiss``, ``.pat``, ``.poke``, ``.tickle``, ``.feed``")
    .addField("Другое", "``.avatar``")
    .addField("18+", "``.porngif``, ``.hentai``, ``.pussy``, ``.boobs``, ``.trap``, ``.anal``, ``.ero``")
    .setColor(c)
    .setThumbnail("https://img.icons8.com/nolan/96/000000/help.png")
    message.channel.send(embed);
    }
      
if (command == 'аватар' || command == 'avatar') {
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
if (command == 'обнять' || command == 'hug') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/hug')
   let userok = message.mentions.users.first();
   let description = `${message.author} обнял ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.обнять @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                   
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }

if (command == 'щекотать' || command == 'tickle') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/tickle')
   let userok = message.mentions.users.first();
   let description = `${message.author} пощекотал ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.щекотать @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
               
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }
                          
if (command == 'покормить' || command == 'feed') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/feed')
   let userok = message.mentions.users.first();
   let description = `${message.author} покормил ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.покормить @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                   
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }

if (command == 'тыкнуть' || command == 'poke') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/poke')
   let userok = message.mentions.users.first();
   let description = `${message.author} тыкнул в ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.тыкнуть @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }

       
if (command == 'погладить' || command == 'pat') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/pat')
   let userok = message.mentions.users.first();
   let description = `${message.author} погладил ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.погладить @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }
        
if (command == 'ударить' || command == 'slap') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/slap')
   let userok = message.mentions.users.first();
   let description = `${message.author} ударил ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.ударить @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }

if (command == 'поцеловать' || command == 'kiss') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/kiss')
   let userok = message.mentions.users.first();
   let description = `${message.author} обнял ${userok}`
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.поцеловать @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setDescription(description)
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete();
                   
        }

        
  
if (command == 'хентай' || command == 'hentai') {
   const embederr = new Discord.RichEmbed()
   .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
   .setColor(c);
   if(!message.channel.nsfw) {
   return message.channel.send(embederr).then(msg => msg.delete(5000))
   message.delete()
        }
                                    
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/hentai');
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete()
        }
        
if (command == 'эротика' || command == 'ero') {
   const embederr = new Discord.RichEmbed()
   .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
   .setColor(c);
   if(!message.channel.nsfw) {
   return message.channel.send(embederr).then(msg => msg.delete(5000))
   message.delete()
        }
                                    
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/ero');
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete()
        }
        
if (command == 'анал' || command == 'anal') {
   const embederr = new Discord.RichEmbed()
   .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
   .setColor(c);
   if(!message.channel.nsfw) {
   return message.channel.send(embederr).then(msg => msg.delete(5000))
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
        
if (command == 'трап' || command == 'trap') {
   const embederr = new Discord.RichEmbed()
   .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
   .setColor(c);
   if(!message.channel.nsfw) {
   return message.channel.send(embederr).then(msg => msg.delete(5000))
   message.delete()
        }
                                    
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/trap');
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete()
        }
        
if (command == 'грудь' || command == 'boobs') {
   const embederr = new Discord.RichEmbed()
   .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
   .setColor(c);
   if(!message.channel.nsfw) {
   return message.channel.send(embederr).then(msg => msg.delete(5000))
   message.delete()
        }
                                    
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/tits');
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete()
        }
        
if (command == 'пусси' || command == 'pussy') {
   const embederr = new Discord.RichEmbed()
   .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
   .setColor(c);
   if(!message.channel.nsfw) {
   return message.channel.send(embederr).then(msg => msg.delete(5000))
   message.delete()
        }
                                    
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/pussy');
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(embed);
   message.delete()
        }
        
if (command == 'порнгиф' || command == 'porngif') {
    const embederr = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(emojis.no)} У данного канала нету метки NSFW. Для использования команды перейдите в ` + nsfw)
    .setColor(c);
    if(message.channel.nsfw === false) {
    message.channel.send(embederr).then(msg => msg.delete(5000))
    message.delete()
    } else {
   request('https://nekobot.xyz/api/image?type=pgif', function (error, response, body) {
   let arr = JSON.parse(body); 
     
   const embed = new Discord.RichEmbed() 
  .setImage(arr["message"])
  .setColor(c)
  message.channel.send(embed) 
  message.delete()
})
    }
}
    });
