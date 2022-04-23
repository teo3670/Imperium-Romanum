module.exports = {
name: "givemoney", 
aliases: ['give-money'],
code: `$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$noMentionMessage];$authorID]
$color[1;303136]
$title[1;$username gave $username[$mentioned[1]] money]
$description[1;
$username gave $username[$mentioned[1]] **$noMentionMessage** <:cur:951155301854351461>!
$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[cash;$mentioned[1]];$noMentionMessage]** <:cur:951155301854351461> in his wallet!
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[cash;$authorID];**⛔ You don't have enough in your wallet**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't give money to yourself**]
$onlyIf[$mentioned[1]!=;**⛔ Mention someone to give money to and then the amount, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
$onlyIf[$isBot[$mentioned[1]]!=true;**⛔ You can't give money to a Discord bot**]
$onlyIf[$isNumber[$noMentionMessage]==true;**⛔ That is not a number, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
$suppressErrors[1;Usage: **$getServerVar[prefix]givemoney <@user> <amount>**]`
}