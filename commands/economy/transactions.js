module.exports = [{
 name: "transactions",
 $if:"v4",
 code: `$title[1;$username]
$description[1;Bank transactions!]
$color[1;303136]
$addButton[1;Deposit all;danger;tombol1;no;🏦]
$addButton[2;Withdraw all;danger;tombol2;no;💸]`
},{
 type: 'interaction', 
 prototype: "button",
 name: "tombol1",
 code: `$interactionUpdate[;$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$getGlobalUserVar[cash]]]
$setGlobalUserVar[card;$sum[$getGlobalUserVar[card];$getGlobalUserVar[cash]]]
{newEmbed:
{color:303136}{description::white_check_mark: You have deposited __<:cur:951155301854351461>$getGlobalUserVar[cash]__ to your bank}};;]`
 },{
 type: 'interaction', 
 prototype: "button",
 name: "tombol2",
 code: `$interactionUpdate[;$setGlobalUserVar[card;$sub[$getGlobalUserVar[card];$getGlobalUserVar[card]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[card]]]{newEmbed:{description::white_check_mark: **You have withdrawn __<:cur:951155301854351461>$getGlobalUserVar[card]__ from your bank**}{color:303136}}
;;]`
}] 