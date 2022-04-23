module.exports = {
   name: "paybill",
   code: `$description[1;:white_check_mark: **You succesfully paid your electricity ** __Bill__ ]
$color[1;303136]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card];$multi[$getUserVar[messages];20]]]
  $resetUserVar[messages]
$setGlobalUserVar[card;$sum[$getGlobalUserVar[card;946810784149819402];100000];946810784149819402]
   `
 
}