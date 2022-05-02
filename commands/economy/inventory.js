module.exports = {
  name:"inventory",
  aliases: ['inv'],
  code:`
  $addField[1;Apple :apple:;
  \`$getGlobalUserVar[apple]\`]
  $addField[1;Milk :milk:;
  \`$getGlobalUserVar[milk]\`]
  $addField[1;Goat :goat:;
  \`$getGlobalUserVar[goat]\`]
$addField[1;Boat :ship:;
  \`$getGlobalUserVar[boat]\`]
$addField[1;Fish :fish:;
  \`$getGlobalUserVar[fish]\`]
$addField[1;Animals :deer:;
  \`$getGlobalUserVar[animals]\`]
$addField[1;Iphone 1 :mobile_phone:;
  \`$getGlobalUserVar[iphone1]\`]
$addField[1;Iphone 2 :mobile_phone:;
  \`$getGlobalUserVar[iphone2]\`] 
$addField[1;Iphone 3 :mobile_phone:;
  \`$getGlobalUserVar[iphone3]\`]  
$addField[1;Iphone 4 :mobile_phone:;
  \`$getGlobalUserVar[iphone4]\`]  
$addField[1;Iphone 5 :mobile_phone:;
  \`$getGlobalUserVar[iphone5]\`] 
$addField[1;Iphone SE :mobile_phone:;
  \`$getGlobalUserVar[iphoneSE]\`]  

  `
}