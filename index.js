const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
   token: process.env.TOKEN,
   prefix: "$getServerVar[prefix]",
   intents: "all"
})

bot.onMessage()
bot.onJoin()
bot.onLeave()
bot.onBanAdd() 
bot.onBanRemove()
bot.onInteractionCreate()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()
bot.onGuildLeave()
bot.onGuildJoin()
bot.onInviteCreate()
bot.onInviteDelete()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


bot.command({
  name: "ping", //command name
  code: `My Ping Is \`$ping ms\` ` //code to be executed when this command is called 
});


bot.variables({
  cash:"0",
  card:"0",
  code:"",
  prefix:"!",
  apple:"0",
  goat:"0",
  milk:"0",
  boat:"0",
  messagetotal:"0",
  messages:"0",
  cwelcome:"",
  mwelcome:"",
  twelcome:"",
  number:"0",
  fish:"0",
  welcome:"",
  wtitle:"",
  wmsg:"",
  wimg:"",
  leave:"",
  ltitle:"",
  lmsg:"",
  limg:"",
  channel:"",
  symbol: "<:cur:951155301854351461>",
  color:"303136",
  iphone1:"0",
  iphone2:"0",
  iphone3:"0",
  iphone4:"0",
  iphone5:"0",
  iphoneSE:"0",
  appleowner:"908436285037903872",
wood_pickaxe: "1",
iron_pickaxe: "0",
gold_pickaxe: "0",
diamond_pickaxe: "0",
durability: "10",
xpt: "0",
wood: "0",
01: "",
hunger_bar: "10",
02: "",
03: "",
xpon: "off",
campfire: "0",
con: "off",
lboost: "off",
guildids: "0",
guildis: "0",
xpboost: "0",
cboost: "0",
axe: "0",
trumpet: "0",
xpsymbol: "<a:xptoken:920039470185730049>",
leaf: "0",
wbottle: "0",
lon: "off",
lucky: "0",
magicwood: "0",
blaze: "0",
tin: "0",
 church: "0",
fog: "0",
lang: "eng",
luck: "off",
fortune: "0",
colored: "0",
lockdown: "off",
mountain: "0",
forest: "0",
stars: "0",
level_card:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8TueHUgVNroUgCgN5d35oo5Kg_LuFN6CHToIXL4pPSK-AL8FXgjEyBUcJlg97sMcrqg&usqp=CAU",
 levelling:"false",
  level_msg:"{user.mention}, you just levelled up to {level}!",
  level_channel:"",
  level_roles:"",
  level_order:"",
  exp:"0",
  level_msges:"",
  level_morder:"",
  req:"100",
  rank:"0",
speedlvl: "1",
speedreq: "3000",
speedxp: "0",
speed: "5075",
effilvl: "1",
effireq: "3000",
effixp: "0",
effi: "2",
luck: "0.5",
lucklvl: "1",
luckxp: "0",
luckreq: "3000",
experience:"2854",
experiencelvl: "1",
experiencereq: "3000",
experiencexp: "0",
elixer: "0",
amine: "false",
ms: "",
time: "",
speedmine: "",
experiencemine: "",
effimine: "",
luckmine: "",
total: "0",
lucktotal: "0",
speedtotal: "0",
experiencetotal: "0",
      pcoin: "0",
      x: "<a:erroxx:918963035975069706>",
      phunger: "100",
      paul: "https://cdn.discordapp.com/emojis/918918705050693642.png?size=128",
      brownie: "https://cdn.discordapp.com/emojis/918932976258129960.png?size=128",
      bella: "https://cdn.discordapp.com/emojis/918933580812537876.png?size=128",
      psleep: "100",
      food: "0",
      plove: "0",
      pname: "Willy",
      panda: "0",
      dog: "0",
      cat: "0",
    lang: "english",
    allowence: "0",
     clinetid: "", 
  userid: "", 
  prefixadd: "", 
  used: "0", 
  channel: "0", 
  logs: "917040072782667836",
    cbox: "5",
ubox: "0",
rbox: "0",
ebox: "0",
mbox: "0",
lbox: "0",
gems: "0",
gem: "<:gems:916711073296572416>",
    coring: "0",
uncoring: "0",
proposed: "0",
epring: "0",
myring: "0",
lering: "0",
faring: "0",
married: "false",
partner: "",
type: "0",
    alcap: "10",
    dacap: "100",
    wecap: "250",
    rifle: "0",
    rod: "0",
    laptop: "0",
    pickaxe: "0",
    common: "0",
    uncommon: "0",
    rare: "0",
    legendary: "0",
    silver: "0",
    crystal: "0",
    ruby: "0",
    uranium: "0",
    sulphur: "0",
    worth: "0",
    promocode: "0",
    job: "none",
     level_msg:" {user.name} levelled up to {level}!",
  level_channel:"",
  level_roles:"",
  level_order:"",
  exp:"0",
 money: "cash",     level_card:"https://wallpapercave.com/wp/wp2704825.jpg",
  level_msges:"",
  level_morder:"",
  req:"100",
  rank:"0",
  data: "0",
  data1: "0",
  data2: "0",
  data3: "0",
  data4: "0",
  data5: "0",
  data6: "0",
  data7: "0",
  data8: "0",
  data9: "0",
  data10: "0",
  data11: "0",
  data12: "0",
  data13: "0",
  data14: "0",
  data15: "0",
  data16: "0",
  data17: "0",
  data18: "0",
  data19: "0",
  data20: "0",
  data21: "0",
  data22: "0",
  data23: "0",
  data24: "0",
  data25: "0",
  data26: "0",
  data27: "0",
  data28: "0",
  data29: "0",
  data30: "0",
  data31: "0",
  data32: "0",
  username: "undefined",
  password: "123456789",
  user: "true",
  new: "true",
  embed_color: "2a2a2a",
 bankspace: "150000",
  afk:"false",
  afkr:"",
  animals:"0",
  travel:"",
  architect:"",
  factory:"",
  doctor:"",
  lawyer:"",
  engineer:"",
  musician:"",
  stockbreeder:"",
  fisherman:"",
  hunter:"",
  

})

bot.command({
  name:"$alwaysExecute",
  code:`$setUserVar[messages;$sum[$getUserVar[messages];1]]`
})
bot.joinCommand({
  channel:"$getServerVar[welcome]",
  code:`$title[1;$getServerVar[wtitle]]
$description[1;<@$authorID> 
> __$getServerVar[wmsg]__$image[1;$getServerVar[wimg]]
$thumbnail[1;$authorAvatar]
$description[2;**Joined at:** <t:$truncate[$divide[$dateStamp;1000]]:F>]
$color[2;303136]
$color[1;303136]`
})

bot.leaveCommand({
  channel:"$getServerVar[leave]",
  code:`$title[1;$getServerVar[ltitle]]
$description[1;<@$authorID> 
> __$getServerVar[lmsg]__$image[1;$getServerVar[limg]]
$thumbnail[1;$authorAvatar]
$description[2;**Left at:** <t:$truncate[$divide[$dateStamp;1000]]:F>]
$color[2;303136]
$color[1;303136]`
})



bot.command({
  name:"test",
  code:`$title[1;$getServerVar[wtitle]]
$description[1;<@$authorID> > __$getServerVar[wmsg]__$image[1;$getServerVar[wimg]]
$thumbnail[1;$authorAvatar]
$description[2;**Joined at:** <t:$truncate[$divide[$dateStamp;1000]]:R>]
$color[2;303136]
$color[1;303136]`
})

bot.command({
  name:"testl",
  code:`$title[1;$getServerVar[ltitle]]
$description[1;<@$authorID> > __$getServerVar[lmsg]__$image[1;$getServerVar[limg]]
$thumbnail[1;$authorAvatar]
$description[2;**Left at:** <t:$truncate[$divide[$dateStamp;1000]]:R>]
$color[2;303136]
$color[1;303136]`
})

bot.command({
name: "<@947847526722175017>",
code: `$title[1;Minister of Financy]
$description[1;**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[1;303136]
`,
nonPrefixed: true
})
 
bot.command({
name: "<@!947847526722175017>",
code: `$title[1;Minister of Financy]
$description[1;**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[1;303136]
`,
nonPrefixed: true
})

bot.status({
text: "I serve $allMembersCount people", 
type: "PLAYING", 
})




bot.command({
  name:"987654321",
  code:`$getBotInvite`
})




bot.command({
name: "lc",
aliases: ['lbcash','lb','cash'],
code: `$title[1;**This is cash leaderboard**]
$description[1;$globalUserLeaderboard[cash;asc;\`{top}\` - **{username}** - \`{value}\`<:cur:951155301854351461> ]]
$color[1;303136]`
})

bot.command({
name: "leaderboard",
aliases: ['lbcard','lb','card'],
code: `$title[1;**This is bank leaderboard**]
$description[1;$globalUserLeaderboard[card;asc;\`{top}\` - **{username}** - \`{value}\`<:cur:951155301854351461> ]]
$color[1;303136]`
})





bot.command({
name:"roleID",
code:`$roleID[$message]`
})

bot.command({ 
  name:"factory",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];300000]]
  $description[1;You collected your daily income as a ** <@&964180163900375114>** __300000<:cur:951155301854351461>__]
  $onlyForRoles[964180163900375114;{newEmbed: {description::x: You have to build an industry and take the role!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[24h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another industry owner income!**}{color:303136}}]`
})

bot.command({ 
  name:"architect",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];150000]]
  $description[1;You collected your daily income as a ** <@&964180051081981962>** __150000<:cur:951155301854351461>__]
  $onlyForRoles[964180051081981962;{newEmbed: {description::x: You have to study in the university and take the role!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[1h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another architect income!**}{color:303136}}]`
})


bot.command({ 
  name:"hunter",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];100000]]
$setGlobalUserVar[animals;$sum[$getGlobalUserVar[animals];$random[1;3]]]
  $description[1;You collected your income as a ** <@&964180148851195944>** __100000<:cur:951155301854351461>__ *and you caught* $random[1;3] 🦌**animals**]
  $onlyForRoles[964180148851195944;{newEmbed: {description::x: You have to take hunter role!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[10m;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another hunter income!**}{color:303136}}]`
})

bot.command({ 
  name:"engineer",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];30000]]
  $description[1;You collected your daily income as a ** <@&964180050264068226>** __30000<:cur:951155301854351461>__]
  $onlyForRoles[964180050264068226;{newEmbed: {description::x: You have to study in the university and take the role!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[4h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another engineer income!**}{color:303136}}]`
})

bot.command({ 
  name:"musician",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];3000]]
  $description[1;You collected your daily income as a ** <@&944265345420640276>** __3000<:cur:951155301854351461>__]
  $onlyForRoles[944265345420640276;{newEmbed: {description::x: You have to study in the university and take the role!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[2h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another musician income!**}{color:303136}}]`
})
bot.command({ 
  name:"stockbreeder",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];5000]]
  $description[1;You collected your income as a ** <@&942909967457996810>** __5000<:cur:951155301854351461>__]
  $onlyForRoles[942909967457996810;:x: You have to buy goats!]
  $color[1;303136]
  $globalCooldown[3h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another stockbreeder income!**}{color:303136}}]`
})
bot.command({ 
  name:"travel",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];50000]]
  $description[1;You collected your income as a ** <@&942909964022841425>** __50000<:cur:951155301854351461>__]
  $onlyForRoles[942909964022841425;{newEmbed: {description::x: You have to buy boats!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[30m;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another merchant income!**}{color:303136}}]`
})


bot.command({ 
  name:"fish",
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];3000]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$random[2;4]]]
  $description[1;You collected your income as a ** <@&964180157764075570>** __3000<:cur:951155301854351461>__ *and you caught* $random[2;4] 🐟**fish**]
  $onlyForRoles[964180157764075570;{newEmbed: {description::x: You have to take fisherman role!}{color:303136}}]
  $color[1;303136]
  $globalCooldown[10m;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another fisherman income!**}{color:303136}}]`
})

bot.command({
  name:"sell-fish",
  code:`$setGlobalUserVar[fish;0]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$getGlobalUserVar[fish];$random[1;500]]]
$description[1;__You sold $getGlobalUserVar[fish]🐟 for $multi[$getGlobalUserVar[fish];$random[1;500]]<:cur:951155301854351461>__]
$color[1;303136]`
})

bot.command({
  name:"sell-animals",
  code:`$setGlobalUserVar[animals;0]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$getGlobalUserVar[animals];$random[1;5000]]]
$description[1;__You sold $getGlobalUserVar[animals]🦌 for $multi[$getGlobalUserVar[animals];$random[1;5000]]<:cur:951155301854351461>__]
$color[1;303136]`
})

bot.command({
  name:"sell-milk",
  code:`$setGlobalUserVar[milk;0]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$getGlobalUserVar[milk];$random[1;100]]]
$description[1;__You sold $getGlobalUserVar[milk]🥛 for $multi[$getGlobalUserVar[milk];$random[1;100]]<:cur:951155301854351461>__]
$color[1;303136]`
})




bot.command({
  name:"lawyer",
  code:`
  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];30000]]
  $description[1;You collected your income as a **<@&942909965255999518>** __30000<:cur:951155301854351461>__]
  $onlyForRoles[942909965255999518;{newEmbed:{description::x: You have to study in the university}{color:303136}}]
  $color[1;303136]
  $globalCooldown[1h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another lawyer income!**}{color:303136}}]`
})
bot.command({
  name:"doctor",
  code:`
  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];8000]]
  $description[1;You collected your income as a **<@&942909963582447676>** __8000<:cur:951155301854351461>__]
  $onlyForRoles[942909963582447676;{newEmbed: {description::x: You have to study in the university}{color:303136}}]
  $color[1;303136]
  $globalCooldown[1h;{newEmbed: {description:**⛔ Please wait __%time%__ before you can claim another doctor income!**}{color:303136}}]`
})

bot.command({
  name:"milk",
  code:`
  $setGlobalUserVar[milk;$sum[$getGlobalUserVar[milk;$authorID];$random[1;5]]]
  $description[1;You collected $random[1;5]milk:milk: ]
  $onlyForRoles[942909967457996810;{newEmbed: {description::x: You have to buy animals}{color:303136}}]
  $color[1;BLUE]
  $globalCooldown[3h;{newEmbed: {description: **⛔ Please wait %time% before you can claim milk again!**}{color:303136}}]`
})

bot.command({
  name:"tax",
  code:`$description[1;
    __Total__
    $addField[1;Tax;
    **$divide[$getGlobalUserVar[card];100]**<:cur:951155301854351461>]
  ]
  $color[1;BLUE]`
})








const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

