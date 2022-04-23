module.exports = [{
name:"jobs", 
  if:"v4", 
code:`$title[1;Jobs Info]
$addSelectMenu[1;bruh;Salaries Info;1;1;no;Lawyer:30000 per hour!:ono:no:⚖️;Doctor:8000 per hour!:wtw:no:⛑️;Stockbreeder:3000 per 3 hours!:ono1:no:🐐;Merchant:50000 per 30 minutes!:ono2:no:🔔;Fisherman:3000 per 10 minutes!:ono3:no:🎣;Industry Owner:300000 per day!:ono4:no:🏭;Architect:150000 per hour!:ono5:no:🏰;Engineer:30000 per 4 hours!:ono6:no:⚙️;Musician:3000 per 2 hours!:ono7:no:🎵]
$color[1;303136]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]lawyer\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]doctor\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==wtw;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]stockbreeder\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono1;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]travel\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono2;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]fish\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono3;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]factory\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono4;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]architect\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono5;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]engineer\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono6;]`
},{
  name:"bruh", 
  type:"interaction", 
  prototype:"selectMenu", 
  code:`$interactionReply[;{newEmbed:{title:Salary Income!}{description:**You can use \`$getServerVar[prefix]musician\` command to collect your income!**}{color:303136}}
$onlyif[$interactionData[values[0]]==ono7;]`
}]