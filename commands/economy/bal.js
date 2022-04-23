module.exports = {
name: "bal", 
aliases: ['balance'],
code: `
$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$color[1;303136]
$title[1;$username[$mentioned[1;yes]]'s Balance]
$description[1;
$addField[1;<:wallet:947855622047674448> Wallet;
<:cur:951155301854351461> $numberSeparator[$getGlobalUserVar[cash;$mentioned[1;yes]]]
]
$addField[1;<:card:951155934418329680> Bank;
<:cur:951155301854351461> $numberSeparator[$getGlobalUserVar[card;$mentioned[1;yes]]]
]
$addField[1;<:net:947855708349677588> Net Worth;
<:cur:951155301854351461> $numberSeparator[$sum[$getGlobalUserVar[cash;$mentioned[1;yes]];$getGlobalUserVar[card;$mentioned[1;yes]]]]
]]
`
}