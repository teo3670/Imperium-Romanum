module.exports = {
  name:"setwc",
  code:`$setServerVar[welcome;$mentionedChannels[1]]
$description[1;You set as \`welcome\` channel <#$mentionedChannels[1]>]
$color[1;303136]
$description[2;**__Don't forget to set the rest system__**]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Mention a channel!]
$color[2;303136]
`
}