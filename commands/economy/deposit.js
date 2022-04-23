module.exports = {
  name:"dep",
  aliases: ['deposit'],
  $if:"v4",
  code: `$if[$message==all]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$getGlobalUserVar[cash]]]
$setGlobalUserVar[card;$sum[$getGlobalUserVar[card];$getGlobalUserVar[cash]]]
$description[1;:white_check_mark: You have deposited __<:cur:951155301854351461>$getGlobalUserVar[cash]__ to your bank]
$color[1;303136]
$endif


$if[$isNumber[$message]==true]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$message]]

$setGlobalUserVar[card;$sum[$getGlobalUserVar[card];$message]]

$title[1;successful]
$description[1;:white_check_mark:  Deposited __<:cur:951155301854351461>$message__ to your bank]
$color[1;GREEN]


$endif`
}