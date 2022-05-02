module.exports = {
  name:"removemoney",
  code:`$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
  $color[1;303136]
$thumbnail[1;$userAvatar[$authorID]]
$title[1;$username removed $username[$mentioned[1]] money]
$description[1;
> $username added $username[$mentioned[1]]  **$noMentionMessage** <:cur:951155301854351461> $username[$mentioned[1]] is now holding **$sub[$getGlobalUserVar[cash;$mentioned[1]];$noMentionMessage]** <:cur:951155301854351461> in his wallet!
]
$suppressErrors[1;{newEmbed: {description:Usage: **$getServerVar[prefix]removemoney <@user> <amount>**}{color:303136}}]
$onlyForIDs[946810784149819402;721276701753212929;{newEmbed:{description:Only the bot owners can remove money!}{color:303136}}]`
}