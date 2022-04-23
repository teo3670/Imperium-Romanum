module.exports = [{
 name: "t",
 $if:"v4",
 code: `$title[1;SPAM]
$description[1;React to update the number!]
$color[1;303136]
$addButton[1;Update;primary;reaction1;no;🏦]`
},{
 type: 'interaction', 
 prototype: "button",
 name: "reaction1",
 code: `$interactionUpdate[;$setServerVar[number;$sum[$getServerVar[number];1]];;]`
 }