module.exports = {
  name:"addmoney",
  code:`$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
  $color[1;303136]
$thumbnail[1;$userAvatar[$authorID]]
$title[1;$username added $username[$mentioned[1]] money]
$description[1;
> $username added $username[$mentioned[1]] > **$noMentionMessage** <:cur:951155301854351461> $username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[cash;$mentioned[1]];$noMentionMessage]** <:cur:951155301854351461> in his wallet!
]
$suppressErrors[1;{newEmbed: {description:Usage: **$getServerVar[prefix]addmoney <@user> <amount>**}{color:303136}}]
$onlyForIDs[946810784149819402;Only the bot owner can add money!]`
}
