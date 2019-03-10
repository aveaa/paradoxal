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
        const args = message.content.slice().trim().split(/ +/g);
        const command = args.shift().toLowerCase();
          
if (command == `${p}eval` && message.author.id === "341988428457705482") {
  // Эмбед .-.
  const noeval = new Discord.RichEmbed()
  .setDescription(`${client.emojis.get(emojis.no)} Для выполнения команды необходимо указать код`)
  .setColor(c)
  
   let code = args.join(' ');
   try {
   let evaled = eval(code);
   if (!code) {
   return message.channel.send(noeval).then(msg => msg.delete(5000));
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
  } 
      
if (command == `${p}help` || command == `${p}помощь`) {
    const embed = new Discord.RichEmbed()
    .addField("Эмоции", "``.hug``, ``.slap``, ``.kiss``, ``.pat``, ``.poke``, ``.tickle``, ``.feed``")
    .addField("Другое", "``.avatar``")
    .addField("18+", "``.porngif``, ``.hentai``, ``.pussy``, ``.boobs``, ``.trap``, ``.anal``, ``.ero``")
    .setColor(c)
    .setThumbnail("https://img.icons8.com/nolan/96/000000/help.png")
    message.channel.send(embed);
    }
      
if (command == `${p}аватар` || command == `${p}avatar`) {
   let userok = message.mentions.users.first();
   if (!userok)
   userok = message.author;    

   const embed = new Discord.RichEmbed()
   .setImage(`${userok.avatarURL}`)
   .setColor(c);
   await message.channel.send(`Аватар пользователя ${userok}`, embed);
   message.delete();
        }
if (command == 'обнять' || command == 'hug') {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/hug')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.обнять @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                   
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} обнял ${userok} ♡`, embed);
   message.delete();
                   
        }

if (command == `${p}щекотать` || command == `${p}tickle`) {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/tickle')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.щекотать @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
               
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} пощекотал ${userok} 😂`, embed);
   message.delete();
                   
        }
                          
if (command == `${p}покормить` || command == `${p}feed`) {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/feed')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.покормить @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                   
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} покормил ${userok} 🍔`, embed);
   message.delete();
                   
        }

if (command == `${p}тыкнуть` || command == `${p}poke`) {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/poke')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.тыкнуть @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} тыкнул в ${userok}`, embed);
   message.delete();
                   
        }

       
if (command == `${p}погладить` || command == `${p}pat`) {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/pat')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.погладить @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} погладил ${userok}`, embed);
   message.delete();
                   
        }
        
if (command == `${p}ударить` || command == `${p}slap`) {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/slap')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.ударить @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} ненавистно ударил ${userok}`, embed);
   message.delete();
                   
        }

if (command == `${p}поцеловать` || command == `${p}kiss`) {
   let r = require('snekfetch')
   let page = await r.get('https://nekos.life/api/v2/img/kiss')
   let userok = message.mentions.users.first();
   if(!userok) {
   error_description = client.emojis.get(emojis.no) + "Вы не упомянули пользователя.\n\nИспользуйте:\n``.поцеловать @пользователь``"
           
   const err_embed = new Discord.RichEmbed()
   .setDescription(error_description)
   .setColor(c)
   return message.channel.send(err_embed).then(msg => msg.delete(5000))
   message.delete()
           }
                    
   const embed = new Discord.RichEmbed()
   .setImage(`${page.body.url}`)
   .setColor(c);
   await message.channel.send(`${message.author} страстно поцеловал ${userok} ♡`, embed);
   message.delete();
                   
        }

        
  
if (command == `${p}хентай` || command == `${p}hentai`) {
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
        
if (command == `${p}эротика` || command == `${p}ero`) {
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
        
if (command == `${p}анал` || command == `${p}anal`) {
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
        
if (command == `${p}трап` || command == `${p}trap`) {
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
        
if (command == `${p}грудь` || command == `${p}boobs`) {
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
        
if (command == `${p}пусси` || command == `${p}pussy`) {
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
        
if (command == `${p}порнгиф` || command == `${p}porngif`) {
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


