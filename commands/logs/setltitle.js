module.exports = {
  name:"setltitle",
  code:`$setServerVar[ltitle;$message]
$description[1;You set as \`leave\` title ||$message||]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Put text!]
$color[1;303136]

`
}