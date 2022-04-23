module.exports = {
  name:"setwmsg",
  code:`$setServerVar[wmsg;$message]
$description[1;__You set as \`welcome\` message ||$message||__]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Put text!]
$color[1;303136]

`
}