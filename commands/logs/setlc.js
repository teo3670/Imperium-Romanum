module.exports = {
  name:"setlc",
  code:`$setServerVar[leave;$mentionedChannels[1]]
$description[1;You set as \`leave\` channel <#$mentionedChannels[1]>]
$color[1;303136]
$description[2;**__Don't forget to set the rest system__**]
$onlyPerms[admin;**__You need admin permissions__**]
$onlyIf[$message!=;Mention a channel!]
$color[2;303136]
`
}