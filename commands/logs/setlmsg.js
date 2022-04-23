module.exports = {
  name:"setlmsg",
  code:`$setServerVar[lmsg;$message]
$description[1;You set as \`leave\` message ||$message||]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Put text!]
$color[1;303136]

`
}