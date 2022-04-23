module.exports = [{
name: "buy-boat",
aliases: ['buyboat'],
code: `$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];100000];$authorID]
$setGlobalUserVar[boat;$sum[$getGlobalUserVar[goat;$authorID];1];$authorID]
$color[1;303136]
$title[1;Boat :ship:]
$description[1;You bought a ship  for <:cur:951155301854351461>100000 and now you are merchant!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>99999;Need <:cur:951155301854351461>100000 in your wallet, try withrawing it first]
$giveRole[$guildID;$authorID;942909964022841425]`
},{
name: "buy-goat",  
aliases: ['buygoat'],
code: `$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];100];$authorID]
$setGlobalUserVar[goat;$sum[$getGlobalUserVar[goat;$authorID];1];$authorID]
$color[1;303136]
$title[1;Goat :goat:]
$description[1;You bought a boat  for <:cur:951155301854351461>100 and now you are stockbeeter!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>99;Need <:cur:951155301854351461>100 in your wallet, try withrawing it first]
$giveRole[$guildID;$authorID;942909967457996810]`
},{
name: "buy-apple",
aliases: ['buyapple'],
code: `$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];2];$authorID]
$setGlobalUserVar[apple;$sum[$getGlobalUserVar[apple;$authorID];1];$authorID]
$color[1;303136]
$title[1;Apple :apple:]
$description[1;You bought an apple  for <:cur:951155301854351461>1!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>2 in your wallet, try withrawing it first]`
},{
  name:"buy-iphone1", code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$getServerVar[appleowner]];50000];$getServerVar[appleowner]]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];50000];$authorID]
$setGlobalUserVar[iphone1;$sum[$getGlobalUserVar[iphone1;$authorID];1];$authorID]
$color[1;303136]
$title[1;Iphone 1 :mobile_phone:]
$description[1;You bought an iphone 1  for <:cur:951155301854351461>50000!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>50000 in your wallet, try withrawing it first]`
},{
name:"buy-iphone2", 
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$getServerVar[appleowner]];70000];$getServerVar[appleowner]]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];70000];$authorID]
$setGlobalUserVar[iphone2;$sum[$getGlobalUserVar[iphone2;$authorID];1];$authorID]
$color[1;303136]
$title[1;Iphone 2 :mobile_phone:]
$description[1;You bought an iphone 1  for <:cur:951155301854351461>70000!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>70000 in your wallet, try withrawing it first]`
},{
name:"buy-iphone3", 
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$getServerVar[appleowner]];100000];$getServerVar[appleowner]]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];100000];$authorID]
$setGlobalUserVar[iphone3;$sum[$getGlobalUserVar[iphone3;$authorID];1];$authorID]
$color[1;303136]
$title[1;Iphone 3 :mobile_phone:]
$description[1;You bought an iphone 3  for <:cur:951155301854351461>100000!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>100000 in your wallet, try withrawing it first]`
},{
name:"buy-iphone4", 
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$getServerVar[appleowner]];150000];$getServerVar[appleowner]]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];150000];$authorID]
$setGlobalUserVar[iphone4;$sum[$getGlobalUserVar[iphone4;$authorID];1];$authorID]
$color[1;303136]
$title[1;Iphone 4 :mobile_phone:]
$description[1;You bought an iphone 4  for <:cur:951155301854351461>150000!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>150000 in your wallet, try withrawing it first]`
},{
name:"buy-iphone5", 
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$getServerVar[appleowner]];170000];$getServerVar[appleowner]]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];170000];$authorID]
$setGlobalUserVar[iphone5;$sum[$getGlobalUserVar[iphone5;$authorID];1];$authorID]
$color[1;303136]
$title[1;Iphone 5 :mobile_phone:]
$description[1;You bought an iphone 5  for <:cur:951155301854351461>170000!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>170000 in your wallet, try withrawing it first]`
},{
name:"buy-iphoneSE", 
code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$getServerVar[appleowner]];250000];$getServerVar[appleowner]]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];250000];$authorID]
$setGlobalUserVar[iphoneSE;$sum[$getGlobalUserVar[iphoneSE;$authorID];1];$authorID]
$color[1;303136]
$title[1;Iphone SE :mobile_phone:]
$description[1;You bought an iphone SE  for <:cur:951155301854351461>250000!]
$onlyIf[$getGlobalUserVar[cash;$authorID]>1;Need <:cur:951155301854351461>250000 in your wallet, try withrawing it first]`
}]