module.exports = {
  name:"with",
  aliases: ['withdraw'],
  $if:"v4",
  code: `$if[$message==all]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card];$getGlobalUserVar[card]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[card]]]
$description[1;:white_check_mark: **You have withdrawn __<:cur:951155301854351461>$getGlobalUserVar[card]__ from your bank**]
$color[1;303136]
$endif

$if[$isNumber[$message]==true]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card];$message]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message]]

$title[1;Successful]
$description[1;:white_check_mark: Withdrawn __<:cur:951155301854351461>$message__ from your bank]
$color[1;303136]

$endif`
}