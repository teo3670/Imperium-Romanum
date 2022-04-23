module.exports = {
  name:"setwtitle",
  code:`$setServerVar[wtitle;$message]
$description[1;__You set as \`welcome\` title ||$message||__]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Put text!]
$color[1;303136]

`
}